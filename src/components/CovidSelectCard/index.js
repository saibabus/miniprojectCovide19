import './index.css'

const CovidSelectCard = props => {
  const {covidselects, activeCard, isActive} = props
  const {testId, altText, imgLg, caseis, count} = covidselects

  const onclickCard = () => {
    activeCard(caseis)
  }
  const stylesis = isActive ? `s${caseis}` : `n${caseis}`

  return (
    <li className={`eachcovidselect ${stylesis}`} testid={testId}>
      <button
        type="button"
        className={`button ${stylesis}`}
        onClick={onclickCard}
      >
        <p className="optionstext">{caseis}</p>
        <img src={imgLg} alt={altText} />
        <p className="countis">{count}</p>
      </button>
    </li>
  )
}
export default CovidSelectCard
