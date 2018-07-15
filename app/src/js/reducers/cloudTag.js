import {GET_CLOUD_TAG_FAILURE,GET_CLOUD_TAG_SUCCESS,GET_CLOUD_TAG} from "../constants/cloudTag";

const initialState={
    data:{},
    loading:false,
    loaded:false
};

export default function (state=initialState, action) {
    switch (action.type){
    case GET_CLOUD_TAG:
        return {
            ...state,
            loading:true
        };
    case GET_CLOUD_TAG_SUCCESS:
        return{
            ...state,
            loading:false,
            loaded:true,
            data:action.payload
        };
    case  GET_CLOUD_TAG_FAILURE:
        return{
            ...state,
            loading:false,
            loaded:false,
            data:{}
        };
    default:
        return state;
    }
}