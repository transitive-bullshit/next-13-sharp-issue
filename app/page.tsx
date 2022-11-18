import lqip from 'lqip-modern'
import Image from 'next/image'

const imageUrl =
  'https://plus.unsplash.com/premium_photo-1661508614319-b5e40d1143bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80'

export default async function HomePage() {
  const res = await fetch(imageUrl)
  const image = Buffer.from(await res.arrayBuffer())
  const { metadata: previewImage } = await lqip(image)
  console.log(previewImage)

  return (
    <div>
      <h1>Image</h1>

      <Image
        src={imageUrl}
        width={previewImage.originalWidth}
        height={previewImage.originalHeight}
        placeholder='blur'
        blurDataURL={previewImage.dataURIBase64}
        alt='Example blurred image'
        style={{
          maxWidth: 1000,
          height: 'auto'
        }}
      />
    </div>
  )
}
