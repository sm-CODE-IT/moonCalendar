import { Parallax } from 'react-parallax'

const ImageThree = () => (
  <Parallax
    className="image"
    bgImage={process.env.PUBLIC_URL + '/assets/nasa.jpg'}
    strength={800}
  ></Parallax>
)

export default ImageThree
