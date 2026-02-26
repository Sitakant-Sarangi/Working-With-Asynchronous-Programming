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

function fetchUserPosts(postId) {
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


async function fetchDataSequentially(userId) {
  console.log('Starting sequential fetch...');
  const startTime = Date.now();
  
 try {
    // TODO: Step 1 - Await fetchUserProfile
    // Log: "User profile retrieved"
    const user = await fetchUserProfile(userId);
    console.log('User profile retrieved');


    // TODO: Step 2 - Await fetchUserPosts
    // Log: "Posts retrieved"
     const posts = await fetchUserPosts(userId);
    console.log('Posts retrieved');


    // TODO: Step 3 - Loop through posts and await fetchPostComments for each
    // Log: "Comments retrieved for post X"
    const postsWithComments = [];
    for (const post of posts) {
      const comments = await fetchPostComments(postId);
      postsWithComments.push({ ...post, comments });
      console.log('comments retrieved for post ${postId}');
    


    const endTime = Date.now();
    console.log(`Sequential fetch took ${endTime - startTime}ms`);
    
    // TODO: Return all data combined
    return { user, posts: postsWithComments };

    }
  } catch{
    console.error('Error in sequential fetch:', error.message);
    
  }
}

async function fetchDataInParallel(userId) {
  console.log('Starting parallel fetch...');
  const startTime = Date.now();
  if (Math.random() < 0.3) {
    reject(new Error('Failed to fetch comments'));
    return;
  }
  
  try {
    // TODO: Use Promise.all() to fetch user and posts simultaneously
    // Hint: const [user, posts] = await Promise.all([...]);
    onst [user, posts] = await Promise.all([fetchUser(userId), fetchUserPosts(userId)]);
    
    console.log('User and posts retrieved simultaneously');
    
    // TODO: Fetch all comments for all posts in parallel
    // Hint: Use posts.map() with fetchPostComments, then Promise.all()
     const comments = await Promise.all(posts.map(post => fetchPostComments(post.postId)));
    
    const endTime = Date.now();
    console.log(`Parallel fetch took ${endTime - startTime}ms`);
    
    // TODO: Return all data combined
     return { user, posts, comments };
    
  } catch (error) {
    console.error('Error in parallel fetch:', error.message);
  }
}


//Update your sequential and parallel functions to handle errors without crashing:

//Modify ONE of your functions to randomly fail. Add this at the beginning of your promise:
function fetchPostComments(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Add random failure (30% chance of error)
      
      // Your existing code here...
      const comments = ;
      resolve(comments);
    }, 2000);
  });
}


async function fetchDataWithErrorHandling(userId) {
  try {
    // Your fetching code here
       const userData = await fetchUserData(userId); 
    const comments = await fetchPostComments(userData.lastPostId);
    console.log("Success:", { userData, comments });
    return { user, posts };

  } catch (error) {
    // TODO: Log the error
      console.error("Data fetch failed:", error.message);
    // TODO: Return partial data if some fetches succeeded
    return{user: null,posts: [], error: error.messages}
    // TODO: Display user-friendly error message
    alert("Data error. Please try again .");
    
  }
}



async function getUserContent(userId) {
  console.log('=== Fetching all user content ===');
  
  try {
    // Step 1: Fetch user profile
    const user = await fetchUserProfile(userId);
    console.log('Step 1: User profile retrieved -', user.name);
    
    // Step 2: Fetch user's posts
    // TODO: Complete this step
    const posts = await fetchUserPosts(userId);
    console.log('Step 2: Posts retrieved -', /* number of posts */);
    
    // Step 3: Fetch comments for all posts
    const comments = await fetchComentsForPosts(posts);
    console.log('Step 3: Comments retrieved');
    
    // Step 4: Combine all data into one object
    const allContent = {
      user: user,
      posts: posts,
      comments: comments
      // TODO: Structure your complete data
    };
    
    return allContent;
    
  } catch (error) {
    console.error('Failed to fetch user content:', error.message);
    throw error;
  }
}

document.getElementById('sequentialBtn').addEventListener('click', async () => {
  // TODO: Call fetchDataSequentially
  const outputDiv=document.getElementById('output');
  // TODO: Display results in the output div
  outputDiv.innerText = JSON.stringifi(SpeechRecognitionResultList, null, 2);
});
 
document.getElementById('parallelBtn').addEventListener('click', async () => {
  // TODO: Call fetchDataInParallel
  const results = await fetchDataInPraallel();
  // TODO: Display results in the output div
  const outputDiv = document.getElementById('output');
  outputDiv.innerText =JSON.stringify(results, null);
});


unction displayResults(data, container) {
    // 1. Clear the container
    container.innerHTML = '';

    // 2. Create HTML elements for User Information
    const userInfo = document.createElement('div');
    userInfo.innerHTML = <h2>User: ${data.name}</h2><p>Email: ${data.email}</p>;
    container.appendChild(userInfo);

    // 3. Iterate through each post
    data.posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.style.border = "1px solid #ccc";
        postElement.style.margin = "10px 0";
        postElement.style.padding = "10px";

        // Show post title
        const postTitle = document.createElement('h3');
        postTitle.textContent = post.title;
        postElement.appendChild(postTitle);

        // 4. Create comments section under each post
        const commentsHeader = document.createElement('h4');
        commentsHeader.textContent = "Comments:";
        postElement.appendChild(commentsHeader);

        const commentList = document.createElement('ul');
        post.comments.forEach(comment => {
            const commentItem = document.createElement('li');
            commentItem.textContent = comment.body; // Assuming the comment text is in a 'body' property
            commentList.appendChild(commentItem);
        });
        postElement.appendChild(commentList);

        // 5. Append the post (with its title and comments) to the main container
        container.appendChild(postElement);
    });
}




