import isValidName from './isValidName.js';
import { GREETING } from './constants/GREETING.js';

export default function sayHelloToUser(name) {
    if (!isValidName(name)) {
        return 'Invalid name';
    }

    return `${GREETING}, ${name}!`;
}