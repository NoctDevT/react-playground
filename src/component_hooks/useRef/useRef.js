import React, {useState, useRef} from 'react'





export function RefExample() {



    //UseRef to getting reference to component and using it within the application imperatively and not cause a rerender

    const [state, setState] = useState()
    const inputref = useRef();


    const [showHello, setShowHello] = useState(true)

    return(
        <> 
        <input
        name="Placeholder"
        placeholder="Example Input"
        value={state}
        onChange={e => setState(e.target.value)}
        ref={inputref}
        />
        {showHello && <Hello/>}
        <button onClick={() => {setShowHello(!showHello)}}> Increment</button>

        <button onClick={() => {console.log(inputref.current.focus())}}>Check input</button>
        </>
    )
}




//Displays how many times the page has rerendered

const Hello = () => {

    const renders = useRef(0);

   console.log('hello renders:', renders.current++);

   return<div>hello</div>
}