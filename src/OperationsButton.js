import { ACTIONS } from "./App"
export default function OperationsButton1({ dispatch, operation}) {
    return <button onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: {operation} })}>{operation}</button>
}