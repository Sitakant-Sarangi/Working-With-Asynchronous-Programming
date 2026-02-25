function fetchUserProfile(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = {
        id: userId,
        name: "Peter",
        email: "peter@humber.com",
        username: "peter19"
        // TODO: Fill in user properties
      };
      resolve(user);
    }, 1000);
  });
}
fetchUserProfile(1).then(user =>console.log(user));

function fetchUserPosts(postIdId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = [
        {
          postId: 1,
          userId: 1,
          title: 'Hi',
          content: 'Hello all.'
        },
        {
          postId: 2,
          userId: 1,
          title: 'Learning Javascript',
          content: 'I am a beginer.'
        },
        {
          postId: 3,
          userId: 1,
          title: 'College',
          content: 'I am studying at Humber.'
        }
      ];
      resolve(posts);
    }, 1500);
  });
}
fetchUserPosts(1).then(posts =>console.log(posts));

function fetchUserComments(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const comments = [
        {
          commentId: 1,
          postId: 1,
          username: "X",
          comment: 'Hi',
          
        },
        {
          commentId: 2,
          postId: 2,
          username: "Y",
          comment: 'Hi, is it easy or hard',
        },
        {
          commentId: 3,
          postId: 3,
          username: "Z",
          comment: 'Hello, is it a good college',
        }
      ];
      resolve(comments);
    }, 2000);
  });
}
fetchUserComments(2).then(comments =>console.log(comments));







