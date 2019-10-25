import React, { Component } from 'react'
import { connect } from 'react-redux'

export class MyFriends extends Component {

    // componentDidMount(){
    //     fetch('http://localhost:3000/api/v1/follows', {
    //         method: 'GET',
    //         headers: {
    //             'content-type': 'application/json'
    //         }
    //     })
    //     .then(r => console.log(r))
    // }

    render() {
        return (
            <div className='my friends'>
                <h1></h1>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return state.login
}

export default connect(mapStateToProps)(MyFriends)