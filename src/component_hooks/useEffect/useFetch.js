import {useEffect, useState} from 'react'


//Using multiple hooks
export const useFetch = (url)=> {

    
    const [dataState, setState] = useState({data: null, loading: true});
    useEffect(()=> {
        setState({data: null, loading: true});
        fetch(url)
        .then( x => x.text())
        .then(y=> {
            setState({data: y, loading: false});
        })
    }, [url])

    return dataState;
}