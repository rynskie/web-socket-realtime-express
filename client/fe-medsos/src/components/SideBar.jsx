import { Link } from 'react-router-dom'
import { Home, MessageCircle } from 'lucide-react'

const Sidebar = () => {
    return (
        <div className="w-60 h-screen bg-black text-white flex flex-col justify-between p-4">
            <div>
                <h1 className="text-2xl font-bold mb-8">LOGO</h1>
                <Link to="/" className="flex items-center gap-2 mb-4">
                    <Home size={20} /> Home
                </Link>
                <Link to="/chat" className="flex items-center gap-2">
                    <MessageCircle size={20} /> Chat
                </Link>
            </div>
            <button className="bg-white text-black px-4 py-2 rounded font-bold">Posting</button>
        </div>
    )
}

export default Sidebar
