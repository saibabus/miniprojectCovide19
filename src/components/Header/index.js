import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = props => {
  // console.log(props)
  const {match} = props
  const {path} = match
  // console.log(path)
  const navitemHome = `${path}` === '/' ? 'navHome' : 'navAbout'
  const navitemAbout = `${path}` === '/about' ? 'navHome' : 'navAbout'
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
              <p className={navitemHome}>Home</p>
            </li>
          </Link>
          <Link to="/about" className="styleLink">
            <li className="navoptions">
              <p className={navitemAbout}>About</p>
            </li>
          </Link>
        </div>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
