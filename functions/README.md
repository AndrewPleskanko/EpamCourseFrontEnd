# Functions

In the src folder create the `script.js` file. This file should export function formatDistanceToNow. Your solution cannot be verified if you use a different file.

When creating a function, you must use `Function Declaration`, or it will not be able to be verified. How to use `Function Declaration`: [javascript.info: Function Declaration](https://javascript.info/function-basics#function-declaration).

### Requirements for the functions

**Function "formatDistanceToNow"**

Write a function `formatDistanceToNow`, which returns the distance between a given date and now in words.

Please note that the function should be exported from the `script.js` file.

This function takes one parameter:
`date` - a Date object for formatting

1. If the date is 0 to 30 seconds before now, the function should return the string `'less than a minute'`.
2. If the date is '30 secs`to`1 min 30 secs`before now, the function should return the string`'1 minute'`.
3. If the date is `1 min 30 secs` to '44 mins 30 secs`before now, the function should return the string`[2..44] minutes`.
4. If the date is '44 mins 30 secs` to '89 mins 30 secs` before now, the function should return the string `about 1 hour`.
5. Otherwise, it should return the full date in the format `DD.MM.YYYY HH:mm:ss`. That is: `day.month.year hours:minutes:seconds`, all in two-digit format, e.g., `01.06.2016 09:07:24`. Please note you should add 0 to a one-digit number in months, dates, hours, minutes, and seconds.
6. If the date object is `undefined` or `null`, it should return the string `Date is unknown`.

**An example of using the function:**

```js
formatDistanceToNow(new Date(new Date() - 10)); // 'less than a minute'
formatDistanceToNow(new Date(new Date() - 60 * 1000)); // '1 minute'
formatDistanceToNow(new Date(new Date() - 31 * 60 * 1000)); // '31 minutes'
formatDistanceToNow(new Date(new Date() - 77 * 60 * 1000)); // 'about 1 hour'

formatDistanceToNow(new Date(2012, 6, 28, 9, 7, 32)); // '28.07.2016 09:07:32'
formatDistanceToNow(null); // 'Date is unknown'
formatDistanceToNow(); // 'Date is unknown'
```
