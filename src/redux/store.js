import { createStore,applyMiddleware,combineReducers,compose } from 'redux';
import thunk from 'redux-thunk';
import courses from './courseModule';
import modal from './modalModule';
import student from './studentModule';

const reducer = combineReducers({
  courses,
  modal,
  student,
});

export default function configureStore(preloadedState){
  return createStore(
    reducer,
    preloadedState,
    compose(
      applyMiddleware(thunk),
      typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    )
  )
}