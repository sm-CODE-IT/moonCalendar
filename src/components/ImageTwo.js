import { Parallax } from 'react-parallax'
import './../css/Home.css'
const ImageTwo = () => (
  <Parallax
    className="image"
    bgImage={process.env.PUBLIC_URL + '/assets/earth.jpg'}
    strength={800}
  >
    <div className="content">
      <span className="img-txt">MoonCalendar</span>
    </div>
  </Parallax>
)

export default ImageTwo
