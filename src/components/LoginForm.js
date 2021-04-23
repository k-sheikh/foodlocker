import React, {useState} from 'react';
import axios from 'axios';

function LoginForm(props) {
    const [state , setState] = useState({
        username : "",
        password : "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload={
            "username":state.username,
            "password":state.password,
        }
        axios.post('http://127.0.0.1:8000/api/v1/dj-rest-auth/login/', payload)
            .then(function (response) {
                if(response.data.key.length > 0){
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : `Login successful. Hello ${state.username}!`
                    }))
                }
            })
            .catch(function (error) {
                console.log(error);
                setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Login unsuccessful. Username and/or password incorrect'
                }))
            });
    }
    return(
        <div className="Login">
            <form>
                <div >
                <label className="LoginLabel"><h3>Username:</h3></label>
              
                <input className="Input" 
                       type="text"  
                       id="username"  
                       placeholder="enter username" 
                       value={state.username}
                       onChange={handleChange}
                />
                </div>
                <br/>
                <div>
                <label className="LoginLabel"><h3>Password:</h3></label>
                
                <input className="Input" type="password"  
                       id="password" 
                       placeholder="enter password"
                       value={state.password}
                       onChange={handleChange} 
                />
                </div>
                <br/>
                <br/>
                <br/>
                <button 
                    className="Btn"
                    type="submit" 
                    onClick={handleSubmitClick}
                >Login</button>
            </form>
            <div>
                {state.successMessage}
            </div>

        </div>
    )
}

export default LoginForm;