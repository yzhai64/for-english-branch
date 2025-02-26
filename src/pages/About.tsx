import React from 'react'

interface AboutProps {
  language: string
}

const translations = {
  English: {
    aboutUs: 'About Us',
    description1:
      'HA Health is committed to providing you with the highest quality health products and services. Our goal is to help you improve your quality of life and enjoy a healthier life.',
    description2:
      'We partner with leading health product suppliers worldwide to ensure our products are of the highest quality, safe and reliable.',
    description3:
      'Thank you for choosing HA Health, we look forward to embarking on the road to health with you.',
  },
  中文: {
    aboutUs: '关于我们',
    description1:
      'HA Health 致力于为您提供最优质的健康产品和服务。我们的目标是帮助您改善生活质量，享受更健康的生活。',
    description2:
      '我们与全球领先的健康产品供应商合作，确保我们的产品质量卓越，安全可靠。',
    description3: '感谢您选择 HA Health，我们期待与您一同迈向健康之路。',
  },
}

export const About: React.FC<AboutProps> = ({ language }) => {
  const t = translations[language] || translations['中文']

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">{t.aboutUs}</h2>
      <p className="text-gray-700 leading-relaxed mb-4">{t.description1}</p>
      <p className="text-gray-700 leading-relaxed mb-4">{t.description2}</p>
      <p className="text-gray-700 leading-relaxed">{t.description3}</p>
    </div>
  )
}
