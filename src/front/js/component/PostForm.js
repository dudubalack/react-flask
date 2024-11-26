
import React, { useState } from 'react';

function PostForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({ title, content }),
        });
        const data = await response.json();
        alert(data.message);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Post</h2>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required />
            <button type="submit">Create Post</button>
        </form>
    );
}

export default PostForm;
