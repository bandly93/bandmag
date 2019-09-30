import React,{ useState } from 'react';
import { useSelector } from 'react-redux'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate,faSchool } from '@fortawesome/free-solid-svg-icons';
import { countStudents } from '../utils/utility';
import '../styles/dashboard.css';

const Dashboard = () => {

  const { courses } = useSelector(state=>state.courses);
  const [studentCount] = useState(countStudents(courses)); 
  
  return (
    <div className = 'dashboard-container'>
      <div className = 'dashboard-item' style = {{backgroundColor:'#A0CECB'}}>
        <div>
          <h1>{studentCount}</h1>
          <p>Students</p>
        </div>
        <FontAwesomeIcon className = 'dashboard-fa' icon = {faUserGraduate} size = '5x'/>
      </div>
      <div className = 'dashboard-item' style = {{backgroundColor:'#8067B7'}}>
        <div>
          <h1>{courses.length}</h1>
          <p>Courses</p>
        </div>
        <FontAwesomeIcon className = 'dashboard-fa' icon = {faSchool} size = '5x'/>
      </div>
    </div>
  )
}

export default Dashboard;