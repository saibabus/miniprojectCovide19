import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Footer from '../Footer'
import CovidError from '../CovidError'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class About extends Component {
  state = {apiStatus: apiStatusConstants.initial, faqData: [], factoidsData: []}

  componentDidMount() {
    this.getFaqsData()
  }

  getFaqsData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/covid19-faqs'
    const response = await fetch(url)

    // console.log(response)
    if (response.ok) {
      const data = await response.json()

      const fetchfactoidsData = data.factoids
      const fetchfaqData = data.faq
      // console.log(fetchfactoidsData)
      // console.log(fetchfaqData)
      this.setState({
        faqData: fetchfaqData,
        apiStatus: apiStatusConstants.success,
        factoidsData: fetchfactoidsData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoaingView = () => (
    <div testid="aboutRouteLoader" className="aboutRouteLoader">
      <Loader type="Oval" height={50} width={50} color="#007BFF" />
    </div>
  )

  renderSuccessView = () => {
    const {faqData, factoidsData} = this.state

    return (
      <div className="aboutSuccessCon">
        <h1 className="aboutHeading">About</h1>
        <p className="aboutPara">Last update on march 28th 2021.</p>

        <h1 className="aboutsubHeading">
          COVID-19 vaccines be ready for distribution
        </h1>
        <ul className="factoidsdataCon" testid="faqsUnorderedList">
          {faqData.map(eachone => (
            <li className="eachFaqsCon" key={eachone.qno}>
              <p className="question">{`${eachone.qno}. ${eachone.question}`}</p>
              <p className="answer">{eachone.answer}</p>
            </li>
          ))}
        </ul>
        <ul className="factoidsdataCon">
          {factoidsData.map(eachone => (
            <li className="eachFaqsCon" key={eachone.id}>
              <p className="factoids">{eachone.banner}</p>
            </li>
          ))}
        </ul>
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
      <div className="aboutContainer">
        <Header />
        {this.renderapiStausViews()}
      </div>
    )
  }
}
export default About
