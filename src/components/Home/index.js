import {Component} from 'react'
import Loader from "react-loader-spinner"
import Location from '../Item'

import './index.css'

class Home extends Component {
  state = {list: [], isLoading:true}

  componentDidMount() {
    this.getData()
  }
  getData = async () => {
    
    const url = 'https://apis.ccbp.in/tg/packages'
    const method = {
      method: 'GET',
    }
    const response = await fetch(url, method)
    if (response.ok === true) {
      const fetchdata = await response.json()
      const data = fetchdata.packages.map(each => ({
        id: each.id,
        name: each.name,
        image: each.image_url,
        description: each.description,
      }))
      this.setState({list: data,isLoading:false})
    }
  }

  loading = () => (
    <div data-testid="loader">
  <Loader type="TailSpin" color="blue" height={50} width={50} />
   </div>
  )
  render() {
    const {list,isLoading} = this.state
    return (
      <div className="maincontainer">
        <h1 className="">Travel Guide</h1>
        <div>
        {isLoading ? (this.loading()) : (<ul className="itemwrap">
          {list.map(each => (
            <Location key={each.id} details={each} />
          ))}
        </ul>)}
        </div>
      </div>
    )
  }
}
export default Home
