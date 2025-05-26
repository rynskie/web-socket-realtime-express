const PostCard = ({ username, content, comments }) => {
    return (
        <div className="border-b border-gray-700 p-4 text-white">
            <p className="font-bold">{username}</p>
            <p className="text-sm text-gray-400 mb-2">@{username.toLowerCase()} · 3j</p>
            <p>{content}</p>
            <p className="text-sm text-gray-400 mt-2">💬 {comments} comments</p>
        </div>
    )
}

export default PostCard
