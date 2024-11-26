
import React, { useEffect, useState } from 'react';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('http://localhost:5000/posts', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            const data = await response.json();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
