import {combineReducers} from "redux";

import cloudTags from "./cloudTags";
import cloudTag from "./cloudTag";

const reducers=combineReducers({
    cloudTags,
    cloudTag
});
export default reducers;