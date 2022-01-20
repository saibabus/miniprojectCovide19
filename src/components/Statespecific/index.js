import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CovidError from '../CovidError'
import DistrictItems from '../DistrictItems'
import CovidSelectCard from '../CovidSelectCard'
import Header from '../Header'
import BarDataOfState from '../BarDataOfState'
import LineChartsOfCovid from '../LineChartsOfCovid'

import './index.css'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

let codeis = ''
const resultsListdistrict = []
const showdistrictdata = []
class Statespecific extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    statedataAll: [],
    cardSelect: 'Confirmed',

    topdistrics: [],
  }

  componentDidMount() {
    this.getstateData()
  }

  getstateData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    // console.log(this.props)
    const {cardSelect} = this.state
    const {match} = this.props
    codeis = match.params.stateCode

    // console.log(codeis)
    const url = `https://apis.ccbp.in/covid19-timelines-data/${codeis}`
    //  const url = 'https://apis.ccbp.in/covid19-timelines-data'

    const response = await fetch(url)
    //  console.log(response)
    const data = await response.json()

    if (response.ok === true && data.error_msg !== 'Invalid State Code') {
      // console.log(data)
      const eachDateDataDetails = []
      const updateddata = data[codeis].dates
      const districsdatais = data[codeis].districts
      const disKeyName = Object.keys(districsdatais)
      //  console.log(districsdatais)
      //  console.log(updateddata)
      const keyNames = Object.keys(updateddata)
      // const keylength = keyNames.length

      disKeyName.forEach(disname => {
        if (districsdatais[disname]) {
          const datesdatais = districsdatais[disname].dates
          const districtsNameis = disname

          // console.log(districtsNameis)
          // console.log(datesdatais)

          const datekeysof = Object.keys(datesdatais)
          const lengthof = datekeysof.length

          //  console.log(lengthof)
          if (datekeysof.length !== 0) {
            const maindatais = datesdatais[datekeysof[lengthof - 1]]
            const {total} = maindatais
            const countofConfirm = total.confirmed ? total.confirmed : 0
            const countofDeceased = total.deceased ? total.deceased : 0
            const countofRecovered = total.recovered ? total.recovered : 0
            const countofActive =
              countofConfirm - (countofRecovered + countofDeceased)
            resultsListdistrict.push({
              name: districtsNameis,
              Active: countofActive,
              Confirmed: countofConfirm,
              Deceased: countofDeceased,
              Recovered: countofRecovered,
            })
          }
        }
      })
      //  console.log(resultsListdistrict)
      // console.log(disKeyName)
      keyNames.forEach(keyname => {
        if (updateddata[keyname]) {
          const {total, delta7} = updateddata[keyname]
          const Confirmed = total.confirmed ? total.confirmed : 0
          const Recovered = total.recovered ? total.recovered : 0
          const Deceased = total.deceased ? total.deceased : 0
          const tested = total.tested ? total.tested : 0
          const Active = Confirmed - (Recovered + Deceased)
          const lineconfirmed = delta7.confirmed ? delta7.confirmed : 0
          const linerecovered = delta7.recovered ? delta7.recovered : 0
          const linedeceased = delta7.deceased ? delta7.deceased : 0
          const linetested = delta7.tested ? delta7.tested : 0
          let lineactive = lineconfirmed - (linerecovered + linedeceased)
          if (lineactive < 0) {
            lineactive = 0
          }
          eachDateDataDetails.push({
            date: keyname,
            Confirmed,
            Recovered,
            Deceased,
            tested,
            Active,
            lineactive,
            lineconfirmed,
            linedeceased,
            linerecovered,
            linetested,
          })
        }
      })

      resultsListdistrict.forEach(eachoneis => {
        if (eachoneis[cardSelect] || eachoneis[cardSelect] === 0) {
          showdistrictdata.push({
            countis: eachoneis[cardSelect],
            nameis: eachoneis.name,
          })
        }
      })

      // console.log(updateddata)
      // console.log(districsdatais)

      this.setState({
        apiStatus: apiStatusConstants.success,
        statedataAll: eachDateDataDetails,
        topdistrics: showdistrictdata,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  activeCard = caseis => {
    this.setState({cardSelect: caseis})
  }

  renderSuccessView = () => {
    const {statedataAll, topdistrics, cardSelect} = this.state
    // const dateofLength = statedataAll.length

    // console.log(statedataAll)
    // console.log(districsData)

    //  const districtCounts = showdistrictdata.some(eachis => eachis.countis !== 0)
    //  console.log(showdistrictdata)

    topdistrics.sort((a, b) => b.countis - a.countis)
    // console.log(showdistrictdata)

    const nameofState = statesList.find(
      eachoneis => eachoneis.state_code === codeis,
    ).state_name
    //  console.log(codeis)
    //  console.log(nameofState)

    const stateCardDetails = [
      {
        testId: 'stateSpecificConfirmedCasesContainer',
        imgSm: 'saibabu',
        imgLg:
          'https://res.cloudinary.com/dlmaxnvuf/image/upload/v1641557126/check-mark_1-7_buoycu.png',
        altText: 'state specific confirmed cases pic',
        caseis: 'Confirmed',
        count: statedataAll[0].Confirmed,
      },
      {
        testId: 'stateSpecificActiveCasesContainer',
        imgSm: 'saibabu',
        imgLg:
          'https://res.cloudinary.com/dlmaxnvuf/image/upload/v1641557295/protection_1-3_zhjqeg.png',
        altText: 'state specific active cases pic',
        caseis: 'Active',
        count: statedataAll[0].Active,
      },
      {
        testId: 'stateSpecificRecoveredCasesContainer',
        imgSm: 'saibabu',
        imgLg:
          'https://res.cloudinary.com/dlmaxnvuf/image/upload/v1641557295/recovered_1-3_ovlq1d.png',
        altText: 'state specific recovered cases pic',
        caseis: 'Recovered',
        count: statedataAll[0].Recovered,
      },
      {
        testId: 'stateSpecificDeceasedCasesContainer',
        imgSm: 'saibabu',
        imgLg:
          'https://res.cloudinary.com/dlmaxnvuf/image/upload/v1641557194/breathing_1-3_w0wthz.png',
        altText: 'state specific deceased cases pic',
        caseis: 'Deceased',
        count: statedataAll[0].Deceased,
      },
    ]

    return (
      <div className="sateSuccessCon" testid="timelinesDataLoader">
        <div className="nameandTestedcountContainer">
          <div className="nameContainer">
            <h1 className="stateNameheading">{nameofState}</h1>
          </div>
          <div className="testedCountContainer">
            <p className="textedText">Tested</p>
            <p className="textedCount">{statedataAll[0].tested}</p>
          </div>
        </div>
        <p className="updateText">Last update on march 28th 2021.</p>

        <ul className="stateSelectcontainer">
          {stateCardDetails.map(eachone => (
            <CovidSelectCard
              covidselects={eachone}
              key={eachone.testId}
              activeCard={this.activeCard}
              isActive={cardSelect === eachone.caseis}
            />
          ))}
        </ul>
        <h1 className={`topdistrictText n${cardSelect}`}>Top Districts</h1>

        <ul className="stateDistrictsContainer">
          {topdistrics.map(eachis => (
            <DistrictItems
              key={`${eachis.nameis}1`}
              districtdatadetails={eachis}
            />
          ))}
        </ul>

        <BarDataOfState statedataAll={statedataAll} cardSelect={cardSelect} />

        <h1 className="textofDailySpreads">Daily Spread Trends</h1>
        <LineChartsOfCovid statedataAll={statedataAll} />
      </div>
    )
  }

  renderLoaingView = () => (
    <div testid="stateDetailsLoader" className="stateRouteLoader">
      <Loader type="Oval" height={50} width={50} color="#007BFF" />
    </div>
  )

  renderFailureView = () => <CovidError />

  renderapiStausViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="stateContainer">
        <Header />
        {this.renderapiStausViews()}
      </div>
    )
  }
}
export default Statespecific
