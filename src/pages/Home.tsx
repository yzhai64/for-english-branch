import React from 'react'

interface HomeProps {
  language: string
}

export const Home: React.FC<HomeProps> = ({ language }) => {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://raw.githubusercontent.com/ricklove/scratch/main/望天树.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <section className="hero bg-white bg-opacity-75 py-12 rounded-lg shadow-md">
        <div className="container mx-auto px-5">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {language === 'English' ? 'Welcome to HA Health' : '欢迎来到 HA Health'}
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            {language === 'English'
              ? 'We are committed to providing you with the highest quality health products and services.'
              : '我们致力于为您提供最优质的健康产品和服务。'}
          </p>
          <a
            href="/products"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            {language === 'English' ? 'View Our Products' : '查看我们的产品'}
          </a>
        </div>
      </section>

      <section className="featured-products mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-5">
          {language === 'English' ? 'Featured Products' : '特色产品'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="product-card bg-cover bg-center rounded-lg p-4"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1505751172876-fa1923c5c522?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoeSUyMHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")',
            }}
          >
            <div className="bg-white bg-opacity-75 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {language === 'English' ? 'Product Name 1' : '产品名称 1'}
              </h3>
              <p className="text-gray-500">
                {language === 'English' ? 'Product Description 1' : '产品描述 1'}
              </p>
            </div>
          </div>

          <div
            className="product-card bg-cover bg-center rounded-lg p-4"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1563189035-9f18ca9713ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGVhbHRoeSUyMHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")',
            }}
          >
            <div className="bg-white bg-opacity-75 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {language === 'English' ? 'Product Name 2' : '产品名称 2'}
              </h3>
              <p className="text-gray-500">
                {language === 'English' ? 'Product Description 2' : '产品描述 2'}
              </p>
            </div>
          </div>

          <div
            className="product-card bg-cover bg-center rounded-lg p-4"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1585405566802-1c10d7918368?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWx0aHklMjBwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")',
            }}
          >
            <div className="bg-white bg-opacity-75 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {language === 'English' ? 'Product Name 3' : '产品名称 3'}
              </h3>
              <p className="text-gray-500">
                {language === 'English' ? 'Product Description 3' : '产品描述 3'}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center text-gray-600">
        当前语言: {language}
      </div>
    </div>
  )
}
