import { fetchData } from "../../main";
import { useState, useEffect } from "react";

const Profile = () => {
    const [posts, setPosts] = useState([]);
    const [post_title, setTitle] = useState('');
    const [post_description, setDescription] = useState('');
  
    useEffect(() => {
        // Fetch initial posts data when the component loads
        async function fetchData() {
          try {
            const response = await fetch('/post/findPost'); 
            const data = await response.json();
            setPosts(data);
          } catch (error) {
            console.error('Error fetching posts:', error);
          }
        }
      
        fetchData();
    }, []);
  
    const onSubmit = async (e) => {
        e.preventDefault();
  
        const newPost = { post_title, post_description };
        
        fetchData('/post/newPost', {
            newPost
        }, 
        "POST"
        )
        .then((data) => {
            if(!data.message) {
              setPosts([...posts, [e.target.name], e.target.value]);
              setTitle('');
              setDescription('');
            }                
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return(
        <div>
            {/* In theory any posts made or found in DB would be added here */}
            <h2>My Posts</h2>
            <div>
                {posts.map((post, index) => (
                    <div key={index} className="shadow p-3 mb-5 bg-body rounded">
                        <h3>{post.post_title}</h3>
                        <p>{post.post_description}</p>
                    </div>
                ))}
            </div>

                {/* Post Form  */}
            <h2>Post Here!</h2>
            <div className="shadow p-3 mb-5 bg-body rounded">
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Post Title</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="title" 
                        name="title" 
                        onChange={(e) => setTitle(e.target.value)} 
                        value={post_title}
                        required></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Post Description</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="description" 
                        name="description"
                        onChange={(e) => setDescription(e.target.value)} 
                        value={post_description}
                        required></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Post</button>
                </form>
            </div>
        </div>
    )
}

export default Profile;