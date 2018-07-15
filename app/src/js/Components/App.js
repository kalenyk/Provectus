import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import Spinner from "./Spinner";

import {getCloudTags} from "../actions/cloudTag";

import tagCloud from "../../styles/tagCloud.scss";



const mapStateToProps = (state) => ({
    cloudTags:state.cloudTags.data,
    loading:state.cloudTags.loading
});

const mapDispatchToProps = (dispatch) => ({
    getCloudTags(){dispatch(getCloudTags())}
});


@connect(mapStateToProps,mapDispatchToProps)
export default class App extends React.Component{
    componentDidMount(){
        this.props.getCloudTags();
    }

    calcTagDimensions = () => {
        const a=this.props.cloudTags.map((item)=>item.sentimentScore),
         min=Math.min(...a),
         max=Math.max(...a);

         return  (max-min)/100;
    };

    calcFontSize = (sentimentScore,coefficient) => {
        if(coefficient){
            return (sentimentScore/coefficient);
        }
        return sentimentScore;
    };

    randomFontColor = () => {
        return "#"+((1<<24)*Math.random()|0).toString(16)
    };

    render(){
        let coefficient = null;
        if(this.props.cloudTags.length){
            coefficient=this.calcTagDimensions();
        }

        if(this.props.loading){
            return <Spinner/>
        }
        return(
            <div className={tagCloud.wrap}>
                {this.props.cloudTags.map((item,index) => {
                    return <Link
                        to={`/${item.id}`}
                        className={tagCloud.item}
                        style={
                            {
                                fontSize:this.calcFontSize(item.sentimentScore,coefficient),
                                color:this.randomFontColor()
                            }
                        }
                        key={index}>{item.label}</Link>
                })}
            </div>
        )
    }
}