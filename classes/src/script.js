class Task {
    constructor(name) {
        this.name = name;
    }
}

class Guest {
    constructor(tasks) {
        this.tasks = [...tasks];
    }

    getTask(index) {
        return this.tasks[index];
    }
    getArray() {
        return this.tasks;
      }
      createTask() {
        throw new Error("method 'createTask' is not defined");
      }
    
      changeType() {
        throw new Error("method 'changeType' is not defined");
      }
}

class User {
    constructor(tasks) {
        this.tasks = tasks;
    }

    getTask(index) {
        return this.tasks[index];
    }

    createTask(task) {
        this.tasks.push(task);
    }
}

class Admin {
    constructor(array) {
        this.array = array;
    }

    getArray() {
        return this.array;
    }

    changeType(index) {
        const item = this.array[index];
        if (item instanceof Guest) {
            const tasks = item.tasks;
            this.array[index] = new User(tasks);
        } else if (item instanceof User) {
            const tasks = item.tasks;
            this.array[index] = new Guest(tasks);
        }
        return this.array;
    }
}

module.exports.Task = Task;
module.exports.Guest = Guest;
module.exports.User = User;
module.exports.Admin = Admin;
