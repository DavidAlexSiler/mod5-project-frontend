import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'


class LoginButton extends Component {

  



    render() {
        return (
            <div>
                <Button as="a" href="http://localhost:3000/api/v1/login" >Log in</Button>
            </div>
        )
    }
}

export default LoginButton

