import axios from "axios";
import {useEffect, useState} from 'react';
import { Tooltip, CircularProgress } from '@mui/material';
import UndoIcon from '@mui/icons-material/Undo';
import { useNavigate } from "react-router-dom";
const options = {year: 'numeric', month: 'long', day: 'numeric' };
function daysToNextShoppingSunday(TodayDate, FinishDate) {
  var endDate = new Date(FinishDate);
  var today = new Date(TodayDate);
  var oneDay = 24 * 60 * 60 * 1000;
  return Math.round(Math.abs((today.getTime() - endDate.getTime())/ oneDay));
}
const List = () => {
  const [sundaylistapi, setApi] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchApi = async () => {
    const response = await axios(`https://shopping-sunday-api.herokuapp.com/list`);
    setApi(response.data);
    setIsLoading(false);
    };
    useEffect(() => {
      setIsLoading(true);
      fetchApi();
    }, []);
    const navigate = useNavigate();
  return (
    <>
      <div className="App bg-white dark:bg-slate-800 h-full">
        <UndoIcon onClick={() => {navigate(`/`)}} className="absolute sm:left-10 sm:top-10 left-5 top-5 text-black dark:text-white border-2 p-1 rounded-full" fontSize="large" ></UndoIcon>
        <p className=" pt-20 sm:pt-40  flex text-center justify-center items-center text-2xl sm:text-5xl text-black dark:text-white font-SFRounded">Lista Nadchodzących Niedziel Handlowych</p>
        <div className="flex flex-col items-center pt-10">
        {isLoading ? (<CircularProgress />) : sundaylistapi?.list.map(element => (
          <Tooltip placement="right" arrow title={`Za ${daysToNextShoppingSunday(new Date(), element)}dni`}>
            <p className="text-black dark:text-white text-2xl sm:text-3xl font-SFRounded pt-3">{new Date(element).toLocaleDateString(`POL`, options)}</p>
          </Tooltip>
     

     ))}  
        </div>
      </div>
    </>
  )
};

export default List;
