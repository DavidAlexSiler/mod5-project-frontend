import React from 'react'
import UserCard from '../components/UserCard'

export default function UserContainer(props) {
    return (
        <div>
            <UserCard user={props.user} />
        </div>
    )
}
