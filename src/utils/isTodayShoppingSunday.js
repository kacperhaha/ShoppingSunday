const days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
let todayDate = new Date();
let today = days[todayDate.getDay()];
export default function isTodayShoppingSunday(api) {
    if(today === "Niedziela"){
      if(todayDate !== api?.nearest_shopping_sunday && api?.is_shopping_sunday_today === true){
        return (<p className="text-5xl sm:text-8xl pb-2 text-green-500 dark:text-green-500 font-SFRounded text-center">Niedziela Handlowa</p>)}
      else if (api?.is_shopping_sunday_today === false){
        return (<p className="text-5xl sm:text-8xl pb-2 text-red-500 dark:text-red-500 font-SFRounded text-center">Niedziela Niehandlowa</p>)
      }
    }
    else return today
}