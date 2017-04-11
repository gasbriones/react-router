import React from 'react';

export default class Sidebar extends React.Component{
    constructor(props){
        super(props);
    }

    render (){
        return (<div className="sidebar" style={styles.layout} {...this.props} />)
    }
}

const styles = {
    layout: {
        width:'15%',
        float:'left',
        backgroundColor:'#ccc'
    },
    ul:{
        li:{
            color:'red',
            textDecoration:'underline'
        }
    }
};
