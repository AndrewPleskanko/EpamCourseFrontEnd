export function getFullDaysBeforeNewYear(date, month) {
    if (
        !date ||
        !month ||
        isNaN(date) ||
        isNaN(month) ||
        date <= 0 ||
        month <= 0 ||
        date === Infinity ||
        date === -Infinity ||
        month === Infinity ||
        month === -Infinity
    ) {
        return null;
    }
    const now = new Date(new Date().getFullYear(), month - 1, date);
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    return Math.ceil((newYear - now) / (1000 * 60 * 60 * 24));
}
export function formatWithWeekday(date) {
    if (!date) {
        return "";
    }
    const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return `${weekdays[date.getDay()]}, ${date.getDate()}, ${
        months[date.getMonth()]
    } ${date.getFullYear()}`;
}
export function isValidDate(date) {
    return date instanceof Date && !isNaN(date);
}

export function isAfter(date, dateToCompare) {
    if (!isValidDate(date) || !isValidDate(dateToCompare)) {
        return false;
    }
    return date > dateToCompare;
}

export function formatDistanceToNow(date) {
    if (!date) {
        return "Date is unknown";
    }
    const diff = Date.now() - date.getTime();
    const diffInSecs = Math.floor(diff / 1000);
    const diffInMins = Math.floor(diffInSecs / 60);
    if (diffInSecs < 30) {
        return "less than a minute";
    } else if (diffInSecs < 90) {
        return "1 minute";
    } else if (diffInMins < 45) {
        return `${diffInMins} minutes`;
    } else if (diffInMins < 90) {
        return "about 1 hour";
    } else {
        const pad = (num) => (num < 10 ? "0" + num : num);
        return `${pad(date.getDate())}.${pad(
            date.getMonth() + 1
        )}.${date.getFullYear()} ${pad(date.getHours())}:${pad(
            date.getMinutes()
        )}:${pad(date.getSeconds())}`;
    }
}
