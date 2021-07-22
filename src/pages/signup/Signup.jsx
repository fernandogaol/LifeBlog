import "./Signup.css"

export default function Signup() {
    return (
        <div className="signup">
        <span className="signupTitle">Sign up</span>
        <span className="signupSubTitle">Create Your Account</span>
        <form className="signupForm">
            <label>Email</label>
            <input className="signupInput" type="text" placeholder="Enter Email" />
            <label>Password</label>
            <input className="signupInput" type="password"/>
            <label>Repeat Password</label>
            <input className="signupInput" type="password"/>
            <button className="signupButton">
                Signup
            </button>
            <button className="signupLoginButton">Login</button>
        </form>
    </div>                
    )
}
