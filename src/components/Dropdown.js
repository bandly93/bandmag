import React, {useState} from 'react';
import { useDispatch } from 'react-redux'; 
import { updateIndex } from '../redux/courseModule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/dropdown.css';

const Dropdown = ({courses}) => {

  const dispatch = useDispatch();
  const [drawerOpen,toggleDrawer] = useState(false);

  const handleClick = (i) => {
    dispatch(updateIndex(i));
    toggleDrawer(!drawerOpen);
  }

  return(
    <div className="dd-wrapper">
      <div className="dd-header" onClick = {()=>toggleDrawer(!drawerOpen)}>
        <div className="dd-header-title"> 
          <span>Select another class</span>
          <FontAwesomeIcon icon = {drawerOpen? faAngleUp : faAngleDown} size = '2x' />
        </div>
      </div>
      <ul className="dd-list" style = {{display: drawerOpen? 'block' :'none'}}>
        {
          courses.map(({courseName},i) =>
            <li 
              key = {i}
              className = 'dd-list-item' 
              onClick = {() => handleClick(i)}>
              {courseName}
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default Dropdown;