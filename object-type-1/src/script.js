function createUser(firstName, lastName) {
    let user = {
        firstName: firstName,
        lastName: lastName,
    };
    return user;
}

function getFullName(user) {
    if(user && user.firstName && user.lastName) {
        return user.firstName + " " + user.lastName;
    }
    return "";
}

function sumPrices(prices) {
    let sum = 0;
    let values = Object.values(prices);
    for (let i = 0; i < values.length; i++) {
        if (!isNaN(values[i]) && Number.isFinite(values[i])) {
            sum += values[i];
        }
    }
    return sum;
}

function createUserWithFullName(firstName, lastName) {
    let user = {
        firstName: firstName,
        lastName: lastName,

        setFirstName(newFirstName) {
            this.firstName = newFirstName;
        },

        setLastName(newLastName) {
            this.lastName = newLastName;
        },
        getFullName() {
            return this.firstName + " " + this.lastName;
        },
    };
    return user;
}

function getWidth(params) {
    if (params.styling && params.styling.sizes && params.styling.sizes.width) {
        return params.styling.sizes.width;
    } else {
        return null;
    }
}

function extendObject(obj, isValid) {
    let clonedObj = {...obj};
    clonedObj.isValid = isValid;
    return clonedObj;
}
