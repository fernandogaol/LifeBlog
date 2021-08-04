import {Link} from 'react-router-dom';
import {useState} from 'react';
import './Signup.css';
import axios from 'axios';

export default function Signup() {
	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [error, setError] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(false);
		try {
			const res = await axios.post('/auth/signup', {username, email, password});
			res.data && window.location.replace('/login');
		} catch (err) {
			setError(true);
		}
	};

	return (
		<div className='signup'>
			<img className='loginImg' src='../../favicon-32x32.png' alt='' />
			<span className='signupTitle'>Sign up</span>
			<span className='signupSubTitle'>Create Your Account</span>
			<form className='signupForm' onSubmit={handleSubmit}>
				<label>Username</label>
				<input
					className='signupInput'
					type='text'
					placeholder='Enter Username'
					onChange={(e) => setUsername(e.target.value)}
				/>
				<label>Email</label>
				<input
					className='signupInput'
					type='text'
					placeholder='Enter Email'
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label>Password</label>
				<input
					className='signupInput'
					type='password'
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className='signupButton'>Signup</button>
				<button className='signupLoginButton'>
					<Link to='/login'>Login</Link>
				</button>
			</form>
			{error && (
				<span className='errorSpan'>Please fill all required fields</span>
			)}
		</div>
	);
}
