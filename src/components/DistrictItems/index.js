import './index.css'

const DistrictItems = props => {
  const {districtdatadetails} = props
  const {nameis, countis} = districtdatadetails
  return (
    <li className="districtCont">
      <p className="districtcountis">{countis}</p>
      <p className="districtName">{nameis}</p>
    </li>
  )
}
export default DistrictItems
