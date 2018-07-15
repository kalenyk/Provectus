import {GET_CLOUD_TAGS,GET_CLOUD_TAG} from "../constants/cloudTag";

export const getCloudTags = () => ({
    type:GET_CLOUD_TAGS
});

export const getCloudTag = (id) => ({
    type:GET_CLOUD_TAG,
    id
});