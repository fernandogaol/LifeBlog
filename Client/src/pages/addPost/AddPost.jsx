import "./AddPost.css"


export default function AddPost() {
    return (
        <div className="addPost">
            <img className="addPostImage"src="https://professionalliabilitymatters.com/wp-content/uploads/2019/03/Abstract-Skyscraper-Angle-Sunlight-Grayscale-643087328-e1552920425737.jpg" alt="" />
           <form action="" className="addPostForm">
               <div className="addPostGroup">
                   <label htmlFor="fileInput">
                   <i class="addImageIcon fas fa-file-upload">&nbsp;Upload Image</i>
                   </label>
                   <input type="file" id="fileInput" style={{display:"none"}}/>
               </div>
               <div className="addPostGroup">
                    <input type="text" placeholder="Title" className="addPostInput" autoFocus= {true}/>
                    <textarea placeholder="Write your post here...." className="addPostInput writeText" type="text"></textarea>
               </div>
               <button className="publishPost">Publish</button>
           </form>
        </div>
    )
}
