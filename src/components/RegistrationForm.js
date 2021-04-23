import React, {useState} from 'react';
import axios from 'axios';

const RegistrationForm = () => {

    const [state , setState] = useState({
        username: "",
        email : "",
        password : "",
        confirmPassword: "",
        successMessage: null
    })

    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }));
    }
    const sendDetailsToServer = () => {
        if(state.username.length && state.email.length && (state.password.length >= 8) && state.confirmPassword.length) {
            const payload={
                "username":state.username,
                "email":state.email,
                "password1":state.password,
                "password2":state.confirmPassword,
            }
            axios.post('http://127.0.0.1:8000/api/v1/dj-rest-auth/registration/', payload).then(
                function (response) {
                    console.log(response.data.key.length)
                    if(response.data.key.length > 0){
                        setState(prevState => ({
                            ...prevState,
                            'successMessage' : `Registration successful. Hello ${state.username}`
                        }));
                        
                    } else{
                        setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Registration unsuccessful.'
                        }));
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });    
        } else {
            setState(prevState => ({
                            ...prevState,
                            'successMessage' : 'Registration unsuccessful. Please fill out all parts of the form & ensure passwords are at least 8 characters.'
                        }))   
        }
        
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            sendDetailsToServer()    
        } else {
            setState(prevState => ({
                            ...prevState,
                            'successMessage' : 'Passwords do not match. Passwords must be at least 8 characters.'
            }))
        }
    }
    return (
        <div>
            <form>
                <label>
                    Username
                    <input 
                        type="text"
                        id="username"
                        placeholder="enter username"   
                        value={state.username}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email address
                    <input 
                        type="email"
                        id="email"
                        placeholder="enter email" 
                        value={state.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Password
                    <input type="password"  
                        id="password"
                        placeholder="password"
                        value={state.password}
                        onChange={handleChange} 
                    />
                </label>
                <label>
                    Confirm Password
                    <input type="password"  
                        id="confirmPassword" 
                        placeholder="confirm password"
                        value={state.confirmPassword}
                        onChange={handleChange} 
                    />
                
                </label>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >
                    Register
                </button>
            </form>
            <div>
                {state.successMessage}
            </div>
            
        </div>
    )
}

export default RegistrationForm;