class User {
    constructor(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

class UserManager {
    constructor() {
        this.users = new Map();
        this.currentId = 1;
    }

    validateUserDetails(name, email, phone) {
        if (!name || !email || !phone) {
            throw new Error("All fields (name, email, phone) are required");
        }
        if (/\s/.test(email) || !email.includes("@")) {
            throw new Error("Invalid email format");
        }
    }
    createUser(name, email, phone) {
        this.validateUserDetails(name, email, phone);
        const user = new User(this.currentId++, name, email, phone);
        this.users.set(user.id, user);
        return user;
    }

    updateUser(id, name, email, phone) {
        if (!this.users.has(id)) {
            return null;
        }
        this.validateUserDetails(name, email, phone); 
        const user = this.users.get(id);
        user.name = name;
        user.email = email;
        user.phone = phone;
        return user;
    }

    deleteUser(id) {
        return this.users.delete(id);
    }

    getUserById(id) {
        return this.users.get(id) || null;
    }
}

module.exports = new UserManager();
