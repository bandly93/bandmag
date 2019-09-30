import React, { useState }from 'react';
import { useSelector } from 'react-redux';
import Modal from '../components/Modal';
import StudentForm from '../components/StudentForm';
import { openStudentModal } from '../redux/modalModule';
import { updateCurrentStudent } from '../redux/studentModule';
import { deleteStudent } from '../redux/courseModule';
import { faTrashAlt,faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import '../styles/students.css';

const StudentTable = ({students}) => {

  const [search,updateSearch] = useState('');
  const { studentModalOpen } = useSelector(state => state.modal);
  const dispatch = useDispatch();
 
  const handleChange = (e) => {
    updateSearch(e.target.value)
  }

  const searchInput = () => {
    return <input
      className = 'search-bar'
      placeholder = 'Search for a student'
      type = 'text'
      value = { search }
      onChange = { handleChange }
    />
  }

  const renderTableData = () => {
    let filteredStudents = students.filter(({firstName,lastName}) =>  {
      const name = firstName + ' ' + lastName;
      return name.toLowerCase().match(new RegExp(search,'i'))
    });

    return filteredStudents.map((student,i) =>
      <tr key = {i}>
        <td>{i + 1}</td>
        <td>{student._id}</td>
        <td>{student.firstName} {student.lastName}</td>
        <td>{student.grade}</td>
        <td>{student.age}</td>
        <td>
          <FontAwesomeIcon icon = {faEdit} onClick = {() => handleEdit(student,i)}/>
          <FontAwesomeIcon icon = {faTrashAlt} onClick = {() => handleDelete(i)}/>
        </td>
      </tr>
    )
  }

  const handleDelete = (student,i) => {
    dispatch(deleteStudent(student,i))
  }

  const handleEdit = (student,i) => {
    dispatch(updateCurrentStudent(student,i));
    dispatch(openStudentModal())
  }

  const renderColumnNames = () => {
    return <tr>
      <td>No.</td>
      <td>Student ID</td>
      <td>Name</td>
      <td>Grade</td>
      <td>Age</td>
      <td>Modify</td>
    </tr>
  }

  return(
    <div className = 'student-box'>
      { studentModalOpen ? <Modal Form = {StudentForm} /> : null }
      {searchInput()}
      <table id = 'student-table'>
        <tbody>
          {renderColumnNames()}
          {renderTableData()}
        </tbody>
      </table>
    </div>
  )
}

export default StudentTable;