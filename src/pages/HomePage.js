import axios from "axios";
import {useEffect, useState} from 'react';
import { CircularProgress } from '@mui/material';
import { useNavigate } from "react-router-dom";
import daysToNextShoppingSunday from './../utils/daysToNextShoppingSunday';
import isTodayShoppingSunday from "../utils/isTodayShoppingSunday";
import IconMenu from "../components/IconMenu";
function HomePage() {
  const navigate = useNavigate();
  let todayDate = new Date();
  const DateFormat = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const apiUrl = 'https://shopping-sunday-api.fly.dev/';
  const [sundayapi, setApi] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchApi = async () => {
    const response = await axios(apiUrl);
    setApi(response.data);
    setIsLoading(false);
    };
    useEffect(() => {
      setIsLoading(true);
      fetchApi();
    }, []);
    let today = isTodayShoppingSunday(sundayapi)
    let RemainingDaystoNextShoppingSunday = daysToNextShoppingSunday(todayDate, sundayapi?.nearest_shopping_sunday);
  return (
  <div className="bg-white dark:bg-slate-800 h-full">
      <div className="flex justify-center flex-col items-center h-full">
        <p className="text-2xl sm:text-4xl text-black pb-2 dark:text-white font-SFRounded">Dzisiaj jest:</p>
        <p className="text-5xl sm:text-8xl pb-2 text-black dark:text-white font-SFRounded text-center">{today}</p>
        {isLoading ? (<p className="text-base sm:text-xl text-black dark:text-white font-SFRounded">Nastepna niedziela handlowa: <CircularProgress /> </p>) : (<p className="text-base sm:text-xl text-black dark:text-white font-SFRounded">Nastepna niedziela handlowa: <strong>{new Date(sundayapi?.nearest_shopping_sunday).toLocaleString([], DateFormat)}</strong></p>)}
        {isLoading ? (<p className="text-base sm:text-xl text-black dark:text-white font-SFRounded">Do następnej niedzieli handlowej zostało: <CircularProgress /> </p>) : (<p className="text-base sm:text-xl text-black dark:text-white font-SFRounded">Do następnej niedzieli handlowej zostało: <strong>{RemainingDaystoNextShoppingSunday}</strong></p>)}
        <IconMenu navigate={navigate}/>
      </div>
  </div>

  );
}

export default HomePage;
