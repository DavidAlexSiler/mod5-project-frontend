import React from 'react'
import _ from 'lodash'
import { Search } from 'semantic-ui-react'
import OtherUsersCard from '../components/OtherUsersCard'
import { connect } from 'react-redux'
    
class FriendsContainer extends React.Component{
        
   
        state = {
            isLoading: false, 
            results: [], 
            value: '', 
            users: [], 
            user: {
                title: null, 
                description: null, 
                image: null
            },
            selected: {}
        }
        
        setUser = (user) => {
                this.setState({
                    user: {
                        ...this.state.user,
                        title: user.name,
                        description: 'spotify user',
                        image: user.image,
                        id: user.id,
                        spotify_id: user.spotify_id
                    }
                })
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
        
        handleResultSelect = (e, { result }) => { 
            this.setState({ 
                selected: result, 
                value: result.title,
                show: true
            })
        }   
    
        handleSearchChange = (e, { value }) => {
            this.setState({ isLoading: true, value })
            
            setTimeout(() => {
                if (this.state.value.length < 1) console.log("RESET")                
                const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
                const isMatch = (result) => re.test(result.title)
                this.setState({
                    isLoading: false,
                    results: _.filter(this.state.users, isMatch),
                })
            }, 300)
        }
        
        render(){
            
        return (
            <div className='friend search container'>
                <h1>Search through Friends' Music</h1>
                <Search 
                    className='friend search'
                    loading={this.state.isLoading}
                    onResultSelect={this.handleResultSelect}
                    onSearchChange={_.debounce(this.handleSearchChange, 500, {
                        leading: true,
                    })}
                    results={this.state.results}
                    value={this.state.value}
                    {...this.props}
                />
                {this.state.selected.id ? <OtherUsersCard selected={this.state.selected} show={this.state.show} />: null}
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(FriendsContainer)
