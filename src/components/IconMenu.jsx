import { Tooltip } from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import CodeIcon from '@mui/icons-material/Code';
export default function IconMenu(props) {
  return ( 
    <div className="pt-6">
    <Tooltip title={`Lista Niedziel Handlowych`}>
      <ListIcon onClick={() => {props.navigate(`/lista`)}} className="text-black dark:text-white border-2 p-1 rounded-full mx-1" fontSize="large" ></ListIcon> 
    </Tooltip>
    <Tooltip title={`Kod Źródłowy`}>
      <CodeIcon onClick={() => {window.location.href = 'https://github.com/kacperhaha/ShoppingSunday'}} className="text-black dark:text-white border-2 p-1 rounded-full mx-1" fontSize="large" ></CodeIcon> 
    </Tooltip>
    </div>
    )
}