function getCurrentDate() {
    return new Date();
}

function getYear(date) {
    return date.getFullYear();
}

function getMonth(date) {
    return date.getMonth() + 1; // +1 porque getMonth() devuelve 0-11
}

function getDayOfMonth(date) {
    return date.getDate();
}

function changeYear(date, year) {
    const newDate = new Date(date);
    newDate.setFullYear(year);
    return newDate;
}

function addDays(date, days) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
}

function getDayOfWeek(date) {
    return date.getDay();
}

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function isBefore(date1, date2) {
    return date1.getTime() < date2.getTime();
}

function isAfter(date1, date2) {
    return date1.getTime() > date2.getTime();
}

module.exports = {
    getCurrentDate,
    getYear,
    getMonth,
    getDayOfMonth,
    changeYear,
    addDays,
    getDayOfWeek,
    formatDate,
    isBefore,
    isAfter
};
