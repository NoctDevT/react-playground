import React, {useState, useMemo} from 'react'



export function MemoExample(){
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    //Caches the return value so during rerender we don't have to compute this value again
    //However for each rerender this memo will be called 
    //Memory issues if using memo as we will recieve some preformance and memory overhead
    //Only use memo for usecases when we need the preformance benefit and when the function we call is slower to compute
    

//Use case: 1 if we don't want a expensive function to be reran on each render and only computes when we need the value from that function
//Use case: 2 referenctial equality where we want to only update the reference when the contents of the object changes instead of updating it every time it renders

    // const doubleNumber = slowFunction(number)
    const themeStyles = useMemo(() => {
        return {
        backgroundColor: dark ? 'black' : 'white',
        color: dark? 'white': 'black'
    }}, [dark])

    return (
        <div>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}/> 
            <button onClick={()  => setDark(prevDark => !prevDark)}> Change </button>
            <div style={(themeStyles)}>{doubleNumber}</div>
        </div>
    )
}


function slowFunction(num) {
    console.log('calling slow function');
    for(let i = 0; i <= 500000000; i++) {}
    return num * 2;
}