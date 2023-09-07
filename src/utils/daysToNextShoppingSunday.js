export default function daysToNextShoppingSunday(TodayDate, FinishDate) {
    var endDate = new Date(FinishDate);
    var today = new Date(TodayDate);
    let diff = endDate - today
    let hour = Math.floor(diff / 1000 / 60 / 60);
    let days = Math.floor(hour / 24);
    let timeString = "";
    console.log(days);
    if (hour > 24) {
        let days = Math.floor(hour / 24);
        timeString += days + "dni ";
        hour = hour % 24;
    }
    if(days === 0){
    if (hour > 0) {
        timeString += hour + "godzin";
    }
}
    return timeString;
  }