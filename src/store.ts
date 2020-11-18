import { applyMiddleware, compose, createStore, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { state } from './components/redux/reducers/index'
// import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// const a: any = window;

// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;

// const enhancer = composeEnhancers(applyMiddleware(reduxThunk));
// export const store: Store<any> = createStore(state, enhancer)

const composeEnhancers = composeWithDevTools(applyMiddleware(thunkMiddleware));
export const store: Store<any> = createStore(state, composeEnhancers);