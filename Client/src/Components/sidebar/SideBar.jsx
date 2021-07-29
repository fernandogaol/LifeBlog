import axios from 'axios';
import {useState, useEffect} from 'react';
import './SideBar.css';

export default function SideBar() {
	const [cats, setCats] = useState([]);

	useEffect(() => {
		const getCats = async () => {
			const getCatsRes = await axios.get('/categories');
			setCats(getCatsRes.data);
		};
		getCats();
	}, []);

	return (
		<div className='sidebar'>
			<div className='sidebarItem'>
				<span className='sidebarTitle'>About me</span>
				<img
					className='sidebarImage'
					src='https://medpharm.ie/wp-content/uploads/Code-of-Conduct-2019-Principles-1.jpg'
					alt=''
				></img>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ducimus
					dolorum non odit, molestiae eum cumque aliquam, voluptates dolores
					modi reprehenderit consequatur eaque ipsam animi, enim culpa debitis
					cum illo?
				</p>
			</div>
			<span className='sidebarTitle'>Categories</span>
			<ul className='sidebarList'>
				{cats.map((c) => (
					<li className='sidebarListItem'>{c.name}</li>
				))}
			</ul>
			<span className='sidebarTitle'>Follow Me</span>
			<div className='sidebarSocial'>
				<i className='sidebarIcon fab fa-facebook-square'></i>
				<i className='sidebarIcon fab fa-instagram-square'></i>
				<i className='sidebarIcon fab fa-linkedin'></i>
			</div>
		</div>
	);
}
