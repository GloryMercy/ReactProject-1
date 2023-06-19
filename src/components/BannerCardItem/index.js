// Write your code here.

import './index.css'

const BannerCard = props => {
  const {CardDetails} = props
  const {headerText, description, className} = CardDetails

  return (
    <li className={`card-container ${className}`}>
      <div className="design-card">
        <h1 className="card-heading">{headerText}</h1>
        <p className="card-details">{description}</p>
        <button type="submit" className="show-more-btn">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCard
