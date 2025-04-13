import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import ShowFollowerAndFollowing from "./components/ShowFollowerAndFollowing"

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:text/:username" element={<ShowFollowerAndFollowing />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
