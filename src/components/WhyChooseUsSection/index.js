import solution from '../../assets/solution.png' 
import hiring from '../../assets/hiring.png'
import recruitment from '../../assets/recruitment.png'

import ChooseItem from '../ChooseItem'
import './index.css'

const Data = [
    {
        id: 1,
        iconUrl: solution,
        title: 'Expert Faculty',
        description: 'Expert faculty members bring a wealth of knowledge and experience to the classroom, enriching students, learning with real-world insights and practical expertise.'
    },
    {
        id: 2,
        iconUrl: recruitment,
        title: 'Complete Success Package',
        description: 'A complete success package encompasses not only academic excellence but also personal development, fostering holistic growth and resilience in individuals.'
    },
    {
        id: 3,
        iconUrl: hiring,
        title: 'Placements',
        description: 'Placements are pivotal in bridging the gap between academic learning and real-world application, providing students with valuable opportunities to launch their careers and put their skills into practice.'
    },
]

const WhyChooseUsSection = () => (
    <div className='why-choose-us-container'>
        <h1 className='choose-heading'>Why Choose Us?</h1>
        <hr className='horizontal-line' />
        <ul className='choose-cards-list'>
            {Data.map((eachItem) => <ChooseItem key={eachItem.id} itemDetails={eachItem} />)}
        </ul>
    </div>
)

export default WhyChooseUsSection