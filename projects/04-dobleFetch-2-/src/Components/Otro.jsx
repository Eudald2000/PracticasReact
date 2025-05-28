import { useCatimage } from '../hooks/useCatimage'

export function Otro () {
  const { imageUrl } = useCatimage({ fact: 'A cat\'s field' })
  // console.log(imageUrl)

  return (
    <>
      {imageUrl && <img src={imageUrl} />}
    </>
  )
}
