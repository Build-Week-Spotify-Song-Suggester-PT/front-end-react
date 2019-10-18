import React from "react"; 
// import token authentication
import { axiosWithAuth } from '../auth/axiosWithAuth';

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
        <form onSubmit={this.login}>
            <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            />
            <input 
            type="password"
            name="password"
            placeholder="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            />
            <button>Log In</button>
        </form>
        </>
    );
}
}

export default Login;


// export default (params) => {
    
// }
