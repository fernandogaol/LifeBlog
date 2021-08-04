import axios from 'axios';
import {Link} from 'react-router-dom';
import {Context} from '../../context/Context';
import {useContext, useRef, useState} from 'react';
import './Login.css';

export default function Login() {
	const userRef = useRef();
	const passwordRef = useRef();
	const {dispatch, isFetching} = useContext(Context);
	const [error, setError] = useState(false);

	const handleSubmit = async (e) => {
		setError(false);
		e.preventDefault();
		dispatch({
			type: 'LOGIN_START',
		});
		try {
			const res = await axios.post('/auth/login', {
				username: userRef.current.value,
				password: passwordRef.current.value,
			});
			res.data && window.location.replace('/');
			dispatch({
				type: 'LOGIN_SUCCESS',
				payload: res.data,
			});
		} catch (err) {
			dispatch(
				{
					type: 'LOGIN_FAILURE',
				},
				setError(true)
			);
		}
	};

	return (
		<div className='login'>
			<div className='loginWrapper'>
				<div className='longTitleWrapper'>
					<img className='loginImg' src='../../favicon-32x32.png' alt='' />
					<span className='loginTitle'>Login</span>
					<span className='loginSubTitle'>Use your account</span>
				</div>
				<form className='loginForm' onSubmit={handleSubmit}>
					<label>Username</label>
					<input
						className='loginInput'
						type='text'
						placeholder='Enter Username'
						ref={userRef}
					/>
					<label>Password</label>
					<input
						className='loginInput'
						type='password'
						placeholder='Enter Password'
						ref={passwordRef}
					/>
					<button className='loginButton' type='submit' disabled={isFetching}>
						Login
					</button>
					<button className='loginRegisterButton'>
						<Link to='/signup'>Signup</Link>
					</button>
					{error && <span className='loginErrorSpan'>Wrong Credentials</span>}
				</form>
			</div>
		</div>
	);
}
