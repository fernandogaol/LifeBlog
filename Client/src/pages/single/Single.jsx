import "./Single.css"
import SideBar from "../../Components/sidebar/SideBar"
import SinglePost from "../../Components/singlePost/SinglePost"

export default function Single() {
    return (
        <div className="single">
            {/* {post} */}
            <SinglePost/>
            <SideBar/>         
        </div>
    )
}
