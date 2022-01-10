import {Component} from 'react'

import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import {FcGenericSortingAsc, FcGenericSortingDesc} from 'react-icons/fc'
import StateWidecovidDataTable from '../StateWidecovidDataTable'
import CovidSelectCard from '../CovidSelectCard'
import Footer from '../Footer'
import Header from '../Header'
import CovidError from '../CovidError'
import SearchStateItem from '../SearchStateItem'
import './index.css'

let dataOrderis = []
const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

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

class Home extends Component {
  state = {
    allstatesData: [],
    selectedCard: 'Confirmed',
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.getStatesData()
  }

  getStatesData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const resultslist = []
    const options = {
      method: 'GET',
    }
    const url = 'https://apis.ccbp.in/covid19-state-wise-data'
    const response = await fetch(url, options)

    // console.log(response)

    if (response.ok) {
      const data = await response.json()
      // console.log(data)
      const keyNames = Object.keys(data)

      keyNames.forEach(keyName => {
        if (data[keyName]) {
          const {total, meta} = data[keyName]
          const confirmed = total.confirmed ? total.confirmed : 0
          const deceased = total.deceased ? total.deceased : 0
          const recovered = total.recovered ? total.recovered : 0
          const tested = total.tested ? total.tested : 0
          const population = meta.population ? meta.population : 0
          const stateCode = keyName

          // const name = statesList.find(state => state.state_code === keyName)
          //  .state_name
          // console.log(name)
          // console.log(statesList)

          const updated = {
            stateCode,
            confirmed,
            deceased,
            tested,
            population,
            recovered,
            active: confirmed - (deceased + recovered),
          }
          resultslist.push(updated)
        }
      })
      dataOrderis = resultslist
      // console.log(resultslist)
      this.setState({
        allstatesData: resultslist,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoaingView = () => (
    <div testid="homeRouteLoader" className="homeRouteLoader">
      <Loader type="Oval" height={50} width={50} color="#007BFF" />
    </div>
  )

  activeCard = caseis => {
    this.setState({selectedCard: caseis})
  }

  ascendingOrder = () => {
    this.setState({allstatesData: dataOrderis})
  }

  descendingOrder = () => {
    const datadescOrdr = dataOrderis.slice().reverse()
    this.setState({allstatesData: datadescOrdr})
  }

  changeSearchInput = event => {
    // console.log(event.target.value)
    this.setState({searchInput: event.target.value})
  }

  renderSuccessView = () => {
    const {allstatesData, selectedCard, searchInput} = this.state
    const countryCardDetails = [
      {
        testId: 'countryWideConfirmedCases',
        imgSm: 'saibabu',
        imgLg:
          'https://res.cloudinary.com/dlmaxnvuf/image/upload/v1641557126/check-mark_1-7_buoycu.png',
        altText: 'country wide confirmed cases pic',
        caseis: 'Confirmed',
        count: allstatesData
          .map(eachstate => eachstate.confirmed)
          .reduce((a, b) => a + b),
      },
      {
        testId: 'countryWideActiveCases',
        imgSm: 'saibabu',
        imgLg:
          'https://res.cloudinary.com/dlmaxnvuf/image/upload/v1641557295/protection_1-3_zhjqeg.png',
        altText: 'country wide active cases pic',
        caseis: 'Active',
        count: allstatesData
          .map(eachstate => eachstate.active)
          .reduce((a, b) => a + b),
      },
      {
        testId: 'countryWideRecoveredCases',
        imgSm: 'saibabu',
        imgLg:
          'https://res.cloudinary.com/dlmaxnvuf/image/upload/v1641557295/recovered_1-3_ovlq1d.png',
        altText: 'country wide recovered cases pic',
        caseis: 'Recovered',
        count: allstatesData
          .map(eachstate => eachstate.recovered)
          .reduce((a, b) => a + b),
      },
      {
        testId: 'countryWideDeceasedCases',
        imgSm: 'saibabu',
        imgLg:
          'https://res.cloudinary.com/dlmaxnvuf/image/upload/v1641557194/breathing_1-3_w0wthz.png',
        altText: 'country wide deceased cases pic',
        caseis: 'Deceased',
        count: allstatesData
          .map(eachstate => eachstate.deceased)
          .reduce((a, b) => a + b),
      },
    ]

    // console.log(countryCardDetails)

    const searchStateItems = allstatesData.filter(eachone =>
      eachone.stateCode.toUpperCase().includes(searchInput.toUpperCase()),
    )
    // console.log(searchStateItems)
    const showsContentdata =
      searchStateItems.length !== allstatesData.length &&
      searchStateItems.length !== 0

    // console.log(showsContentdata)
    return (
      <div className="homeSuccessCon">
        <div className="searchContainer">
          <BsSearch className="searchIcon" />
          <input
            type="search"
            placeholder="Enter the State"
            className="searchInput"
            value={searchInput}
            onChange={this.changeSearchInput}
          />
        </div>
        {showsContentdata ? (
          <ul className="searchDataCon">
            {searchStateItems.map(eachstate => (
              <SearchStateItem
                key={eachstate.stateCode}
                searchstateData={eachstate}
              />
            ))}
          </ul>
        ) : (
          <>
            <ul className="covidSelectcontainer">
              {countryCardDetails.map(eachone => (
                <CovidSelectCard
                  covidselects={eachone}
                  key={eachone.testId}
                  activeCard={this.activeCard}
                  isActive={selectedCard === eachone.caseis}
                />
              ))}
            </ul>
            <div className="tablewrap">
              <ul
                testid="stateWiseCovidDataTable"
                className="stateWiseCovidDataTable"
              >
                <li className="stateWiseCovidDataTableHeading">
                  <h1 className="stateWiseCovidDataTableHeadingOptionsPri">
                    State/UT
                    <button
                      type="button"
                      className="buttonOrder"
                      testid="ascendingSort"
                      onClick={this.ascendingOrder}
                    >
                      <FcGenericSortingAsc className="orderIcon" />
                    </button>
                    <button
                      type="button"
                      className="buttonOrder"
                      testid="descendingSort"
                      onClick={this.descendingOrder}
                    >
                      <FcGenericSortingDesc className="orderIcon" />
                    </button>
                  </h1>
                  <h1 className="stateWiseCovidDataTableHeadingOptions">
                    Confirmed
                  </h1>
                  <h1 className="stateWiseCovidDataTableHeadingOptions">
                    Active
                  </h1>
                  <h1 className="stateWiseCovidDataTableHeadingOptions">
                    Recovered
                  </h1>
                  <h1 className="stateWiseCovidDataTableHeadingOptions">
                    Deceased
                  </h1>
                  <h1 className="stateWiseCovidDataTableHeadingOptions">
                    Population
                  </h1>
                </li>

                <hr className="linestyle" />
                {allstatesData.map(eachState => (
                  <StateWidecovidDataTable
                    key={eachState.stateCode}
                    eachState={eachState}
                  />
                ))}
              </ul>
            </div>
          </>
        )}

        <Footer />
      </div>
    )
  }

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
      <div className="homeContainer">
        <Header />
        {this.renderapiStausViews()}
      </div>
    )
  }
}
export default Home
