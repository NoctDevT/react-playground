import react, {useEffect, useState} from 'react'

import {useForm} from '../useState/useForm';
import {Hello, ShowContent} from './test'
import {useFetch} from './useFetch' 

//From UseState example

// export const UFExample = () => {
//     const [value, handleChange] = useForm({email: "", password: "", fireName: ""});
//     const [showElement, setShowlement] = useState(true);
//     //Using a fetch from numbers API 
//     const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")));
//     const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);

//     useEffect(() => {
//         localStorage.setitem("count", JSON.stringify(count));
//     }, [count]);



// //Only triggers when value has changed
//     // useEffect(() => {
//     //     console.log('effect fired')
        
//     // }, [value.password, value.email])



// //UseEffect with cleanup function 

//     // useEffect(() => {
//     //     console.log('render');


//     //     //Adding cleanup logic 
//     //     return() => {
//     //         console.log('unmount')
//     //     }

//     // });





// //When the specific variable is updated, we can apply the cleanup logic. It cleans the old value and renders the new value 
// //Whenever dependency is changed we apply cleanup logic 

//     // useEffect(() => {
//     //     console.log('render');
        


//     //     //Adding cleanup logic 
//     //     return() => {
//     //         console.log('cleanup logic')
//     //     }

//     // }, [value.email]);



// //Use case: obtaining position of mouse 


// // useEffect(() => {
// //     const onMouseMove = e => {
// //         console.log(e)
// //     }

// //     window.addEventListener('mousemove', onMouseMove);

// //     //Adding cleanup logic 
// //     return() => {
// //         window.removeEventListener('mousemove', onMouseMove);
// //     }

// // }, [value.email]);




// //Can have multiple useEffects

// // useEffect(() => {
// //     console.log('mount1');
// // }, []);

// // useEffect(() => {
// //     console.log('mount2');
// // }, [])









// //Conditional rendering to show elelemtn


// return(
// <div>
// <div>{!data ? 'loading...' : data }</div>
// <div> count: {count}</div>
// <button 
// onClick={() => setCount(c => c + 1)} 
// style={{

// }}> 
// +
// </button>
//     <>
//     {/* <button onClick={() => setShowlement(!showElement)}/>
//     {showElement && <Hello/> } */}
//     <input name='email' 
//     value={value.email} 
//     onChange={handleChange}
//     placeholder='Enter Email'
//      />

// <   input name='firstName' 
//     value={value.firstName} 
//     onChange={handleChange}
//     placeholder='FirstName'
//      />

//     <input type='password' 
//     name='password' 
//     value={value.password} 
//     onChange={handleChange}
//     placeholder='enter Password' />

//     </>
//     </div>
//     )
// }






// Custom form which updates the API request to pull new information through API. 


export const UFExample = () => {


    //Using a fetch from numbers API 
    const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")));
    const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);


    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count));
    }, [count]);
    const isEmpty = (count.length === null || count.length === 0 );


return(
<div>
<div>{!data ?  'loading...' : (!isEmpty ? data : 'Enter a Number' ) }</div>
<div> count: {count}</div>
<button 
onClick={() => setCount(c => parseInt(c, 10) + 1)} 
style={{
}}> 
+
</button>
    <>
    <input  
    value={count} 
    onInput={(e => setCount(e.target.value)) } 
    // onChange={e => if(e.target.value > 0) {showElement(true)}}
    // placeholder='Enter Email'
     />
    </>
    </div>
    )
}




