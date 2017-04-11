export const fetchQuizList = () => {
  return [
    {
      id: 0,
      title: 'Animals Quiz',
      description: 'Awesome Quiz about animals',
      type: "Animals",
      levels: [
        {
          id: 0,
          unlocked: true,
        },
        {
          id: 1,
          unlocked: false
        },
        {
          id: 2,
          unlocked: false
        }
      ]
    },
    {
      id: 1,
      title: 'People Quiz',
      description: 'Awesome Quiz about people',
      type: "People",
      levels: [
        {
          id: 0,
          unlocked: true,
        },
        {
          id: 1,
          unlocked: true
        },
        {
          id: 2,
          unlocked: false
        },
        {
          id: 3,
          unlocked: false
        }
      ]
    }
  ]
};
