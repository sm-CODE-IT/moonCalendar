import { Parallax } from 'react-parallax'

const ImageTwo = () => (
  <Parallax
    className="image"
    bgImage={process.env.PUBLIC_URL + '/assets/original_light.png'}
    strength={800}
  ></Parallax>
)

export default ImageTwo
