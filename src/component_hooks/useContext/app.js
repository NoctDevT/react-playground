import React, {useState, useMemo } from "react";

import {BrowserRouter as Router, Route, Link } from "react-router-dom"
import {Index} from "./pages/Withdraw"
import { About } from "./pages/Deposit"
import { UserContext } from "./userContext";

export function AppRouter() {

    const [balance, setBalance]  = useState(100);

    const providerValue = useMemo(() => ({balance, setBalance}), [balance, setBalance]);

    

    return (
            <Router>
              <div>

            <h1> Context Hook Example</h1>
            <div>Switch through the different pages and try to add/deduct the value on each page. </div> 
            <div>Current Balance: {balance}</div>

                <nav>
                  <ul>
                    <li>
                      <Link to="/">Withdraw</Link>
                    </li>
                    <li>
                      <Link to="/about/">Deposit</Link>
                    </li>
                  </ul>
                </nav>



                <UserContext.Provider value={providerValue}> 
                  <Route path="/" exact component={Index} />
                  <Route path="/about/" component={About} />
                </UserContext.Provider>


              </div>
            </Router>
    )
}