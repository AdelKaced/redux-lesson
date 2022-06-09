import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './App';
import './styles/index.scss';
import rootReducer from './reducers'
import { getPosts } from './actions/post.action';
import { getUsers } from './actions/user.action';

// redux 
const store = createStore(  
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

store.dispatch(getPosts());
store.dispatch(getUsers());


// const store = configureStore({
//     reducer: {
//       todos: todosReducer,
//       filters: filtersReducer
//     }
// })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
