import { Link } from 'react-router-dom';
import "./Signup.css"

export default function Signup() {
    return (
        <div className="signup">
                <img className="loginImg" src="../../favicon-32x32.png" alt="" />
                <span className="signupTitle">Sign up</span>
                <span className="signupSubTitle">Create Your Account</span>
            <form className="signupForm">
                <label>Email</label>
                <input className="signupInput" type="text" placeholder="Enter Email" />
                <label>Password</label>
                <input className="signupInput" type="password"/>
                <button className="signupButton">
                    Signup
                </button>
                <button className="signupLoginButton"><Link to="/login">Login</Link></button>
            </form>
    </div>                
    )
}
