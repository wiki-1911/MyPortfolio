import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import WhatIDo from "./pages/WhatIDo";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Java1 from "./pages/posts/Java1.jsx";
import Java2 from "./pages/posts/Java2.jsx";
import Java3 from "./pages/posts/Java3.jsx";
import JavaScript1 from "./pages/posts/JavaScript1.jsx";
import JavaScript2 from "./pages/posts/JavaScript2.jsx";
import JavaScript3 from "./pages/posts/JavaScript3.jsx";
import JavaScript4 from "./pages/posts/JavaScript4.jsx";
import JavaScript5 from "./pages/posts/JavaScript5.jsx";
import JavaScript6 from "./pages/posts/JavaScript6.jsx";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
        <Navbar />
        <main className="flex-grow px-4 md:px-16 py-8">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/whatido" element={<WhatIDo />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/posts/java1" element={<Java1 />} />
            <Route path="/posts/java2" element={<Java2 />} />
            <Route path="/posts/java3" element={<Java3 />} />
            <Route path="/posts/javascript1" element={<JavaScript1 />} />
            <Route path="/posts/javascript2" element={<JavaScript2 />} />
            <Route path="/posts/javascript3" element={<JavaScript3 />} />
            <Route path="/posts/javascript4" element={<JavaScript4 />} />
            <Route path="/posts/javascript5" element={<JavaScript5 />} />
            <Route path="/posts/javascript6" element={<JavaScript6 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
