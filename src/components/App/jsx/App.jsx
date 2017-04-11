import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {posts: []};
    }


    render() {
        return (<div>
            <PostList posts={this.state.posts} onVote={this.onVote} onPostSubmit={this.onPostSubmit} />
        </div>);
    }
}