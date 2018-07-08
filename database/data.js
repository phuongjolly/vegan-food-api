const reviews = [
  {
    name: 'abcz',
    dish: {
      id: 0,
      name: 'Salad',
      type: 'Vegan',
      restaurant: 'The Butcher’s Son, Downtown Berkeley, Berkeley, California, United States',
    },
    title: 'Fantasic SADAD',
    image: 'https://res.cloudinary.com/abillionveg/image/upload/c_scale,w_700/v1530087318/Pickles_yoyqut.jpg',
    content: 'Our ancient ancestors found fermentation an effective way to preserve food, as the lactic acid or alcohol produced becomes natural preservatives that ',
    rate: 5,
    user: {
      id: 0,
      name: 'Matt',
      avatar: 'https://semantic-ui.com/images/avatar/small/matt.jpg',
    },
  },
  {
    name: 'abcz',
    dish: {
      id: 1,
      name: 'Salad',
      type: 'Vegan',
      restaurant: 'The Butcher’s Son, Downtown Berkeley, Berkeley, California, United States',
    },
    title: 'Pretty food',
    image: 'https://res.cloudinary.com/abillionveg/image/upload/c_scale,w_700/v1530087319/Wine_f6fppn.jpg',
    content: 'Fermentation is the result of bacteria and yeast breaking down carbohydrates to produce carbon dioxide, lactic acid, and alcohol as '
    + 'Fermentation is the result of bacteria and yeast breaking down carbohydrates to produce carbon dioxide, lactic acid, and alcohol as'
    + 'This is an example of truncating the text in PHP. This method works fine in limiting the text, but requires messing with the'
    + 'server-side just to deal with presentation, which is supposed to the be the job of CSS',
    rate: 3,
    user: {
      id: 2,
      name: 'La la',
      avatar: 'https://semantic-ui.com/images/avatar/small/elliot.jpg',
    },
  },
  {
    name: 'abcdasfdsaz',
    dish: {
      id: 2,
      name: 'Salad',
      type: 'Vegan',
      restaurant: 'The Butcher’s Son, Downtown Berkeley, Berkeley, California, United States',
    },
    title: 'Fantasic food',
    image: 'https://res.cloudinary.com/abillionveg/image/upload/c_scale,w_700/v1530087318/kimchi_ttn85h.jpg',
    content: 'Kimchi is the center of attention in many Korean foods. The kimchi mentioned at the beginning of this article is actually truer to the original ',
    rate: 5,
    user: {
      id: 3,
      name: 'John',
      avatar: 'https://semantic-ui.com/images/avatar/small/joe.jpg',
    },
  },
  {
    name: 'abfdafdacz',
    title: 'Terrible food',
    dish: {
      id: 3,
      name: 'Salad',
      type: 'Vegan',
      restaurant: 'The Butcher’s Son, Downtown Berkeley, Berkeley, California, United States',
    },
    image: 'http://www.belmare.gr/uploads/vegan-Eggplant-baked.jpg',
    content: 'Kimchi is the center of attention in many Korean foods. The kimchi mentioned at the beginning of this article is actually truer to the original ',
    rate: 5,
    user: {
      id: 3,
      name: 'John',
      avatar: 'https://semantic-ui.com/images/avatar/small/joe.jpg',
    },
  },
  {
    name: 'bbf',
    title: 'Terrible food',
    dish: {
      id: 3,
      name: 'Salad',
      type: 'Vegan',
      restaurant: 'The Butcher’s Son, Downtown Berkeley, Berkeley, California, United States',
    },
    image: '',
    content: 'Kimchi is the center of attention in many Korean foods. The kimchi mentioned at the beginning of this article is actually truer to the original ',
    rate: 5,
    user: {
      id: 3,
      name: 'John',
      avatar: 'https://semantic-ui.com/images/avatar/small/joe.jpg',
    },
  },
  {
    name: 'aaf',
    title: 'Noodle Malaysia',
    dish: {
      id: 3,
      name: 'Salad',
      type: 'Vegan',
      restaurant: 'The Butcher’s Son, Downtown Berkeley, Berkeley, California, United States',
    },
    image: 'https://www.seriouseats.com/images/2016/03/20150203-menu-yu-xian-sichuan-eggplant-fish-flavor-12-thumb-1500xauto-418828.jpg',
    content: 'Kimchi is the center of attention in many Korean foods. The kimchi mentioned at the beginning of this article is actually truer to the original ',
    rate: 5,
    user: {
      id: 3,
      name: 'John',
      avatar: 'https://semantic-ui.com/images/avatar/small/joe.jpg',
    },
  },
  {
    name: 'aaffff',
    title: 'Miennnn',
    dish: {
      id: 3,
      name: 'Salad',
      type: 'Vegan',
      restaurant: 'The Butcher’s Son, Downtown Berkeley, Berkeley, California, United States',
    },
    image: 'https://www.seriouseats.com/images/2016/03/20150203-menu-yu-xian-sichuan-eggplant-fish-flavor-12-thumb-1500xauto-418828.jpg',
    content: 'Kimchi is the center of attention in many Korean foods. The kimchi mentioned at the beginning of this article is actually truer to the original ',
    rate: 5,
    user: {
      id: 3,
      name: 'John',
      avatar: 'https://semantic-ui.com/images/avatar/small/joe.jpg',
    },
  },
];

const reviewsCollection = [
  {
    name: 'Viet Nam cuisine '
  },
  {
    name: 'Singapore cuisine '
  },
  {
    name: 'Malaysia cuisine '
  },
  {
    name: 'Thai cuisine '
  },
];

module.exports = {
  reviewsCollection,
  reviews,
};
