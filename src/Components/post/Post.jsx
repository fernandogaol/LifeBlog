import "./Post.css"

export default function Post() {
    return (
        <div className="post">
            <img src="https://dz01iyojmxk8t.cloudfront.net/wp-content/uploads/2011/02/07004605/professional-relationships.jpg" alt="" className="postImage" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                    <span className="postCat">Work</span>
                    <span className="postCat">Movie</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolor odio repellendus quas tempora maiores inventore iure veniam incidunt, commodi, labore quos corrupti? Assumenda minima ad repudiandae ipsam magnam natus.</span>
                <hr />
                <span className="postDate">an hour ago</span>
                <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quas distinctio, qui hic dolor dignissimos eum maiores neque labore esse consequuntur aperiam sed impedit nulla maxime, vitae numquam veritatis facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quas distinctio, qui hic dolor dignissimos eum maiores neque labore esse consequuntur aperiam sed impedit nulla maxime, vitae numquam veritatis facilis</p>
                
            </div>
        </div>
    )
}
