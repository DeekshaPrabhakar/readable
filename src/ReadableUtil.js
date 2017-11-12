export const formatDate = (dateString) => {
    var monthNames = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct",
        "Nov", "Dec"
    ];

    var date = new Date(dateString);
    var newDate = new Date(date.toISOString());

    var day = newDate.getUTCDate();
    var monthIndex = newDate.getUTCMonth();
    var year = newDate.getUTCFullYear();

    return day + ' ' + monthNames[monthIndex] + " " + year;
}