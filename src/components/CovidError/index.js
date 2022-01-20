import {Link} from 'react-router-dom'
import './index.css'

const CovidError = () => (
  <div className="covidErrorContainer">
    <img
      src="https://res.cloudinary.com/dlmaxnvuf/image/upload/v1641648614/Group_7484_ht5s5w.png"
      alt="not-found-pic"
      className="errorImage"
    />
    <h1 className="errorHeading"> PAGE NOT FOUND</h1>
    <p className="errorPara">
      we are sorry, the page you requested could not be found
    </p>
    <p className="errorPara">Please go back to the homepage</p>
    <Link to="/" className="linkstyle">
      <button type="button" className="homeButton">
        Home
      </button>
    </Link>
  </div>
)
export default CovidError
