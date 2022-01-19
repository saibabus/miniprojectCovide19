import {Link, withRouter} from 'react-router-dom'
import ShowoptionsContext from '../../context/ShowopionsContext'

import './index.css'

const Header = props => (
  <ShowoptionsContext.Consumer>
    {value => {
      const {showsoptions, changeshowStatus} = value
      // console.log(props)
      const {match} = props
      const {path} = match
      // console.log(path)
      const navitemHome = `${path}` === '/' ? 'navHome' : 'navAbout'
      const navitemAbout = `${path}` === '/about' ? 'navHome' : 'navAbout'
      const hidetheOptions = () => {
        changeshowStatus()
      }

      const showtheOptions = () => {
        changeshowStatus()
      }

      return (
        <>
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
              <button
                type="button"
                className="queueContainer queuebtn"
                onClick={showtheOptions}
              >
                <img
                  src="https://res.cloudinary.com/dlmaxnvuf/image/upload/v1642524553/add-to-queue_1_urx6pg.png"
                  alt="addToQueue"
                />
              </button>
            </ul>
          </nav>
          {showsoptions && (
            <div className="mobileSizeoptionCon">
              <div className="mobileoptionsCon">
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
              <button
                type="button"
                className="canclebtn"
                onClick={hidetheOptions}
              >
                <img
                  src="https://res.cloudinary.com/dlmaxnvuf/image/upload/v1642523988/Solid-1_gfm24s.png"
                  alt="closeCircle"
                />
              </button>
            </div>
          )}
        </>
      )
    }}
  </ShowoptionsContext.Consumer>
)

export default withRouter(Header)
