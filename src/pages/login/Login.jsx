import "./Login.css"
export default function Login() {
    return (
            <div className="login">
                <span className="loginTitle">Login</span>
                <span className="loginSubTitle">Use your account</span>
                <form className="loginForm">
                    <label>Email</label>
                    <input className="loginInput" type="text" placeholder="Enter Email" />
                    <label>Password</label>
                    <input className="loginInput" type="password"/>
                    <button className="loginButton">
                        Login
                    </button>
                    <button className="loginRegisterButton">Register</button>
                </form>
            </div>                
    )
}
