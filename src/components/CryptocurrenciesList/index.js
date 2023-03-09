// Write your JS code here
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

const CryptocurrenciesList = props => {
  const {cryptoDataDetails} = props

  return (
    <div className="list-container">
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
      />
      <ul className="unorder-list-cont">
        <div className="heading-container">
          <p className="coin-type-heading">Coin Type</p>
          <div className="usd-euro-heading-container">
            <p className="usd-heading">USD</p>
            <p className="euro-heading">EURO</p>
          </div>
        </div>
        {cryptoDataDetails.map(eachItem => (
          <CryptocurrencyItem key={eachItem.id} itemDetails={eachItem} />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList
