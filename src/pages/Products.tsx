import React from 'react'

interface ProductsProps {
  language: string
}

const translations = {
  English: {
    products: 'Products',
    productName1: 'Product Name 1',
    productDescription1: 'Product Description 1',
    productName2: 'Product Name 2',
    productDescription2: 'Product Description 2',
    productName3: 'Product Name 3',
    productDescription3: 'Product Description 3',
  },
  中文: {
    products: '产品',
    productName1: '产品名称 1',
    productDescription1: '产品描述 1',
    productName2: '产品名称 2',
    productDescription2: '产品描述 2',
    productName3: '产品名称 3',
    productDescription3: '产品描述 3',
  },
}

export const Products: React.FC<ProductsProps> = ({ language }) => {
  const t = translations[language] || translations['中文']

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">{t.products}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="product-card bg-gray-50 rounded-lg p-4">
          <img
            src="https://images.unsplash.com/photo-1505751172876-fa1923c5c522?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoeSUyMHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Product 1"
            className="w-full h-48 object-cover rounded-md mb-3"
          />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">{t.productName1}</h3>
          <p className="text-gray-500">{t.productDescription1}</p>
        </div>

        <div className="product-card bg-gray-50 rounded-lg p-4">
          <img
            src="https://images.unsplash.com/photo-1563189035-9f18ca9713ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGVhbHRoeSUyMHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Product 2"
            className="w-full h-48 object-cover rounded-md mb-3"
          />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">{t.productName2}</h3>
          <p className="text-gray-500">{t.productDescription2}</p>
        </div>

        <div className="product-card bg-gray-50 rounded-lg p-4">
          <img
            src="https://images.unsplash.com/photo-1585405566802-1c10d7918368?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWx0aHklMjBwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Product 3"
            className="w-full h-48 object-cover rounded-md mb-3"
          />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">{t.productName3}</h3>
          <p className="text-gray-500">{t.productDescription3}</p>
        </div>
      </div>
    </div>
  )
}
