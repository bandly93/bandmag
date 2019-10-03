import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCourse,updateCourse } from '../redux/courseModule';
import { closeModal } from '../redux/modalModule';
import '../styles/form.css';

const CourseForm = () => {

  const {courseEditIndex,courses} = useSelector(state => state.courses);
  const flag = courseEditIndex !== null;
  const [courseName,updateCourseName] = useState(flag? courses[courseEditIndex].courseName : '');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(flag){
      dispatch(updateCourse({courseName,courseEditIndex}))
    }else{
      dispatch(addCourse(courseName))
    }
    dispatch(closeModal())
  }

  const renderTitle = () => {
    if(flag){
      return <h1>Modify course</h1>
    }else{
      return <h1>Enter information for new course.</h1>      
    }
  }

  return <div className = 'id' id = 'class-form'>
    {renderTitle()}
    <div className = 'form-content'>
      <input type = 'text' value = {courseName} onChange = {(e)=>updateCourseName(e.target.value)} />
      <input type = 'submit' onClick = {handleSubmit} />
    </div>
  </div>
}

export default CourseForm;