import { useEffect, useState } from 'react'
import { getcatImg } from '../services/facts'

export function useCatimage ({ fact }) {
  const [imageUrl, setimageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const TreeFirstWord = fact.split(' ').slice(0, 3).join(' ')
    getcatImg(TreeFirstWord).then(url => setimageUrl(url))
  }, [fact])

  return { imageUrl }
} // retorna { imageUrl: 'https://...' }
