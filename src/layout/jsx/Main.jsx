import React from 'react';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="main" style={styles.layout} {...this.props} />)
    }
}

const styles = {
    layout: {
        width: '70%',
        float: 'left'
    }
};