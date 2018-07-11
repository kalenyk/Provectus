import React from "react";
import {connect} from "react-redux";

import {getCloudTags} from "../actions/cloudTag";

import tagCloudItem from "../../styles/tagCloudItem.scss";

class App extends React.Component{
    state={
        coefficient:null,
    };
    componentDidMount(){
        this.props.getCloudTags();
    }
    calcTagDimensions = () => {
        let a=this.props.cloudTags.map((item)=>item.sentimentScore);
        const min=Math.min(...a);
        const max=Math.max(...a);
        const coefficient = (max-min)/10;
        console.log(coefficient);
    };

    render(){

        return(
            <div className={tagCloudItem.wrap}>
                {this.props.cloudTags.map((item,index) => {
                    return <h1  className={tagCloudItem.item} key={index}>{item.label}</h1>
                })}
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    cloudTags:state.cloudTags.data
});

const mapDispatchToProps = (dispatch) => ({
    getCloudTags(){dispatch(getCloudTags())}
});

export default connect(mapStateToProps,mapDispatchToProps)(App);