import React, {useContext} from "react";
import {UserContext} from '../userContext'

export function Index() {


    const {balance, setBalance} = useContext(UserContext)


    const submitForm = (event) =>{
        event.preventDefault(); // stops form from "refreshing" automatically - it follows action, hence the refresh
        setBalance(balance => balance - event.target.amount.value);
    }

    return (
    <div> 
        <h2>Withdraw</h2>
        <div>{balance}</div>

    <div>
        <form id="someForm" onSubmit={submitForm}>
            <label>Amount:</label>
            <input name="amount" type="text" placeholder='Withdraw' required  />
            <br />
            <label htmlFor="submit">Submit</label>
            <input name="done" type="submit" />
        </form>
    </div>     
     </div>
     
    )
}