const { ObjectID } = require('mongodb');

const restify = require('restify');
const db = require('./database/database');
const app = restify.createServer();

app.use(restify.plugins.bodyParser());

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', 'X-Requested-With');
  response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  return next();
});

app.use(restify.plugins.queryParser());

app.get('/', (req, res, next) => {
  res.send('Hello');
  next();
});

app.get('/api/reviews', async (req, res, next) => {
  try{
    const collectionId = req.query.collection;
    const result = await db.getReviews({});
    res.send(200, result);
  } catch (e) {
    res.send(500, 'Error occurs');
  }
  next();
});

app.get('/api/collections', async (req, res, next) => {
  try{
    const collections = await db.getReviewsCollection();

    const result = await Promise.all(collections.map(async collection => {
      const reviews = await db.getReviews({ collection: collection._id });
      collection.reviews = reviews;
      return collection;
    }));

    res.send(200, result);
  } catch (e) {
    res.send(500, 'error occurs');
  }
  next();
});

app.get('/api/collections/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await db.getReviewsCollection({_id: new ObjectID(id)});
    res.send(200, result);
  } catch (e) {
    console.log('error: ' + e);
  }
  next();
});

app.post('/api/collections', async(req, res, next) => {
  try{
    console.log(req.body);
    const name = req.body.name;
    console.log('body name');
    console.log(name);
    const result = await db.addReviewsCollection({name});
    console.log(result);
    res.send(200, result);
  } catch (e) {
    res.send(500, 'error occurs' + e);
  }
  next();
});

app.post('/api/reviews/update', async(req, res, next) => {
  try{
    const { review, collection } = req.body;
    const newCollection = await db.addReviewsCollection({name: collection.name});
    const result = await db.addCollectionToReview(review, newCollection);
    res.send(200, result);
  }catch (e) {
    res.send(500, 'error' + e);
  }
  next();
});

db.initDatabase().then(() => {
  console.log("Database initialized.")
});

app.listen(8080, () => {
  console.log('Started app listen to port 8080');
});