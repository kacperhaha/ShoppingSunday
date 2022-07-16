import axios from "axios";
import {useEffect, useState} from 'react';
import { Tooltip } from '@mui/material';
function daysToNextShoppingSunday(TodayDate, FinishDate) {
  var endDate = new Date(FinishDate);
  var today = new Date(TodayDate);
  var oneDay = 24 * 60 * 60 * 1000;
  return Math.round(Math.abs((today.getTime() - endDate.getTime())/ oneDay));
}

function App() {
  const days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
  let todayDate = new Date();
  let today = days[todayDate.getDay()];
  const [sundayapi, setApi] = useState([]);
  const fetchApi = async () => {
    const response = await axios(`https://shopping-sunday-api.herokuapp.com/`);
    setApi(response.data);
    };
    useEffect(() => {
      fetchApi();
    }, []);
    if(today === "Niedziela"){
      today = todayDate.toISOString().slice(0,10) === sundayapi?.nearest_shopping_sunday ? `Niedziela Handlowa` : `Niedziela Niehandlowa`
      console.log(todayDate === sundayapi?.nearest_shopping_sunday)
    }
    let RemainingDaystoNextShoppingSunday = daysToNextShoppingSunday(todayDate, sundayapi?.nearest_shopping_sunday);
    // if(today == "Niedziela Handlowa") document.getElementById("todayDay").classList.add("text-red dark:text-red");
  return (
    <div className="App bg-white dark:bg-slate-800 ">
        <div className="flex justify-center content-center flex-col items-center h-screen">
          <p className="text-4xl text-black dark:text-white font-SFRounded">Dzisiaj jest:</p>
          <p idName="todayDay" className="text-8xl text-black dark:text-white font-SFRounded">{today}</p>
          <Tooltip title={`Za ${RemainingDaystoNextShoppingSunday}dni`}>
            <p className="text-1xl text-black dark:text-white font-SFRounded">Nastepna niedziela handlowa: {new Date(sundayapi?.nearest_shopping_sunday).toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit' } )}</p>
          </Tooltip>      
        </div> 
    </div>
  );
}

export default App;
