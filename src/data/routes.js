import Home from '../views/Home';
import CourseDashboard from '../views/CourseDashboard';
import CourseManager from '../views/CourseManager';
import { faHome,faUniversity,faEdit } from '@fortawesome/free-solid-svg-icons';

const routes = [
  {
    name : 'Home',
    component : Home,
    path : '/',
    exact : true,
    icon : faHome,
  },
  {
    name : 'Courses',
    component : CourseDashboard,
    path : '/course_dashboard',
    exact : true,
    icon : faUniversity,
  },
  {
    name : 'Course Manager',
    component : CourseManager,
    path : '/course_manager',
    exact : true,
    icon : faEdit,
  }
];

export default routes;