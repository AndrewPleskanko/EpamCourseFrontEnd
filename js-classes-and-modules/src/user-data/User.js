import { Task } from './Task.js';

export class User {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = 1;
        this.tasks = [];
    }
    getTasksCount() {
        return this.tasks.length;
    }

    addTasks(tasks) {
        for (let task of tasks) {
            if (task instanceof Task) {
                this.tasks.push(task);
            }
        }
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    setAge(age) {
        if (Number.isInteger(age) && age > 0) {
            this.age = age;
        }
    }
}