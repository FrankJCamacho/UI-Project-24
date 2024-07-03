import { fetchData } from "../../main";
import { useState} from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });

    const {username, email, password} = user;

    const onChange = (e) => setUser({...user, [e.target.name]: e.target.value})

    const onSubmit = (e) => {
        e.preventDefault();

        // if(password.length <= 8) {
        //     console.log("password must be greater than 8 characters!")
        // } else {
        //     console.log("Success!")
        // }

        fetchData('/user/register', {
            username,
            password
        }, 
        "POST"
        )
        .then((data) => {
            if(!data.message) {
                navigate("/profile");
            }                
        })
        .catch((error) => {
            console.log(error)
        })

    }

    return(
        <div>
            <h2>Register Here!</h2>
            <div className="shadow p-3 mb-5 bg-body rounded">
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="email" 
                        name="email" 
                        onChange={onChange} 
                        value={email}
                        aria-describedby="emailHelp" 
                        required ></input>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="username" 
                        name="username"
                        onChange={onChange} 
                        value={username}
                        required></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        name="password" 
                        onChange={onChange} 
                        value={password}
                        aria-describedby="passwordHelpBlock" 
                        required></input>
                        <div id="passwordHelpBlock" className="form-text">
                            Your password must be greater than 8 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
