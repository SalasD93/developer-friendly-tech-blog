const { Post } = require('../models');

const postdata = [
  {
    title: 'The wireframe tool',
    content: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 10
  },
  {
    title: 'The best css framework',
    content: 'https://nasa.gov/donec.json',
    user_id: 8
  },
  {
    title: 'The best tech job',
    content: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1
  },
  {
    title: 'Tech jobs hiring',
    content: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 4
  },
  {
    title: 'The best javascript library',
    content: 'http://google.ca/nam/nulla/integer.aspx',
    user_id: 7
  },
  {
    title: 'New things Elon Musk is working on',
    content: 'https://stanford.edu/consequat.png',
    user_id: 4
  },
  {
    title: 'Newest games coming out for PS5',
    content: 'http://edublogs.org/non/ligula/pellentesque.js',
    user_id: 1
  },
  {
    title: "Are video games good for a child's cognitive development?",
    content: 'http://ucla.edu/consequat/nulla.html',
    user_id: 1
  },
  {
    title: 'What age did you start programming?',
    content: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 9
  },
  {
    title: 'Apple vs Microsoft',
    content: 'https://reverbnation.com/ligula/sit.jpg',
    user_id: 5
  },
  {
    title: 'Why do people dislike Bulma CSS Framework?',
    content: 'http://china.com.cn/lectus/vestibulum.json',
    user_id: 3
  },
  {
    title: 'Innovative ideas',
    content: 'http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
    user_id: 10
  },
  {
    title: 'Best way to store uploaded images',
    content: 'https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml',
    user_id: 8
  },
  {
    title: 'How many monitors are too many?',
    content: 'https://lycos.com/natoque/penatibus/et.html',
    user_id: 3
  },
  {
    title: 'How can technology help a single mom?',
    content: 'https://gmpg.org/lorem.jpg',
    user_id: 3
  },
  {
    title: 'See a need, fill a need',
    content: 'https://paginegialle.it/mattis/egestas.jsp',
    user_id: 7
  },
  {
    title: 'How long is too long to spend on a block of code?',
    content: 'http://wikia.com/turpis/eget.jpg',
    user_id: 6
  },
  {
    title: 'If you need help, ask',
    content: 'https://shareasale.com/quis.json',
    user_id: 4
  },
  {
    title: "A computer is the creator's brain in a box",
    content: 'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
    user_id: 6
  },
  {
    title: 'The best way to write a tech resume',
    content: 'https://java.com/at/nibh/in.png',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
