import {GET_CLOUD_TAGS_FAILURE,GET_CLOUD_TAGS_SUCCESS,GET_CLOUD_TAGS} from "../constants/cloudTag";

const initialState={
    data:[],
    loading:false,
    loaded:false
};

export default function (state=initialState, action) {
    switch (action.type){
        case GET_CLOUD_TAGS:
            return {
                ...state,
                loading:true
            };
        case GET_CLOUD_TAGS_SUCCESS:
            return{
                ...state,
                loading:false,
                loaded:true,
                data:action.payload
            };
        case  GET_CLOUD_TAGS_FAILURE:
            return{
                ...state,
                loading:false,
                loaded:false,
                data:[]
            };
        default:
            return state;
    }
}