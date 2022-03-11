import { combineReducers } from "redux";
import loginAction from "./reducer";


console.log(loginAction);
const loginInfo = combineReducers({
    loginData : loginAction
})

export default loginInfo;