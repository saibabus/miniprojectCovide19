import './index.css'

const StateWidecovidDataTable = props => {
  const {eachState} = props
  const {
    stateCode,
    confirmed,
    recovered,
    deceased,
    population,
    active,
  } = eachState
  return (
    <li className="eachstateWiseCovidDataTableHeading">
      <h1 className="eachstateWiseCovidDataTableHeadingOptionsPri name">
        {stateCode}
      </h1>
      <h1 className="eachstateWiseCovidDataTableHeadingOptions confirmed">
        {confirmed}
      </h1>
      <h1 className="eachstateWiseCovidDataTableHeadingOptions active">
        {active}
      </h1>

      <h1 className="eachstateWiseCovidDataTableHeadingOptions recovered">
        {recovered}
      </h1>

      <h1 className="eachstateWiseCovidDataTableHeadingOptions deceased">
        {deceased}
      </h1>

      <h1 className="eachstateWiseCovidDataTableHeadingOptions population">
        {population}
      </h1>
    </li>
  )
}
export default StateWidecovidDataTable
