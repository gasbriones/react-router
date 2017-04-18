import React from 'react';

export default class Sidebar extends React.Component{
    constructor(props){
        super(props);
    }

    render (){
        return (<div className="root" {...this.props}/>)
    }
}