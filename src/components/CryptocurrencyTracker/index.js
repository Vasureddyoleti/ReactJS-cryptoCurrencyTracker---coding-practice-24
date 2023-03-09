// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {CryptocurrencyData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(eachCrypto => ({
      id: eachCrypto.id,
      currencyName: eachCrypto.currency_name,
      usdValue: eachCrypto.usd_value,
      euroValue: eachCrypto.euro_value,
      currencyLogo: eachCrypto.currency_logo,
    }))

    this.setState({CryptocurrencyData: formattedData, isLoading: false})
  }

  render() {
    const {isLoading, CryptocurrencyData} = this.state

    return (
      <div className="app-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList cryptoDataDetails={CryptocurrencyData} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
