export const fetchQuestions = (payload) => {
  if (payload.level === 0) {
    return [
      {
        title: 'What sound does a dog make?',
        id: 0,
        type: 'dog',
        score: 1000,
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
        score: 10000,
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
  } else if (payload.level === 1) {
    return [
      {
        title: 'What is most common language in the world?',
        id: 0,
        type: 'language',
        score: 200,
        time: 5000,
        answers: [
          {
            title: 'English',
            id: 0
          },
          {
            title: 'Polish',
            id: 1
          },
          {
            title: 'Irish',
            id: 2
          }
        ]
      },
      {
        title: 'How many legs people use to have?',
        id: 1,
        type: 'legs',
        score: 50,
        time: 2000,
        answers: [
          {
            title: '2',
            id: 0
          },
          {
            title: '1',
            id: 1
          },
          {
            title: '3+',
            id: 2
          }
        ]
      }
    ]
  } else {
    return []
  }
};
