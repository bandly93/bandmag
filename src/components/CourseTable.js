import React from 'react';
import { useSelector } from 'react-redux';
import Dropdown from '../components/Dropdown';
import StudentTable from '../components/StudentTable';
import Modal from '../components/Modal';
import StudentForm from '../components/StudentForm';
import { openStudentModal } from '../redux/modalModule'; 
import { useDispatch } from 'react-redux';

const CourseTable = () => {

  const { courseIndex,courses } = useSelector(state => state.courses);
  const { students,courseName } = courses[courseIndex];
  const { studentModalOpen } = useSelector(state => state.modal);
  const dispatch = useDispatch();

  const addStudentBtn = () => {
    return <div className = 'add-student-button'>
      <button onClick = { () => dispatch(openStudentModal())}>Add Student</button>
    </div>
  }

  return(
    <div className = 'course-container'>
      { studentModalOpen ? <Modal data = {courses[courseIndex]} Form = {StudentForm} /> : null }
      <Dropdown courses = {courses}/>
      {addStudentBtn()}
      <h1>{ courseName }</h1>
      <hr/>
      {
        students.length > 0?
          <div>
            <p>{students.length} students</p>
            <StudentTable students = {students}/>
          </div>
        :
          <div>No students are enrolled for this course.</div>
      }
    </div>
  )
}

export default CourseTable;