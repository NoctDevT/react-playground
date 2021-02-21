import React, {useContext} from "react";
import {UserContext} from '../userContext'

export function Index() {


    const {value, setValue} = useContext(UserContext)

    return (
    <div> 
        <h2>Index</h2>
        <div>{value}</div>
    </div>
    )
}