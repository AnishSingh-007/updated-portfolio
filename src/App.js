
// import React, { useState } from 'react';
// import Sidebar from './components/Sidebar';
// import Navbar from './components/Navbar';
// import About from './components/About';
// import Contact from './components/Contact';
// import Portfolio from './components/Portfolio';
// import Resume from './components/Resume';
// import Blog from './components/Blog';
// import './App.css';

// function App() {
//   const [activePage, setActivePage] = useState('about');

//   const activePageHandler = (active) => {
//     setActivePage(active);
//   };

//   return (
//     <div className="App">
//       <main>
//         <Sidebar />
//         <div className="main-content">
//           <Navbar activePage={activePage} setActivePage={activePageHandler} />
//           {activePage === 'about' && <About />}
//           {activePage === 'resume' && <Resume />}
//           {activePage === 'portfolio' && <Portfolio />}
//           {activePage === 'contact' && <Contact />}
//           {activePage === 'blog' && <Blog />}

//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Blog from './components/Blog';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Sidebar />
          <div className="main-content">
            <Navbar />
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/profile" element={<About />} />
              {/* <Route path="/about" element={<About />} /> */}
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Portfolio />} />
              {/* <Route path="/portfolio" element={<Portfolio />} /> */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
