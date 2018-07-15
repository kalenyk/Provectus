import {createLogic} from "redux-logic";
import {GET_CLOUD_TAGS,GET_CLOUD_TAGS_FAILURE,GET_CLOUD_TAGS_SUCCESS} from "../constants/cloudTag";


const getCloudTags = createLogic({
    type:GET_CLOUD_TAGS,
    latest:true,
    process(_,dispatch,done) {
        const config = {
            method: "GET",
            mode: "cors",
            headers: {"Content-Type": "application/json", Accept: "application/json"}
        };


        fetch("http://localhost:8000/tags", config)
            .then(res => {
                return res.json();
            })
            .then(data => {
                dispatch({
                    type: GET_CLOUD_TAGS_SUCCESS,
                    payload: data
                });
                done();
            })
            .catch(err => {
                dispatch({
                    type: GET_CLOUD_TAGS_FAILURE,
                    error: true
                });
                done();
            });

    }
});

export default getCloudTags;