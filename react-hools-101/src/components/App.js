import React, { useReducer }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers';
import EventForm from './EventForm';
import Events from './Events';
import AppContext from '../contexts/AppContext'


console.log({AppContext});
const App = () => {
  const [state, dispatch] = useReducer(reducer, [])


  return (
    <>
      <AppContext.Provider value={ 'kenta' }>
        <div className="container-fluid">
          <h4>イベント作成フォーム</h4>
          <EventForm state={state} dispatch={dispatch} />
          <Events state={state} dispatch={dispatch} />
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
