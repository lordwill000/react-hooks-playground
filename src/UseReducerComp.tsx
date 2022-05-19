import { useReducer } from "react";

const initialState = {
  counter: 100
}

type ACTION_TYPES = 
  | { type: 'increment'; payload: number }
  | { type: 'decrement'; payload: number }

function counterReducer (state: typeof initialState, action: ACTION_TYPES) {
  switch(action.type) {
    case 'increment':
      return {
        ...state,
        counter: state.counter + action.payload
      }
    case 'decrement':
      return {
        ...state,
        counter: state.counter - action.payload
      }
    default:
      throw new Error('bad action pog')
  }
}

function UseReducerComp () {
  const [state, dispatch] = useReducer(counterReducer, initialState)

  return (
    <div>
      <div>{state.counter}</div>

      <button onClick={() => dispatch({
        type: 'increment',
        payload: 10
      })}>
        increment
      </button>
      <button onClick={() => dispatch({
        type: 'decrement',
        payload: 5
      })}>
        decrement
      </button>
    </div>
  )
}

export default UseReducerComp