import {createLogic} from "redux-logic";
import {GET_CLOUD_TAGS,GET_CLOUD_TAGS_FAILURE,GET_CLOUD_TAGS_SUCCESS} from "../constants/cloudTag";

import data from "../../../public/data";

const getCloudTags = createLogic({
    type:GET_CLOUD_TAGS,
    latest:true,
    process(_,dispatch,done){
        try{
            dispatch({
                type:GET_CLOUD_TAGS_SUCCESS,
                payload:data
            });
            done();
        }catch (err) {
            console.log(err);
            dispatch({
                type:GET_CLOUD_TAGS_FAILURE,
                error:true
            });
            done();
        }

    }
})

export default getCloudTags;