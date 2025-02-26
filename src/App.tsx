import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Products } from './pages/Products'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Logo } from './components/Logo'

function App() {
  const [language, setLanguage] = useState('中文')

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage)
  }

  return (
    <Router>
      <div className="bg-gray-50 min-h-screen font-sans">
        <header className="bg-white shadow-md">
          <div className="container mx-auto py-4 px-5 flex items-center justify-between">
            <Link to="/" className="flex items-center text-2xl font-semibold">
              <Logo className="h-8 w-8 mr-2 text-green-500" />
              HA Health
            </Link>
            <nav className="flex items-center">
              <ul className="flex space-x-6">
                <li>
                  <Link
                    to="/"
                    className="hover:text-gray-500"
                    style={{
                      fontWeight: language === 'English' ? 'bold' : 'normal',
                    }}
                  >
                    {language === 'English' ? 'Home' : '首页'}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-gray-500"
                    style={{
                      fontWeight: language === 'English' ? 'bold' : 'normal',
                    }}
                  >
                    {language === 'English' ? 'About Us' : '关于我们'}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="hover:text-gray-500"
                    style={{
                      fontWeight: language === 'English' ? 'bold' : 'normal',
                    }}
                  >
                    {language === 'English' ? 'Products' : '产品'}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="hover:text-gray-500"
                    style={{
                      fontWeight: language === 'English' ? 'bold' : 'normal',
                    }}
                  >
                    {language === 'English' ? 'Login' : '登录'}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="hover:text-gray-500"
                    style={{
                      fontWeight: language === 'English' ? 'bold' : 'normal',
                    }}
                  >
                    {language === 'English' ? 'Register' : '注册'}
                  </Link>
                </li>
              </ul>
              <div className="ml-6 relative">
                <button
                  className="text-gray-700 hover:text-gray-900 focus:outline-none"
                  onClick={() => {
                    const select = document.getElementById('language-select')
                    if (select) {
                      select.style.display =
                        select.style.display === 'block' ? 'none' : 'block'
                    }
                  }}
                >
                  Language: {language}
                </button>
                <select
                  id="language-select"
                  className="absolute right-0 mt-2 w-24 bg-white border border-gray-300 rounded-md shadow-lg focus:outline-none"
                  style={{ display: 'none' }}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                >
                  <option value="中文">中文</option>
                  <option value="English">English</option>
                </select>
              </div>
            </nav>
          </div>
        </header>

        <main className="container mx-auto py-10 px-5">
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/about" element={<About language={language} />} />
            <Route path="/products" element={<Products language={language} />} />
            <Route path="/login" element={<Login language={language} />} />
            <Route path="/register" element={<Register language={language} />} />
          </Routes>
        </main>

        <footer className="bg-gray-100 py-6 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} HA Health. All rights reserved.
          </p>
        </footer>
      </div>
    </Router>
  )
}

export default App
