import { Tooltip } from '@mui/material';
import daysToNextShoppingSunday from '../utils/daysToNextShoppingSunday';
const dateFormat = {year: 'numeric', month: 'long', day: 'numeric' };
export default function SundaysList(props){
return (
  props.api?.list.map(element => (
    <Tooltip placement="right" arrow title={`Za ${daysToNextShoppingSunday(new Date(), element)}`}>
      <p className="text-black dark:text-white text-2xl sm:text-3xl font-SFRounded pt-3">{new Date(element).toLocaleDateString(`POL`, dateFormat)}</p>
    </Tooltip>
  )))
}