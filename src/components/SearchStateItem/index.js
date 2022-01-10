import {Link} from 'react-router-dom'
import './index.css'

const SearchStateItem = props => {
  const {searchstateData} = props
  const {stateCode} = searchstateData
  return (
    <Link to={`/state/${stateCode}`} className="styleLink">
      <li className="eachsearchContainer">
        <p className="eachsearchInput">{stateCode}</p>
        <div className="codeCon">
          <p className="code">{stateCode}</p>
          <img
            src="https://res.cloudinary.com/dlmaxnvuf/image/upload/v1641733890/Shape_gcmxk2.png"
            alt="arrow"
            className="arrows"
          />
        </div>
      </li>
    </Link>
  )
}
export default SearchStateItem
