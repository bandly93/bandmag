import React, { useReducer } from 'react';
import { addStudent,modifyStudent } from '../redux/courseModule';
import { useDispatch,useSelector } from 'react-redux';
import '../styles/form.css';

const StudentForm = () => {

  const { currentStudent } = useSelector(state => state.student);  
  const { courseIndex} = useSelector(state => state.courses);
  const { studentIndex } = useSelector(state => state.student);
  const dispatch = useDispatch();

  let blankState = {
    firstName : '',
    lastName : '',
    age : '',
    grade : '',
  }

  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({...state, ...newState}),
      currentStudent ? currentStudent : blankState
  );

  const handleChange = (e) => {
    const { name ,value } = e.target; 
    setUserInput({[name] : value}); 
  }

  const handleClick = (e) => {
    e.preventDefault();
    if(currentStudent) {
      dispatch(modifyStudent({userInput,courseIndex,studentIndex}))
    }else{
      dispatch(addStudent({userInput,courseIndex}));    
    }
  }

  const renderTitle = () => {
    if(currentStudent){
      return <h1>Modify student</h1>
    }else{
      return <h1>Enter information to add new student to class.</h1>
    }
  }

  const inputs = ['firstName','lastName','age','grade'];

  return(
    <div className = 'form' id = 'student-form'>
      {renderTitle()}
      {
        inputs.map((input,i) => <div className = 'form-content' key = {i}>
          <input 
            placeholder = {input.toLowerCase()}
            type = 'text' 
            name = {input} 
            value = {userInput[input]} 
            onChange = {handleChange} /> 
        </div>)
      }
      <input type = 'submit' onClick = {handleClick} />
    </div>
  )
}

export default StudentForm;