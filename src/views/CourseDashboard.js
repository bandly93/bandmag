import React from 'react';
import { useSelector } from 'react-redux';
import CourseTable from '../components/CourseTable';
import '../styles/course.css';

const CourseDashboard = () => {
  const { courses } = useSelector(state=>state.courses);  

  if(courses.length > 0){
    return <CourseTable />
  }else{
    return <div>No courses available to view.</div>
  }
}

export default CourseDashboard;