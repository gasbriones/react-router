import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';

export default class Sidebar extends React.Component{
    constructor(props){
        super(props);
    }

    render (){
        return (<div className="root" {...this.props}/>)
    }
}