
import PostCard from "../../components/PostCard";

import './Posts.css'


async function loadPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json()

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return data
}


// RSC -> React server component
async function PostPage() {

    const posts = await loadPosts();
    
    return (
        <div className="grid">
            {
                posts.map((post) => (
                   <PostCard post={post}/> 
                ))
            }
        </div>
    )
}

export default PostPage