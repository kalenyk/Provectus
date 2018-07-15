import {createLogic} from "redux-logic";
import {
    GET_CLOUD_TAG_SUCCESS,
    GET_CLOUD_TAG,
    GET_CLOUD_TAG_FAILURE
} from "../constants/cloudTag";


const getCloudTag = createLogic({
    type:GET_CLOUD_TAG,
    latest:true,
    process({action},dispatch,done){
        const config = {method:"GET", mode:"cors",headers:{"Content-Type":"Application/json"}};
        fetch(`http://localhost:8000/tags/${action.id}`,config)
            .then((res)=>{
                return res.json();
            })
            .then((tag) => {
                dispatch({
                    type:GET_CLOUD_TAG_SUCCESS,
                    payload:tag
                });
                done();
            })
            .catch((err) => {
                dispatch({
                    type:GET_CLOUD_TAG_FAILURE,
                    error:true
                });
                done();
            });
    }
});

export default getCloudTag;