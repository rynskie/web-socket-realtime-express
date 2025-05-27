import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProfile } from "../redux/action/authAction"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  const profile = useSelector((root) => root?.auth?.data)
  const dispatch = useDispatch()

  useEffect(() => dispatch(fetchProfile(profile?.token)), [])
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-blue-700 text-white p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-8">ChatSpace</h2>
          <div className="space-y-4">
            <button className="w-full text-left hover:bg-blue-800 px-4 py-2 rounded">Dashboard</button>
            <button className="w-full text-left hover:bg-blue-800 px-4 py-2 rounded">Messages</button>
            <button className="w-full text-left hover:bg-blue-800 px-4 py-2 rounded">Friends</button>
            <button
              className="w-full text-left hover:bg-blue-800 px-4 py-2 rounded bg-blue-600"
              onClick={() => navigate("/profile")}>
              {profile?.firstname || "Profile"}
            </button>
          </div>
        </div>
        <button className="mt-8 bg-white text-blue-700 font-semibold px-4 py-2 rounded hover:bg-gray-100">
          + New Post
        </button>
      </aside>

      <main className="flex-1 p-8 bg-gray-100">
        <section className="bg-white p-6 rounded shadow mb-6">
          <input
            type="text"
            placeholder="What’s on your mind?"
            className="w-full p-3 border rounded mb-4"
          />
          <div className="flex justify-end gap-4">
            <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">📁 Add Image</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Post</button>
          </div>
        </section>
        <section className="space-y-4">
          <div className="bg-white p-6 rounded shadow">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-2xl">🧑</span>
              <div>
                <strong>Amat.</strong>
                <div className="text-sm text-gray-500">2h ago</div>
              </div>
            </div>
            <p>Excited to try this new app 🚀</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-2xl">🧑‍💻</span>
              <div>
                <strong>Ucup!</strong>
                <div className="text-sm text-gray-500">5h ago</div>
              </div>
            </div>
            <p>Working on a cool new project 🔧</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home