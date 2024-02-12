import { Grid, List } from 'react-feather';
import { Href } from '@/Constant';
import { useAppDispatch } from '@/Redux/Hooks';
import { setGridView } from '@/Redux/Reducers/BookmarkTabSlice';

const ViewBookmark = () => {
  const dispatch = useAppDispatch()
  const gridBookmark = () => dispatch(setGridView(true)) 
  const listBookmark = () => dispatch(setGridView(false)) 

  return (
       <ul className= 'simple-list flex-row' >
        <li><a className="grid-bookmark-view" href={Href}><Grid onClick={gridBookmark} /></a></li>
        <li><a className="list-layout-view" href={Href}><List onClick={listBookmark} /></a></li>
      </ul>
  );
};
export default ViewBookmark;