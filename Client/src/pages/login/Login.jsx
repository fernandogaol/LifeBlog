import { Link } from 'react-router-dom';
import "./Login.css"

export default function Login() {

    return (
            <div className="login">
                <div className="loginWrapper">
                    <div className="longTitleWrapper">
                        <img className="loginImg" src="../../favicon-32x32.png" alt="" />
                        <span className="loginTitle">Login</span>
                        <span className="loginSubTitle">Use your account</span>
                    </div>
                <form className="loginForm">
                    <label>Email</label>
                    <input className="loginInput" type="text" placeholder="Enter Email" />
                    <label>Password</label>
                    <input className="loginInput" type="password"/>
                    <button className="loginButton">
                        Login
                    </button>
                    <button className="loginRegisterButton"><Link to="/signup">Signup</Link></button>
                </form>
                </div>  
            </div>                
    )
}
