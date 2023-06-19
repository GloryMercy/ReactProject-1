import './App.css'
import BannerCard from './components/BannerCardItem'

const bannerCardsList = [
  {
    uniqueNo: 1,
    id: 1,
    headerText: 'The Seasons Latest',
    description: 'Get the seasons all latest designs in a flick of your hand',
    className: 'card-1',
  },
  {
    uniqueNo: 2,
    id: 2,
    headerText: 'Our New Designs',
    description:
      'Get the designs developed by our in-house team all for yourself',
    className: 'card-2',
  },
  {
    uniqueNo: 3,
    id: 3,
    headerText: 'Insiders',
    description: 'Get the top class products for yourself with an extra off',
    className: 'card-3',
  },
]

const App = () => (
  <div className="pg-container">
    <ul className="banner-cards-list">
      {bannerCardsList.map(each => (
        <BannerCard CardDetails={each} key={each.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
