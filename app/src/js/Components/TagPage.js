import React from "react";
import {connect} from "react-redux";

import Spinner from "./Spinner";

import {getCloudTag} from "../actions/cloudTag";

import tagPage from "../../styles/tagPage.scss";


const mapStateToProps = (state) => ({
    cloudTag:state.cloudTag.data,
    loading:state.cloudTag.loading
});
const mapDispatchToProps = (dispatch) => ({
    getCloudTag(id){
        dispatch(getCloudTag(id));
    }
});


@connect(mapStateToProps,mapDispatchToProps)
export default class TagPage extends React.Component{
    componentDidMount(){
        //  this.props.getCloudTag(this.props.match.params.id);//problem:doesn't work with spaces and "/" symbol

     const idWithoutSpacesPart=this.props.match.params.id.replace(/ /g,"%20"),//get id from url till "/" symbol
           idPosition=window.location.href.indexOf(idWithoutSpacesPart),//get id position in url
           fullIdWithoutSpaces=window.location.href.slice(idPosition),//get full id with "/" symbol
           idWithSpaces=fullIdWithoutSpaces.replace(/%20/g," "),//change "%20" to space in url
           idBase64 = btoa(idWithSpaces);//encode id in base64

        this.props.getCloudTag(idBase64);
    }
    render(){
        if(this.props.loading){
            return <Spinner/>
        }
        return(
            <div className={tagPage.wrap}>

                <h3>Label: {this.props.cloudTag.label}</h3>

                <div>Total mentions:{this.props.cloudTag.sentiment && Object.values(this.props.cloudTag.sentiment).reduce((sum,value)=>sum+=value)}
                </div>
                <div>Positive mentions: {this.props.cloudTag.sentiment && this.props.cloudTag.sentiment.positive || 0}</div>
                <div>Neutral mentions: {this.props.cloudTag.sentiment && this.props.cloudTag.sentiment.neutral || 0}</div>
                <div>Negative mentions: {this.props.cloudTag.sentiment && this.props.cloudTag.sentiment.negative || 0}</div>

                <ul>
                    {this.props.cloudTag.pageType && Object.keys(this.props.cloudTag.pageType).map(key => {
                        return [key,this.props.cloudTag.pageType[key]];
                    }).map((item,index) => (
                        <li key={index}>{item[0]}: {item[1]}</li>
                    ))}
                </ul>
            </div>
        );
    }
}