import { Parallax } from 'react-parallax'

const ImageOne = () => (
  <div className="ImageOne">
    <Parallax
      className="image"
      bgImage={process.env.PUBLIC_URL + '/assets/original_dark.png'}
      strength={800}
    >
      <div clasName="content">
        <span className='"img-txt'>moonCalendar</span>
      </div>
    </Parallax>
  </div>
)

export default ImageOne
