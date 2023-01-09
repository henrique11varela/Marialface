/* fills id tag innerHTML with year diff between the given date and now */
function calculateYears(id, date) {
    const now = new Date();
    const diff = Math.abs(now - date);
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365)); 
    document.getElementById(id).innerHTML = age;
}


// on load
calculateYears("age", new Date(2001, 8, 8));
calculateYears("vegTime", new Date(2001, 8, 8));