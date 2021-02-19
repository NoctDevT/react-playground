import {useEffect, useState} from 'react'


//Using multiple hooks

//Setting the UseEffect and binding paramater URL so whenever URL changes the
//the useEffect fires. 
//Adding setState function as a depedency 
export const useFetch = (url)=> {

    
    const [dataState, setState] = useState({data: null, loading: true});
    useEffect(()=> {
        setState(state => ({data: state.data , loading: true}));

        fetch(url)
        .then( x => x.text())
        .then(y=> {
            setState({data: y, loading: false});
        })
    }, [url, setState])

    return dataState;
}