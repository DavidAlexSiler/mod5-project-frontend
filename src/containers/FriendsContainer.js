import React from 'react'
import _ from 'lodash'
import { Search } from 'semantic-ui-react'
import OtherUsersCard from '../components/OtherUsersCard'
import { connect } from 'react-redux'

// const initialState = { isLoading: false, results: [], value: '', users: [], user: null }
    
class FriendsContainer extends React.Component{
        
        
        // state = initialState

        state = {
            isLoading: false, 
            results: [], 
            value: '', 
            users: [], 
            user: {
                title: null, 
                description: null, 
                image: null
            }
        }


    // const source = this.props.login.friends.allUsers.map(user => {
    //     this.setState({
    //         title: user.name,
    //         description: 'spotify user',
    //         image: user.image
    //     })
    // }
        
        setUser = (user) => {
            // this.props.login.friends.allUsers.map(user => {
                this.setState({
                    user: {
                        ...this.state.user,
                        title: user.name,
                        description: 'spotify user',
                        image: user.image
                    }
                })
            // })
            return this.state.user
        }

        setUsers = (user) => {
            this.setState({ users: [...this.state.users, user]})
        }

        //get all users
        componentDidMount = (e) => {
            fetch('http://localhost:3000/api/v1/users', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(r => r.json())
            .then(data => {
                data.forEach(user => {
                    this.setUsers(this.setUser(user)); 
                })
                this.props.dispatch({type: "GET_ALL_USERS", allUsers: data})
            })
        }
        
        handleResultSelect = (e, { result }) => this.setState({ value: result.title })
        
        handleSearchChange = (e, { value }) => {
            this.setState({ isLoading: true, value })
            
            setTimeout(() => {
                if (this.state.value.length < 1) console.log("RESET")
                // return this.setState(initialState)
                
                const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
                const isMatch = (result) => re.test(result.title)
                
                this.setState({
                    isLoading: false,
                    results: _.filter(this.state.users, isMatch),
                })
            }, 300)
        }
        
        render(){
            // const { isLoading, value, results } = this.state
            console.log(this.state.users)
        return (
            <div>
                <Search
                    loading={this.state.isLoading}
                    onResultSelect={this.handleResultSelect}
                    onSearchChange={_.debounce(this.handleSearchChange, 500, {
                        leading: true,
                    })}
                    results={this.state.results}
                    value={this.state.value}
                    {...this.props}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(FriendsContainer)
