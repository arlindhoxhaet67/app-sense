/* 
   Filename: sophisticated_code.js
   Description: This code demonstrates a complex and sophisticated implementation of a web-based chat application using JavaScript.
*/

// ChatManager class
class ChatManager {
  constructor() {
    this.users = new Map(); // Store user details
    this.rooms = new Map(); // Store chat room details
  }

  // User operations
  registerUser(userId, username) {
    this.users.set(userId, { username, rooms: new Set() });
  }

  getUser(userId) {
    return this.users.get(userId);
  }

  updateUser(userId, key, value) {
    const user = this.getUser(userId);
    user[key] = value;
  }

  deleteUser(userId) {
    this.users.delete(userId);
  }

  // Room operations
  createRoom(roomId, roomName) {
    this.rooms.set(roomId, { roomName, users: new Set() });
  }

  getRoom(roomId) {
    return this.rooms.get(roomId);
  }

  updateRoom(roomId, key, value) {
    const room = this.getRoom(roomId);
    room[key] = value;
  }

  deleteRoom(roomId) {
    this.rooms.delete(roomId);
  }

  // User-Room operations
  joinRoom(userId, roomId) {
    const user = this.getUser(userId);
    const room = this.getRoom(roomId);

    if (user && room) {
      user.rooms.add(roomId);
      room.users.add(userId);
    }
  }

  leaveRoom(userId, roomId) {
    const user = this.getUser(userId);
    const room = this.getRoom(roomId);

    if (user && room) {
      user.rooms.delete(roomId);
      room.users.delete(userId);
    }
  }

  // Utility methods
  getUsersInRoom(roomId) {
    const room = this.getRoom(roomId);
    return [...room.users].map(userId => this.getUser(userId));
  }

  getRoomsOfUser(userId) {
    const user = this.getUser(userId);
    return [...user.rooms].map(roomId => this.getRoom(roomId));
  }
}

// Usage example
const chatManager = new ChatManager();

chatManager.registerUser(1, "Alice");
chatManager.registerUser(2, "Bob");
chatManager.registerUser(3, "Carol");

chatManager.createRoom(1, "General");
chatManager.createRoom(2, "Design");
chatManager.createRoom(3, "Development");

chatManager.joinRoom(1, 1); // Alice joins General room
chatManager.joinRoom(1, 2); // Alice joins Design room
chatManager.joinRoom(2, 1); // Bob joins General room
chatManager.joinRoom(3, 2); // Carol joins Design room

// Get all users in Design room
const usersInDesignRoom = chatManager.getUsersInRoom(2);
console.log(usersInDesignRoom);

// Get all rooms joined by Alice
const roomsOfAlice = chatManager.getRoomsOfUser(1);
console.log(roomsOfAlice);

chatManager.leaveRoom(1, 2); // Alice leaves Design room

// Get all rooms joined by Alice after leaving Design room
const updatedRoomsOfAlice = chatManager.getRoomsOfUser(1);
console.log(updatedRoomsOfAlice);