import React from 'react'
import { Heart } from 'lucide-react'

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return <Heart className={className} />
}
