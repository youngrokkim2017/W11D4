/*
This file will be responsible for combining our reducers that handle relational data.

Import combineReducers from the redux library.
Also import the usersReducer function we just created!
The entitiesReducer should use combineReducers and will only have a single key-value pair for now named users which points to the usersReducer. We will add more entities reducers to this later.
export default entitiesReducer.
*/

import { combineReducers } from "redux";
import usersReducer from "./users_reducer";

//phase 5
import benchesReducer from "./benches_reducer";

export const entitiesReducer = combineReducers({
    users: usersReducer
});
