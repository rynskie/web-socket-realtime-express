import { useState } from 'react'

const PostForm = () => {
    const [content, setContent] = useState('')
    const [image, setImage] = useState(null)

    return (
        <div className="border-b border-gray-700 p-4">
            <h2 className="text-white text-xl font-bold mb-2">How is today?</h2>
            <textarea
                className="w-full p-2 bg-black text-white border-b border-gray-500 outline-none"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write something..."
            />
            <input
                type="file"
                className="text-blue-500 mt-2"
                onChange={(e) => setImage(e.target.files[0])}
            />
            <button className="bg-white text-black px-4 py-2 rounded mt-2 float-right font-bold">Posting</button>
        </div>
    )
}

export default PostForm
