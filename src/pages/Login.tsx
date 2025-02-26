import React from 'react'

interface LoginProps {
  language: string
}

const translations = {
  English: {
    login: 'Login',
    email: 'Email',
    password: 'Password',
    enterEmail: 'Enter your email',
    enterPassword: 'Enter your password',
    register: 'Register',
  },
  中文: {
    login: '登录',
    email: '邮箱',
    password: '密码',
    enterEmail: '请输入您的邮箱',
    enterPassword: '请输入您的密码',
    register: '注册',
  },
}

export const Login: React.FC<LoginProps> = ({ language }) => {
  const t = translations[language] || translations['中文']

  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">{t.login}</h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {t.email}
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder={t.enterEmail}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {t.password}
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder={t.enterPassword}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            {t.login}
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800"
            href="/register"
          >
            {t.register}
          </a>
        </div>
      </form>
    </div>
  )
}
