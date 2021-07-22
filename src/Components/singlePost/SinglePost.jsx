import "./SinglePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://dz01iyojmxk8t.cloudfront.net/wp-content/uploads/2011/02/07004605/professional-relationships.jpg" alt="" className="singlePostImage" />
                
               
                <h1 className="singlePostTitle">Lorem ipsum dolor sit <div className="singlePostOptions">
                <i className="singlePostIcon far fa-edit"></i>
                <i className="singlePostIcon fas fa-minus-circle"></i></div></h1>
                
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Safak</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sint repudiandae reprehenderit nisi doloremque at alias optio, eos ipsum. Cumque vel quidem odit aperiam? Delectus quasi rem fugiat omnis Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sint repudiandae reprehenderit nisi doloremque at alias optio, eos ipsum. Cumque vel quidem odit aperiam? Delectus quasi rem fugiat omnis 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sint repudiandae reprehenderit nisi doloremque at alias optio, eos ipsum. Cumque vel quidem odit aperiam? Delectus quasi rem fugiat omnis 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sint repudiandae reprehenderit nisi doloremque at alias optio, eos ipsum. Cumque vel quidem odit aperiam? Delectus quasi rem fugiat omnis cupiditate.</p> 
         
            </div>
        </div>
    )
}
