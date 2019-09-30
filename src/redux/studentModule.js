const current_student = 'current_student';
const clear_student = 'clear_student';

let initialState = {
  currentStudent : null,
  studentIndex : null,
}

export const updateCurrentStudent = (student,i) => {
  return {
    type : current_student,
    payload : {currentStudent:student,studentIndex:i}
  }
}

export const clearStudent = () => {
  return {
    type : clear_student,
  }
}

export const studentReducer = (state = initialState, action) => {
  switch(action.type){
    case current_student :
      return {
        ...state,
        ...action.payload,
      }
    case clear_student :
      return {
        ...state,
        currentStudent : null,
      }
    default :
      return state;
  }
}

export default studentReducer;