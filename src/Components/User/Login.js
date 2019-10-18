import React from "react"; 
// import token authentication
import { axiosWithAuth } from '../auth/axiosWithAuth';

import Button Icons from "grommet";

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    };

handleChange = e => {
    this.setState({
        credentials: {
            ...this.state.credentials, 
            [e.target.name]: e.target.value
        }
    });
};

login = e => {
    e.preventDefault();

    axiosWithAuth()
    // make a post request to retrieve a token from the api
    .post("/login", this.state.credentials)
    .then(response => {
        localStorage.setItem("token", response.data.payload);
        // once the token is handled, navigate to 
        this.props.history.push
        // ("") place target component within parentheses
    })
    .catch(error => console.log(error));
};

render() {
    return (
        <>
        {/* <Form onSubmit={this.login}>
            <input */}
            <Form>
                <FormField 
            name="username"
            label="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            />
            <FormField
            name="password"
            label="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            />
            <Button
            icon={<Icons.Edit />}
            label="Edit"
            onClick={() => {}}
                />
        </Form>
        </>
    );
}
}

export default Login;


// export default (params) => {
    
// }
