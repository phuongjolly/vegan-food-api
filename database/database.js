const { MongoClient, ObjectID } = require('mongodb');
const data = require('./data');

const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'vegan-food';
const REVIEWS = 'reviews';
const REVIEWS_COLLECTION = 'reviews_collection';

let clientInstance;

async function connect() {
  if(!clientInstance){
    clientInstance = await MongoClient.connect(MONGO_URL, { useNewUrlParser: true });
  }
  return clientInstance;
}

async function initDatabase() {

  const client = await connect();
  const db = await client.db(DB_NAME);
  const reviews = db.collection(REVIEWS);
  const reviewsCount = await reviews.countDocuments({});
  if(reviewsCount === 0) {
    reviews.insertMany(data.reviews);
  }

  const reviewsCollections = db.collection(REVIEWS_COLLECTION);
  const reviewsCollectionCount = await reviewsCollections.countDocuments({});
  if(reviewsCollectionCount === 0) {
    reviewsCollections.insertMany(data.reviewsCollection);
  }
}

async function getCollection(name) {
  const client = await connect();
  const db = await client.db(DB_NAME);
  return db.collection(name);
}

async function getReviews(filter = {}) {
  const reviews = await getCollection(REVIEWS);
  return await reviews
    .aggregate([
      {
        $match: filter
      },
      {
        $lookup: {
          from: REVIEWS_COLLECTION,
          localField: 'collection',
          foreignField: '_id',
          as: 'collection'
        }
      },
      {
        "$unwind": {
          "path": "$collection",
          "preserveNullAndEmptyArrays": true
        }
      }])
    .toArray();
}

async function getReviewsCollection(filter = {}) {
  const reviewsCollection = await getCollection(REVIEWS_COLLECTION);
  return await reviewsCollection
      .aggregate([
        {
          $match: filter
        },
        {
        $lookup: {
          from: REVIEWS,
          localField: '_id',
          foreignField: 'collection',
          as: 'reviews'
        }
      }])
      .toArray();
}

async function addReviewsCollection(collection) {
  const reviewsCollection = await getCollection(REVIEWS_COLLECTION);
  let result = await reviewsCollection.findOne({name: collection.name});
  if (result == null) {
    result = await reviewsCollection.insertOne(collection);
    result = result.ops[0];
  }
  return result;
}

async function addCollectionToReview(review, collection) {
  const reviews = await getCollection(REVIEWS);

  return await reviews.findOneAndUpdate(
    { _id: new ObjectID(review._id) },
    {
      $set: {
        collection: collection._id
      }
    }
  );
}

module.exports = {
  initDatabase,
  getReviews,
  getReviewsCollection,
  addReviewsCollection,
  addCollectionToReview
};