import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends Component {
    render () {
        const { user } = this.props; 
        
        if(!user){
            return null;
        } 
        return <div className="header">{user.name}</div>
    }

    componentDidMount() {
        return this.props.fetchUser(this.props.userId);
    }
}

const mapStateToProps = (state, ownProps) =>{
    return { user : state.users.find((user) => user.id === ownProps.userId) };
}

export default connect(
    mapStateToProps, 
    {fetchUser}
)(UserHeader); 