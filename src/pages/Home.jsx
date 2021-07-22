import "./Home.css"
import Header from "../Components/header/Header"
import Posts from "../Components/posts/Posts"
import Single from "./single/Single"
import SideBar from "../Components/sidebar/SideBar"

export default function Home() {
    return (
        <>
        <Header/>
        <div className="home">
            <Posts/>
            <SideBar/>        
        </div>
        </>
    )
}