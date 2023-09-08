import axios from "axios";
import {useEffect, useState} from 'react';
import {CircularProgress } from '@mui/material';
import UndoIcon from '@mui/icons-material/Undo';
import { useNavigate } from "react-router-dom";
import SundaysList from "../components/SundaysList";
function List() {
  const apiUrl = 'https://shopping-sunday-api.fly.dev/list';
  const [sundaylistapi, setApi] = useState(null);
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
    const navigate = useNavigate();
  return (
    <>
      <div className=" bg-white dark:bg-slate-800 h-full">
        <UndoIcon onClick={() => {navigate(`/`)}} className="absolute sm:left-10 sm:top-10 left-5 top-5 text-black dark:text-white border-2 p-1 rounded-full" fontSize="large" ></UndoIcon>
        <p className=" pt-20 sm:pt-40  flex text-center justify-center items-center text-2xl sm:text-5xl text-black dark:text-white font-SFRounded">Lista Nadchodzących Niedziel Handlowych</p>
      <div className="flex flex-col items-center pt-10">
        {isLoading ? (<CircularProgress />) : <SundaysList api={sundaylistapi}/>}  
      </div>
      </div>
    </>
  )
};

export default List;
