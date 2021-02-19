import react, {useEffect, useState} from 'react'

import {useForm} from '../useState/useForm';
import {Hello} from './test'
import {useFetch} from './useFetch' 

//From UseState example

export const UFExample = () => {
    const [value, handleChange] = useForm({email: "", password: "", fireName: ""});
    const [showElement, setShowlement] = useState(true);

    

    //Using a fetch from numbers API 
    const {data, loading} = useFetch('http://numbersapi.com/4/trivia');



//Only triggers when value has changed
    // useEffect(() => {
    //     console.log('effect fired')
        
    // }, [value.password, value.email])



//UseEffect with cleanup function 

    // useEffect(() => {
    //     console.log('render');


    //     //Adding cleanup logic 
    //     return() => {
    //         console.log('unmount')
    //     }

    // });





//When the specific variable is updated, we can apply the cleanup logic. It cleans the old value and renders the new value 
//Whenever dependency is changed we apply cleanup logic 

    // useEffect(() => {
    //     console.log('render');
        


    //     //Adding cleanup logic 
    //     return() => {
    //         console.log('cleanup logic')
    //     }

    // }, [value.email]);



//Use case: obtaining position of mouse 


// useEffect(() => {
//     const onMouseMove = e => {
//         console.log(e)
//     }

//     window.addEventListener('mousemove', onMouseMove);

//     //Adding cleanup logic 
//     return() => {
//         window.removeEventListener('mousemove', onMouseMove);
//     }

// }, [value.email]);




//Can have multiple useEffects

// useEffect(() => {
//     console.log('mount1');
// }, []);

// useEffect(() => {
//     console.log('mount2');
// }, [])









//Conditional rendering to show elelemtn


return(
<div>
<div>{loading ? 'loading...' : data }</div>
    <>
    {/* <button onClick={() => setShowlement(!showElement)}/>
    {showElement && <Hello/> } */}
    <input name='email' 
    value={value.email} 
    onChange={handleChange}
    placeholder='Enter Email'
     />

<   input name='firstName' 
    value={value.firstName} 
    onChange={handleChange}
    placeholder='FirstName'
     />

    <input type='password' 
    name='password' 
    value={value.password} 
    onChange={handleChange}
    placeholder='enter Password' />

    </>
    </div>
    )
}
