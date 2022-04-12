const assert = require('assert');

module.exports = class User {
  constructor({ userId, username, accountType, authType, email }) {
    assert(userId, "userId is required");
    assert(username, "username is required");
    assert(accountType, "accountType is required");
    assert(authType, "authType is required");
    assert(email, "email is required")
    this.userId = userId;
    this.username = username;
    this.accountType = accountType;
    this.authType = authType;
    this.email = email;
  }

  getUserId() {
    return this.userId;
  }

  getUsername() {
    return this.username;
  }

  getAccountType() {
    return this.accountType;
  }

  getAuthType() {
    return this.authType;
  }

  getEmail() {
    return this.email;
  }

  toObject() {
    return {
      user: this.userId,
      username: this.username,
      accountType: this.accountType,
      authType: this.authType,
      email: this.email
    };
  }
};
