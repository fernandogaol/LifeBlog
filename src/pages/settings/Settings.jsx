import "./Settings.css"
import Sidebar from "../../Components/sidebar/SideBar"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateAcc">Update your account</span>
                    <span className="settingsDeleteAcc">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    {/* PROFILE PICTURE SETTINGS */}
                    <div className="settingsPP"> 
                        <img src="https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.6435-9/177257487_4053111291446005_6450645541234534589_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=glvB_hqi-boAX_3skG6&_nc_oc=AQlaARnhSejeUQB_MMV5yYDpuGR_aGiidHH6MCftpwCrFdx4OwE9GzhDT9Txlsu0-4FrXKf8aV3UkW2Nvg4qBNEX&tn=wBW-SYjH3uBnfpQN&_nc_ht=scontent.fmkc1-1.fna&oh=a39bef647d1c73ee8a5c001fb0cc128a&oe=60FC2B09" alt="" />
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle"></i>
                        <input type="file" id="fileInput" style={{display: "none"}} />
                        </label>
                        </div>
                        <label>Username</label>
                        <input type="text" placeholder="New Username" />
                        <label>Email</label>
                        <input type="email" placeholder="New Email" />
                        <label>Password</label>
                        <input type="password" placeholder="New Password"/>
                        <button className="settingsSubmit">Update</button>
                   
                </form>

            </div>
            <Sidebar/>
        </div>
    )
}
