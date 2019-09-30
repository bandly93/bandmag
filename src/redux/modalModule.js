const course_modal_open = 'course_modal_open';
const student_modal_open = 'student_modal_open;'
const modal_close = 'modal_close';

const initialState = {
  courseModalOpen : false,
  studentModalOpen : false,
}

export const openStudentModal = () =>{
  return{
    type : student_modal_open,
  }
}

export const openCourseModal = () => {
  return {
    type : course_modal_open,
  }
}

export const closeModal = () => {
  return {
    type : modal_close,
  }
}

export const modalReducer = (state = initialState,action) => {
  switch(action.type){
    case modal_close : 
      return {
        ...state,
        ...{ 
          courseModalOpen : false,
          studentModalOpen : false,
        }
      }   
    case course_modal_open :
      return {
        ...state,
        ...{ 
          courseModalOpen : true,
          studentModalOpen: false,
        }
      }
    case student_modal_open :
      return {
        ...state,
        ...{
          courseModalOpen : false,
          studentModalOpen : true,
        }
      }
    default :
      return state;
  }
}

export default modalReducer;