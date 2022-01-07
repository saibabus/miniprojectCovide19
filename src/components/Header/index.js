import './index.css'

export default function Header() {
  return (
    <nav className="navBar">
      <ul className="navItems">
        <li className="navoptions">
          <h1 className="navHeading">
            COVID19<span className="sapnastyle">INDIA</span>
          </h1>
        </li>
        <div className="optionsCon">
          <li className="navoptions">
            <p className="navHome">Home</p>
          </li>
          <li className="navoptions">
            <p className="navAbout">About</p>
          </li>
        </div>
      </ul>
    </nav>
  )
}
