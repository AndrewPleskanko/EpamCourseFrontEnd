function sumSequence(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 1 / Math.pow(2, i);
    }

    return sum.toFixed(2);
}
function mergeArrays(...arr) {
    let merged = [].concat(...arr);

    return merged;
}
function isPalindrome(str) {
    let charCount = {};
    for (let char of str) {
        if (char !== " ") {
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }

    let oddCount = 0;
    for (let count of Object.values(charCount)) {
        if (count % 2 !== 0) {
            oddCount++;
        }
    }

    return oddCount <= 1;
}

function countLetters(str) {
    if (!str) {
        return {};
    }

    let charCount = {};
    for (let char of str) {
        if (char !== " ") {
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }

    return charCount;
}

function divideArrays(arr, size) {
    if (size <= 0) {
        return [];
    }

    if (arr.length <= size) {
        return [arr];
    }

    let dividedArrays = [];
    for (let i = 0; i < arr.length; i += size) {
        dividedArrays.push(arr.slice(i, i + size));
    }

    return dividedArrays;
}

function encrypt(str, n) {
    if (n <= 0) {
        return str;
    }

    let encryptedStr = "";
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            let shiftedCode = ((((charCode - 65 - n) % 26) + 26) % 26) + 65;
            encryptedStr += String.fromCharCode(shiftedCode);
        } else {
            encryptedStr += str[i];
        }
    }

    return encryptedStr;
}
