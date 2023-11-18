/**
 * Filename: ComplexCode.js
 * 
 * Description: This code demonstrates a complex implementation of a social media application.
 *              It includes user authentication, creating posts, adding friends, and more.
 */

// Helper class for generating unique IDs
class IdGenerator {
  constructor() {
    this.counter = 0;
  }
  
  generateId() {
    return this.counter++;
  }
}

// User class representing a user in the social media app
class User {
  constructor(name) {
    this.id = new IdGenerator().generateId();
    this.name = name;
    this.friends = [];
    this.posts = [];
  }
  
  addFriend(user) {
    this.friends.push(user);
    user.friends.push(this);
  }
  
  createPost(content) {
    const post = new Post(this, content);
    this.posts.push(post);
    return post;
  }
}

// Post class representing a post by a user
class Post {
  constructor(user, content) {
    this.id = new IdGenerator().generateId();
    this.user = user;
    this.content = content;
    this.likes = 0;
    this.comments = [];
  }
  
  like() {
    this.likes++;
  }
  
  addComment(user, comment) {
    const commentObj = { user, comment };
    this.comments.push(commentObj);
  }
}

// Main function for executing the code
function run() {
  const user1 = new User("John");
  const user2 = new User("Jane");
  
  user1.addFriend(user2);
  
  const post1 = user1.createPost("Feeling great!");
  post1.like();
  
  user2.createPost("Having fun!");
  user2.createPost("Nice weather today.");
  
  post1.addComment(user2, "Glad to hear that!");
  post1.addComment(user1, "Thanks!");
  
  console.log(user1);
  console.log(user2);
}

// Execute the main function
run();