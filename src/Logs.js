/* eslint-disable react/jsx-key */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logCounterAction } from './actions/counter'

const Logs = () => {
  const { logs, counter } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  const handleClick = () => {
    console.log('uruchom akcje [logCounter]')
    dispatch(logCounterAction())
  }

  return (
    <div>
      <button onClick={handleClick}>
        save ({ counter })
      </button>
      <ul>
        {logs.map(value => <li>{value}</li>)}
      </ul>
    </div>
  )
}

export default Logs
