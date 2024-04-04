# Async JS

## Before we start

1. This practical task is verified automatically with tests.
2. Please, put all your `JavaScript` code in the `src/script.js` file. If you use any other file, we would not be able to verify it.
3. Please, don't change the page structure, if it is not required for a task. It may affect tests.


## Task Requirements

Please, note you should edit the `src/script.js` file. We can't verify your solution if you use a different file.

For a function creation, it is mandatory to use `Function Declaration` or we will not be able to verify them. How to use `Function Declaration`: [javascript.info: Function Declaration](https://javascript.info/function-basics#function-declaration).

**Please, note:**

- If task requirement says _Function should **return** <something>_, it should deliberately return the expected value. If you show it in the console, instead of returning a value it will not pass the check. More about function returning a value: [Returning a value](https://javascript.info/function-basics#returning-a-value).

### Requirements for the task

### Mocker

Write the function `mocker` for dev mocking with 1s delay.
A function should return a function returns promise which resolved with a 1 second delay

```js
function mocker(data) {
  // your code...
}
```

This function takes one parameter:
`data` - an array or object with the users data.

1. The function should create new function return it.
2. This new function creates a Promise object.
3. The resolve function is called with the provided data argument after 1s.
4. The new function defined by mocker returns the Promise object.

**Example of a function usage:**

```js
const getUsers = mocker([{ id: 1, name: "User1" }]);
getUsers().then((users) => {
  // Will fire after 1 second.
  console.log(users); // [{id: 1, name: 'User1'}];
});
```
