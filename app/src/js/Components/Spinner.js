import React from "react";
import {DotLoader} from "react-spinners";

import spinner from "../../styles/spinner.scss";

export default class Spinner extends React.Component{
    render(){
        return(
            <div className={spinner.spinner}>
                <DotLoader
                    color="blue"
                    loading
                />
            </div>
        );
    }
}