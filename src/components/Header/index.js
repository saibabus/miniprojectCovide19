import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = props => {
  console.log(props)
  return (
    <nav className="navBar">
      <ul className="navItems">
        <Link to="/" className="styleLink">
          <li className="navoptions">
            <h1 className="navHeading">
              COVID19<span className="sapnastyle">INDIA</span>
            </h1>
          </li>
        </Link>
        <div className="optionsCon">
          <Link to="/" className="styleLink">
            <li className="navoptions">
              <p className="navHome">Home</p>
            </li>
          </Link>
          <Link to="/about" className="styleLink">
            <li className="navoptions">
              <p className="navAbout">About</p>
            </li>
          </Link>
        </div>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
