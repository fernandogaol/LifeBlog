import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {Context} from '../../context/Context';
import './TopBar.css';

export default function TopBar() {
	const {user, dispatch} = useContext(Context);

	const handleLogout = () => {
		dispatch({type: 'LOGOUT'});
		window.location.replace('/');
	};
	return (
		<div className='topBar'>
			<Link to='/'>
				<img className='topBarImage' src='../favicon-32x32.png' alt='' />
			</Link>
			<div className='topLeft'>
				<i className='topIcon fab fa-facebook-square'></i>
				<i className='topIcon fab fa-instagram-square'></i>
				<i className='topIcon fab fa-linkedin'></i>
			</div>

			<div className='topCenter'>
				<ul className='topList'>
					<li className='topListItem'>
						<Link to='/'>HOME</Link>
					</li>
					<li className='topListItem'>
						<Link to='/signup'>ABOUT</Link>
					</li>
					{/* <li className='topListItem'>
						<Link>CONTACT</Link>
					</li> */}
					<li className='topListItem'>
						{user && <Link to='/addpost'>ADD POST</Link>}
					</li>
				</ul>
			</div>

			<div className='topRight'>
				{user ? (
					<>
						<img className='topImage' src={user.profilePic} alt=''></img>
						<li className='logout topListItem' onClick={handleLogout}>
							{user && 'LOGOUT'}
						</li>
					</>
				) : (
					<>
						<li className='topListItem'>
							<Link to='/login'>LOGIN</Link>
						</li>
						<li className='topListItem'>
							<Link to='/signup'>SIGNUP</Link>
						</li>
					</>
				)}
				<i className='topSearchIcon fas fa-search'></i>
			</div>
		</div>
	);
}
