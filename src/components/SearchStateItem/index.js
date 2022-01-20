import {Link} from 'react-router-dom'
import {BiChevronRightSquare} from 'react-icons/bi'
import './index.css'

const SearchStateItem = props => {
  const {searchstateData} = props
  const {stateCode, stateName} = searchstateData
  return (
    <Link to={`/state/${stateCode}`} className="styleLink">
      <li className="eachsearchContainer">
        <p className="eachsearchInput">{stateName}</p>
        <div className="codeCon">
          <p className="code">{stateCode}</p>

          <BiChevronRightSquare className="arrows" />
        </div>
      </li>
    </Link>
  )
}
export default SearchStateItem
