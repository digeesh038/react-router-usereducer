import React from 'react'
import { useReducer } from 'react';
import '../App.css'

export default function UseReducer() {
    const initaialstate ={
        count : 0,
        };
        const reducer = (state, action) => {
            switch (action.type) {
                case "Add":
                    return {count: state.count + 1};
                case "Sub":
                    return {count: state.count - 1};
                case "Remove":
    
    
                return {count: 0};
                default:
                    return state;
            }
    };
    const [state, dispatch] = useReducer(reducer, initaialstate);
return (
    <div className='a'>
        <h1 className='b'>COUNT:{state.count}</h1>
        <div className='c'>
            <button className='add' onClick={()=>dispatch({type:"Add"})}>ADD</button>
            <button className='sub' onClick={()=>dispatch({type:"Sub"})}>SUB</button>
            <button className='reset' onClick={()=>dispatch({type:"Remove"})}>RESET</button>
        </div>
    </div>
    
)

}

