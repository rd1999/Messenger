import {combineReducers} from "redux";
import AuthReducer from "./AuthReducer";
import MainReducer from "./MainReducer";
import NameFetchReducer from "./NameFetchReducer";
import MessageReducer from "./MessageReducer";
import MessageFetchReducer from "./MessageFetchReducer";

export default combineReducers({
    auth: AuthReducer,
    main: MainReducer,
    nameFetch: NameFetchReducer,
    message: MessageReducer,
    messageFetch: MessageFetchReducer
})