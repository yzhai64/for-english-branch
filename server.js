import React from 'react'

interface RegisterProps {
  language: string
}

export const Register: React.FC<RegisterProps> = ({ language }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        {language === 'English' ? 'Register' : '注册'}
      </h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {language === 'English' ? 'Name' : '姓名'}
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder={language === 'English' ? 'Enter your name' : '请输入您的姓名'}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {language === 'English' ? 'Email' : '邮箱'}
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder={language === 'English' ? 'Enter your email' : '请输入您的邮箱'}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {language === 'English' ? 'Password' : '密码'}
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder={language === 'English' ? 'Enter your password' : '请输入您的密码'}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            {language === 'English' ? 'Register' : '注册'}
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800"
            href="/login"
          >
            {language === 'English' ? 'Login' : '登录'}
          </a>
        </div>
      </form>
    </div>
  )
}
