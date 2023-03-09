// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {itemDetails} = props
  const {currencyName, currencyLogo, usdValue, euroValue} = itemDetails

  return (
    <li className="list-element-container">
      <div className="logo-name-container">
        <img className="logo" src={currencyLogo} alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="value-container">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
