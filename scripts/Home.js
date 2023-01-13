/* fills id tag innerHTML with year diff between the given date and now */
function calculateYearDifference(id, date) {
    const now = new Date();
    const diff = Math.abs(now - date);
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365)); 
    document.getElementById(id).innerHTML = age;
}


// on load
calculateYearDifference("age", new Date(2001, 8, 8));
calculateYearDifference("vegTime", new Date(2017, 9, 1));