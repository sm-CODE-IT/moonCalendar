import { Parallax } from 'react-parallax'
import './../css/Home.css'
const ImageOne = () => (
  <div className="ImageOne">
    <Parallax
      className="image"
      bgImage={process.env.PUBLIC_URL + '/assets/nasa.jpg'}
      strength={800}
    >
      <div className="content">
        <span className="img-txt">MoonCalendar</span>
      </div>
    </Parallax>
  </div>
)

export default ImageOne
