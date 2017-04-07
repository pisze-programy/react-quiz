export const fetchQuestions = () => {
  return [
    {
      title: 'What sound does a dog make?',
      id: 0,
      type: 'dog',
      score: 100,
      time: 2000,
      answers: [
        {
          title: 'Meow',
          id: 0
        },
        {
          title: 'Woof',
          id: 1
        },
        {
          title: 'Hoo',
          id: 2
        }
      ]
    },
    {
      title: 'What sound does a cat make?',
      id: 1,
      type: 'cat',
      score: 150,
      time: 20000,
      answers: [
        {
          title: 'Nope',
          id: 0
        },
        {
          title: 'Nuffin',
          id: 1
        },
        {
          title: 'Boring',
          id: 2
        }
      ]
    }
  ]
};
