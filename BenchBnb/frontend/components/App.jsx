import React from 'react';
import { disconnect } from 'cluster';

import GreetingContainer from './greeting/greeting_container';

import { AuthRoute } from '../util/route_util';
 
export const App = () => {
    <div>
        <header>
            <h1>Bench BnB</h1>
            <GreetingContainer />
        </header>

        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
}