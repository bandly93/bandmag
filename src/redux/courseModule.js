import studentData from '../data/students';
import { generateID } from '../utils/utility';
const update_course = 'update_course';
const remove_course = 'remove_course';
const add_course = 'add_course';
const update_index = 'update_index';
const add_student = 'add_student';
const modify_student = 'modify_student';
const delete_student = 'delete_student';
const update_course_edit_index = 'update_course_edit_index';

let initialState = {
  courseIndex : 0,
  courseEditIndex : null,
  courses : [{
    courseName : 'Test',
    students : [...studentData],
    instructor : 'Band Ly'
  }]
}

export const addStudent = (data) => {
  return {
    type : add_student,
    payload : data,
  }
}

export const deleteStudent = (studentIndex) => {
  return {
    type : delete_student,
    payload : {studentIndex},
  }
}

export const modifyStudent = (data) => {
  return {
    type : modify_student,
    payload : data,
  }
}

export const updateIndex = (courseIndex) => {
  return {
    type : update_index,
    courseIndex,
  }
}

export const updateCourseEditIndex = (courseIndex) => {
  return {
    type : update_course_edit_index,
    payload : courseIndex,
  }
}

export const updateCourse = (data) => {
  return {
    type : update_course,
    payload : data
  }
}

export const removeCourse = (courseIndex) => {
  return {
    type : remove_course,
    payload : courseIndex
  }
}

export const addCourse = (courseName) => {
  return {
    type : add_course,
    payload : courseName,
  }
}

export const courseReducer = (state = initialState, action) => {
  const { userInput,studentIndex,courseEditIndex,courseName } = action.payload || {};
  const { courseIndex } = state;
  const currentCourses = [...state.courses];

  switch (action.type) {
    case add_course :
      let newCourse = {
        courseName : action.payload,
        students : [],
        instructor : 'Band Ly',
        courseId : generateID(),
      }
      return {
        ...state,
        courses : [...state.courses,newCourse]
      }
    case remove_course :
      return{
        ...state,
        courses : [
          ...state.courses.slice(0,action.payload),
          ...state.courses.slice(action.payload+1)
        ]
      }
    case update_course :
      return {
        ...state,
        ...state.courses[courseEditIndex].courseName = courseName,
      }
    case update_index :
      return {
        ...state,
        courseIndex : action.courseIndex,
      }
    case update_course_edit_index :
      return {
        ...state,
        courseEditIndex : action.payload,
      }
    case add_student : 
      let newStudent = {
        ...userInput,
        _id : generateID(),
      }
      currentCourses[courseIndex].students.push(newStudent); 
      return {
        ...state,
        courses : currentCourses,
      }
    case modify_student :  
      currentCourses[courseIndex].students[studentIndex] = userInput;
      return {
        ...state,
        courses : currentCourses,
      }
    case delete_student : 
      const {students} = currentCourses[courseIndex];
      currentCourses[courseIndex].students = [
        ...students.slice(0,studentIndex),
        ...students.slice(studentIndex+1),
      ]
      return {
        ...state,
        courses : currentCourses
      }
    default : 
      return state;
  }
}

export default courseReducer;