import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import CourseForm from '../components/CourseForm';
import { faTrashAlt,faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '../components/Modal';
import { openCourseModal } from '../redux/modalModule';
import { removeCourse,updateCourseEditIndex,updateIndex } from '../redux/courseModule';
import '../styles/course.css';

const CourseManager = () => {
  const { courses } = useSelector(state => state.courses);
  const { courseModalOpen } = useSelector(state => state.modal);
  const dispatch = useDispatch();

  const handleEdit = (courses,i) => {
    dispatch(updateCourseEditIndex(i));
    dispatch(openCourseModal())
  }

  const handleDelete = (i) => {
    dispatch(removeCourse(i))
    dispatch(updateIndex(0))
  }

  const handleAddCourse = (e) =>{
    e.preventDefault();
    dispatch(openCourseModal())
  }

  const renderTableData = () => {
    return courses.map((course,i) =>
      <tr key = {i}>
        <td>{i + 1}</td>
        <td>{course.courseName}</td>
        <td>{course.students.length}</td>
        <td>
          <FontAwesomeIcon icon = {faEdit} onClick = {() => handleEdit(course,i)}/>
          <FontAwesomeIcon icon = {faTrashAlt} onClick = {() => handleDelete(i)}/>
        </td>
      </tr>
    )
  }

  const renderColumnNames = () => {
    return <tr>
      <td>No.</td>
      <td>Course Name</td>
      <td># of students</td>
      <td>Modify</td>
    </tr>
  }

  const addCourseBtn = () => {
    return <div className = 'add-button'>
      <button onClick = {handleAddCourse}>Add Course</button>
    </div>
  }

  return (
    <div className = 'course-box'>
      <h1>Current Active Courses</h1>
      { courseModalOpen ? <Modal Form = {CourseForm} /> : null }
      {addCourseBtn()}
      <table id = 'course-table'>
        <tbody>
          {renderColumnNames()}
          {renderTableData()}
        </tbody>
      </table>
    </div>
  )
}

export default CourseManager;