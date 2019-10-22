import React from 'react'
import UserCard from '../components/UserCard'

class UserContainer extends React.Component{

    // componentDidMount = () => {
    //     fetch(`http://localhost:3000/api/v1/users`,{
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         }, 
    //         body: JSON.stringify()
    //     })
    // }

    render(){
        return (
            <div>
                <UserCard />
            </div>
        )
    }
}

export default UserContainer