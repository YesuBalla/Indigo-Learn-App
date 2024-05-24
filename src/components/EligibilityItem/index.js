import { FaStar } from "react-icons/fa"
import './index.css' 

const EligibilityItem = (props) => {
    const {itemDetails} = props
    const {title, description} = itemDetails
    return<li className='eligibility-card'>
        <h1 className="eligibility-title">{title}</h1>
        <div className="eligibility-card-description">
            <FaStar size={15} />
            <p className="eligibility-description">{description}</p>
        </div>
    </li>
}

export default EligibilityItem