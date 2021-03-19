import React, {useReducer, useState} from 'react'
import { stat } from 'fs';



// function reducer (state, action) {

//     switch(action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1; 
//         default : 
//         return state; 
//     }

// }


// export const ReducerExample = () => {
//     const [count, dispatch] = useReducer(reducer, 0)

//     return (
//         <div> 
//             <div> count: {count}</div> 
//             <button onClick={() => dispatch({ type: 'INCREMENT', })} > increment</button>
//             <button onClick={() => dispatch({type: 'DECREMENT'})} > decrement </button>
//         </div>
//     );
// }


// function reducer (state, action) {

//     switch(action.type) {
//         case 'INCREMENT':
//             return {count: state.count + 1}
//         case 'TYPE':
//             return { firstName: action.firstName, count: state.count + 1};
//         default : 
//         return state; 
//     }

// }


// export const ReducerExample = () => {
//     const [{count, firstName}, dispatch] = useReducer(reducer, {
//         count: 0,
//         firstName: ""
//         })

//     return (
//         <div> 
//             <button onClick={() => dispatch({ type: 'INCREMENT', })} > increment</button>
//             <div> count: {count}</div> 


//         <input 
//         value={firstName}
//         onChange={e=> {
//             const firstName = e.target.value
//             dispatch({type: 'TYPE', firstName})
//         }}
//         />

//         </div>
//     );
// }


function reducer(state, action) {

    var conditionCheck = state.todoCount === 0 

    switch(action.type){
    case "add-todo":
        return {todos: [...state.todos, {text: action.text, completed: false}], 

        todoCount:  state.todoCount + 1
    };        

    case "toggle-todo":
        return {
            todos: state.todos.map((t, index) => index === action.index ? {...t, completed : !t.completed} : t),
            todoCount:  conditionCheck ? state.todoCount :state.todoCount - 1
        };
    default:
        return state;
    
    }
}


export const ReducerExample = () => {

    const [{todos, todoCount}, dispatch] = useReducer(reducer, {
        todos: [], 
        todoCount: 0
    })
    const [text, setText] = useState();

    return(
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                dispatch({type: "add-todo", text})
                setText("")
            }}>
        <input value={text} onChange={e => setText(e.target.value)} />
            </form>

            <div>Number of tasks : {todoCount}</div>


            {todos.map((t, index)=> 
                <div key={t.text} 
                onClick={() => dispatch({type: "toggle-todo", index})}
                style={{
                    textDecoration: t.completed ? "line-through" : "none"
                }}
            > {t.text} {t.completed ? ": Finished" : ": Not finished"}</div>
            )}
        </div>
    )
}