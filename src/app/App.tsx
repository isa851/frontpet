import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/home/HomePage"
import Header from "../widgets/header/Header"
import Footer from "../widgets/footer/Footer"
import GalleryPage from "../pages/gallery/GalleryPage"
import NewsPage from "../pages/news/NewsPage"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App