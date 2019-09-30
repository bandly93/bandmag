import React from 'react';
import '../styles/modal.css';
import { closeModal } from '../redux/modalModule';
import { useDispatch } from 'react-redux';
import { clearStudent } from '../redux/studentModule';
import { updateCourseEditIndex } from '../redux/courseModule';

const Modal = ({Form}) => {

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(clearStudent())
    dispatch(updateCourseEditIndex(null))
    dispatch(closeModal())
  }

  return(
    <div className = 'modal-container'> 
      <div className ='modal-content'>
        <Form />
        <button className = 'modal-close' onClick = {handleClose}> X </button>
      </div>
    </div>
  )
}

export default Modal;