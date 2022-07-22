import axios from "axios";
import {useEffect, useState} from 'react';
import { Tooltip } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ListIcon from '@mui/icons-material/List';
import { useNavigate } from "react-router-dom";
function daysToNextShoppingSunday(TodayDate, FinishDate) {
  var endDate = new Date(FinishDate);
  var today = new Date(TodayDate);
  var oneDay = 24 * 60 * 60 * 1000;
  return Math.round(Math.abs((today.getTime() - endDate.getTime())/ oneDay));
}

function HomePage() {
  const navigate = useNavigate();
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
    }
    let RemainingDaystoNextShoppingSunday = daysToNextShoppingSunday(todayDate, sundayapi?.nearest_shopping_sunday);
  return (
  <div className="App bg-white dark:bg-slate-800">
      <div className="flex justify-center flex-col items-center min-h-screen">
        <p className="text-2xl sm:text-4xl text-black pb-2 dark:text-white font-SFRounded">Dzisiaj jest:</p>
        <p idname="todayDay" className="text-5xl sm:text-8xl pb-2 text-black dark:text-white font-SFRounded">{today}</p>
        <Tooltip arrow title={`Za ${RemainingDaystoNextShoppingSunday}dni`}>
          <p className="text-base sm:text-xl text-black dark:text-white font-SFRounded">Nastepna niedziela handlowa: <strong>{new Date(sundayapi?.nearest_shopping_sunday).toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit' })}</strong></p>
        </Tooltip>
        <div idname="icons" className="pt-6">
          <Tooltip title={`Lista Niedziel Handlowych`}>
            <ListIcon onClick={() => {navigate(`/lista`)}}className="text-black dark:text-white border-2 p-1 rounded-full mx-1" fontSize="large" ></ListIcon> 
          </Tooltip>
          {/* <Tooltip title={`Lista Niedziel Handlowych`}>
            <ListIcon onClick={() => {navigate(`/list`)}}className="text-white border p-1 rounded-full mx-1" fontSize="large" ></ListIcon> 
          </Tooltip> */}
        </div>
        {/* <div className="footer">
          <div idname="visitors" className=" ml-5 py-2 px-10 border rounded-full w-0 max-w-full flex justify-center items-center gap-1">
          
            <p className="text-white font-SFRounded">14</p>
          </div>
        </div> */}
      </div>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2771488160429007"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     data-ad-client="ca-pub-2771488160429007"
     data-ad-slot="1698896109"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
  </div>

  );
}

export default HomePage;
