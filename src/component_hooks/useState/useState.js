import react, {useState, useRef} from 'react';
import {useForm} from './useForm'



//Example one


// export const USExample = () => {

//     const [{count, count2}, setCount] = useState({count:10, count2: 20});



//     return (
//         <div>
//             <button onClick={() => setCount(currentState => ({count: currentState.count + 1, count2: currentState.count2}))}>
//             +
//             </button>
//             <div> count 1: {count}</div>
//             <div> count 2: {count2} </div>

//         </div>

//     )
// }




//Input forms exmaple


// export const USExample = () => {

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");



//     return (
//         <div>
//             <input name='email' value={email} onChange={e => setEmail(e.target.value)} />
//             <input type='password' name='password' value={password} onChange={e => setPassword(e.target.value)}/>


//         </div>

//     )
// }


//Custom Hook example


export const USExample = () => {
    const [value, handleChange] = useForm({email: "", password: ""});

return(

    <div>
    <input name='email' 
    value={value.email} 
    onChange={handleChange}
    placeholder='Enter Email'
     />

    <input type='password' 
    name='password' 
    value={value.password} 
    onChange={handleChange}
    placeholder='enter Password' />

    </div>
    )
}