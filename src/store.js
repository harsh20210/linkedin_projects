import { createStore } from "redux";
import loginInfo from "./redux/reducer";

const store = createStore(loginInfo);

export default store ;
