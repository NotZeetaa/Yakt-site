import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import YaktLogo from "../public/Images/ic_launcher-playstore.png";
import Home from './pages/Home';
import About from './pages/About';
import './App.css';
import './transitions.css'; // New file for transition styles

function App() {
  return (
    <Router>
      <header className="bg-gray-400 shadow-lg shadow-gray-300 w-full fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            {/* Logo Section */}
            <div className="flex-shrink-0 transition duration-200 shadow-lg shadow-black-600 drop-shadow-2xl transform transition duration-300 ease-in-out hover:scale-110 cursor-pointer">
              <Link to="/">
                <img src={YaktLogo} alt="Project Logo" className="h-10 w-auto rounded-lg" />
              </Link>
            </div>

            {/* Mobile Navigation Hamburger */}
            <div className="md:hidden">
              <button className="text-white hover:text-gray-900 font-medium transform transition duration-300 ease-in-out hover:scale-110 cursor-pointer">
                {/* Hamburger icon for mobile */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Navigation Links with Transitions */}
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/"
                className="text-white hover:text-gray-900 font-medium transform transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-gray-900 font-medium transform transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
              >
                About
              </Link>
              <a
                href="#"
                className="text-white hover:text-gray-900 font-medium transform transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
              >
                Donate
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-900 font-medium transform transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
              >
                GitHub
              </a>
            </nav>

            {/* Custom Get Started Button */}
            <div className="hidden md:flex items-center">
              <a href="https://play.google.com/store/apps/details?id=com.notzeetaa.yakt">
                <button className="cursor-pointer">
                  <div className="flex max-w-48 h-12 px-3 gap-2 rounded-xl items-center justify-center bg-black text-white dark:text-black dark:bg-white sm:h-14 transition duration-200 shadow-lg shadow-black-600 drop-shadow-2xl transform transition duration-300 ease-in-out hover:scale-105 cursor-pointer">
                    <svg viewBox="30 336.7 120.9 129.2" className="w-5 sm:w-7">
                      <path
                        d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                        fill="#FFD400"
                      />
                      <path
                        d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                        fill="#FF3333"
                      />
                      <path
                        d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                        fill="#48FF48"
                      />
                      <path
                        d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                        fill="#3BCCFF"
                      />
                    </svg>
                    <div>
                      <div className="text-[.5rem] sm:text-xs text-left">GET IT ON</div>
                      <div className="text-sm font-semibold font-sans -mt-1 sm:text-xl">Google Play</div>
                    </div>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content with Routes */}
      <main className="pt-32">
        <AnimatedRoutes />
      </main>
    </Router>
  );
}

// Animated Routes Component
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
