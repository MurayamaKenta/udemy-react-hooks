import React, { useContext } from 'react';
import Event from './Event';
import AppContext from '../contexts/AppContext'

const Events = ({ state, dispatch }) => {
  const test = useContext(AppContext)
  return (
    <>
      <h4>イベント一覧</h4>
      <div>
        {test}
      </div>

        <table className='table table-hover'>
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>ボディー</th>
            </tr>
          </thead>
          <tbody>
            {state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />))}
          </tbody>
        </table>
    </>
  )
}
export default Events;
