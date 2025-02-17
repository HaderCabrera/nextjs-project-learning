'use client'

import Link from "next/link"

// RCC -> React client component
function PostCard({post}){
    return (
        <div key={post.id} className="card">
            <Link href={`/posts/${post.id}`}>
                <h3>{post.id}. {post.title}</h3>
            </Link>
            <p>{post.body}</p>
            <button className="bg-red-200" onClick={()=>{alert("CLIENT COMPONENT")}}>Click</button>
        </div>
    )
}

export default PostCard