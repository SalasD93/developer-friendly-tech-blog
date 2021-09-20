const { Post } = require('../models');

const postdata = [
  {
    title: 'The wireframe tool',
    content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam elit, pretium sit amet risus ut, rhoncus feugiat neque. Nunc volutpat tempor pellentesque. Cras aliquam ullamcorper risus, placerat molestie ex egestas bibendum. Quisque convallis faucibus molestie. Duis ut risus interdum, facilisis libero eget, interdum neque. ',
    user_id: 10
  },
  {
    title: 'The best css framework',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam elit, pretium sit amet risus ut, rhoncus feugiat neque. Nunc volutpat tempor pellentesque. Cras aliquam ullamcorper risus, placerat molestie ex egestas bibendum. Quisque convallis faucibus molestie. Duis ut risus interdum, facilisis libero eget, interdum neque.',
    user_id: 8
  },
  {
    title: 'The best tech job',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam elit, pretium sit amet risus ut, rhoncus feugiat neque. Nunc volutpat tempor pellentesque. Cras aliquam ullamcorper risus, placerat molestie ex egestas bibendum. Quisque convallis faucibus molestie. Duis ut risus interdum, facilisis libero eget, interdum neque.',
    user_id: 1
  },
  {
    title: 'Tech jobs hiring',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam elit, pretium sit amet risus ut, rhoncus feugiat neque. Nunc volutpat tempor pellentesque. Cras aliquam ullamcorper risus, placerat molestie ex egestas bibendum. Quisque convallis faucibus molestie. Duis ut risus interdum, facilisis libero eget, interdum neque.',
    user_id: 4
  },
  {
    title: 'The best javascript library',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam elit, pretium sit amet risus ut, rhoncus feugiat neque. Nunc volutpat tempor pellentesque. Cras aliquam ullamcorper risus, placerat molestie ex egestas bibendum. Quisque convallis faucibus molestie. Duis ut risus interdum, facilisis libero eget, interdum neque.',
    user_id: 7
  },
  {
    title: 'New things Elon Musk is working on',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam elit, pretium sit amet risus ut, rhoncus feugiat neque. Nunc volutpat tempor pellentesque. Cras aliquam ullamcorper risus, placerat molestie ex egestas bibendum. Quisque convallis faucibus molestie. Duis ut risus interdum, facilisis libero eget, interdum neque.',
    user_id: 4
  },
  {
    title: 'Newest games coming out for PS5',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam elit, pretium sit amet risus ut, rhoncus feugiat neque. Nunc volutpat tempor pellentesque. Cras aliquam ullamcorper risus, placerat molestie ex egestas bibendum. Quisque convallis faucibus molestie. Duis ut risus interdum, facilisis libero eget, interdum neque.',
    user_id: 1
  },
  {
    title: "Are video games good for a child's cognitive development?",
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam elit, pretium sit amet risus ut, rhoncus feugiat neque. Nunc volutpat tempor pellentesque. Cras aliquam ullamcorper risus, placerat molestie ex egestas bibendum. Quisque convallis faucibus molestie. Duis ut risus interdum, facilisis libero eget, interdum neque.',
    user_id: 1
  },
  {
    title: 'What age did you start programming?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam elit, pretium sit amet risus ut, rhoncus feugiat neque. Nunc volutpat tempor pellentesque. Cras aliquam ullamcorper risus, placerat molestie ex egestas bibendum. Quisque convallis faucibus molestie. Duis ut risus interdum, facilisis libero eget, interdum neque.',
    user_id: 9
  },
  {
    title: 'Apple vs Microsoft',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam elit, pretium sit amet risus ut, rhoncus feugiat neque. Nunc volutpat tempor pellentesque. Cras aliquam ullamcorper risus, placerat molestie ex egestas bibendum. Quisque convallis faucibus molestie. Duis ut risus interdum, facilisis libero eget, interdum neque.',
    user_id: 5
  },
  {
    title: 'Why do people dislike Bulma CSS Framework?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam elit, pretium sit amet risus ut, rhoncus feugiat neque. Nunc volutpat tempor pellentesque. Cras aliquam ullamcorper risus, placerat molestie ex egestas bibendum. Quisque convallis faucibus molestie. Duis ut risus interdum, facilisis libero eget, interdum neque.',
    user_id: 3
  },
  {
    title: 'Innovative ideas',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam elit, pretium sit amet risus ut, rhoncus feugiat neque. Nunc volutpat tempor pellentesque. Cras aliquam ullamcorper risus, placerat molestie ex egestas bibendum. Quisque convallis faucibus molestie. Duis ut risus interdum, facilisis libero eget, interdum neque.',
    user_id: 10
  },
  {
    title: 'Best way to store uploaded images',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam elit, pretium sit amet risus ut, rhoncus feugiat neque. Nunc volutpat tempor pellentesque. Cras aliquam ullamcorper risus, placerat molestie ex egestas bibendum. Quisque convallis faucibus molestie. Duis ut risus interdum, facilisis libero eget, interdum neque.',
    user_id: 8
  },
  {
    title: 'How many monitors are too many?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam elit, pretium sit amet risus ut, rhoncus feugiat neque. Nunc volutpat tempor pellentesque. Cras aliquam ullamcorper risus, placerat molestie ex egestas bibendum. Quisque convallis faucibus molestie. Duis ut risus interdum, facilisis libero eget, interdum neque.',
    user_id: 3
  },
  {
    title: 'How can technology help a single mom?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam elit, pretium sit amet risus ut, rhoncus feugiat neque. Nunc volutpat tempor pellentesque. Cras aliquam ullamcorper risus, placerat molestie ex egestas bibendum. Quisque convallis faucibus molestie. Duis ut risus interdum, facilisis libero eget, interdum neque.',
    user_id: 3
  },
  {
    title: 'See a need, fill a need',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam elit, pretium sit amet risus ut, rhoncus feugiat neque. Nunc volutpat tempor pellentesque. Cras aliquam ullamcorper risus, placerat molestie ex egestas bibendum. Quisque convallis faucibus molestie. Duis ut risus interdum, facilisis libero eget, interdum neque.',
    user_id: 7
  },
  {
    title: 'How long is too long to spend on a block of code?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam elit, pretium sit amet risus ut, rhoncus feugiat neque. Nunc volutpat tempor pellentesque. Cras aliquam ullamcorper risus, placerat molestie ex egestas bibendum. Quisque convallis faucibus molestie. Duis ut risus interdum, facilisis libero eget, interdum neque.',
    user_id: 6
  },
  {
    title: 'If you need help, ask',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam elit, pretium sit amet risus ut, rhoncus feugiat neque. Nunc volutpat tempor pellentesque. Cras aliquam ullamcorper risus, placerat molestie ex egestas bibendum. Quisque convallis faucibus molestie. Duis ut risus interdum, facilisis libero eget, interdum neque.',
    user_id: 4
  },
  {
    title: "A computer is the creator's brain in a box",
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam elit, pretium sit amet risus ut, rhoncus feugiat neque. Nunc volutpat tempor pellentesque. Cras aliquam ullamcorper risus, placerat molestie ex egestas bibendum. Quisque convallis faucibus molestie. Duis ut risus interdum, facilisis libero eget, interdum neque.',
    user_id: 6
  },
  {
    title: 'The best way to write a tech resume',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam elit, pretium sit amet risus ut, rhoncus feugiat neque. Nunc volutpat tempor pellentesque. Cras aliquam ullamcorper risus, placerat molestie ex egestas bibendum. Quisque convallis faucibus molestie. Duis ut risus interdum, facilisis libero eget, interdum neque.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
