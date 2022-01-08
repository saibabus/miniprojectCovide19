import {VscGithubAlt} from 'react-icons/vsc'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
import './index.css'

export default function Footer() {
  return (
    <footer className="footerBar">
      <h1 className="footerHeading">
        COVID19<span className="sapnastyle">INDIA</span>
      </h1>
      <p className="footerPara">
        we stand with everyone fighting on the front lines
      </p>
      <div className="iconsContainer">
        <VscGithubAlt className="gitIcon" />
        <FiInstagram className="instIcon" />
        <FaTwitter className="twiIcon" />
      </div>
    </footer>
  )
}
