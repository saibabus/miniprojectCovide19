import {Component} from 'react'
import Header from '../Header'

import './index.css'

class StateSpecific extends Component {
  componentDidMount() {
    this.getstateData()
  }

  getstateData = async () => {
    console.log(this.props)
    const {match} = this.props
    const codeis = match.params.stateCode
    //  console.log(codeis)
    const url = `https://apis.ccbp.in/covid19-timelines-data/${codeis}`

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
  }

  render() {
    return (
      <div className="stateContainr">
        <Header />
        <h1>saibabu</h1>
      </div>
    )
  }
}
export default StateSpecific
