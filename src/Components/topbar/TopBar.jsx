import { Link } from 'react-router-dom';
import "./TopBar.css"

export default function TopBar(){
    const user = false;
    return(
        <div className="topBar">
            <Link to="/"><img className="topBarImage" src="../favicon-32x32.png" alt="" /></Link>
             <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-linkedin"></i>
                </div>
            
             <div className="topCenter">
                 <ul className="topList">
                    <li className="topListItem"><Link to="/">HOME</Link></li>
                    <li className="topListItem"><Link to="/signup">ABOUT</Link></li>
                    <li className="topListItem"><Link>CONTACT</Link></li>
                    <li className="topListItem">{user && "ADD POST"}</li>            
                 </ul>
             </div>
            
             <div className="topRight">
                {
                    user ? (
                    <>
                        <img className="topImage" src="https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.6435-9/177257487_4053111291446005_6450645541234534589_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=glvB_hqi-boAX_3skG6&_nc_oc=AQlaARnhSejeUQB_MMV5yYDpuGR_aGiidHH6MCftpwCrFdx4OwE9GzhDT9Txlsu0-4FrXKf8aV3UkW2Nvg4qBNEX&tn=wBW-SYjH3uBnfpQN&_nc_ht=scontent.fmkc1-1.fna&oh=a39bef647d1c73ee8a5c001fb0cc128a&oe=60FC2B09" alt=""></img>
                        <li className="logout topListItem">{user && "LOGOUT"}</li></>
                    ) : (
                        <>
                        <li className="topListItem"><Link to="/login">LOGIN</Link></li>
                        <li className="topListItem"><Link to="/signup">SIGNUP</Link></li>
                        </>
                    )
                }
                 <i className="topSearchIcon fas fa-search"></i>
             </div>
             </div>
    )
}