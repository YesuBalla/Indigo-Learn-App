import EligibilityItem from '../EligibilityItem'
import './index.css'

const data = [
    {
        id: 1,
        title: 'Levels',
        description: 'Three (13 Papers)'
    },
    {
        id: 2,
        title: 'Duration',
        description: '6-30 Months'
    },
    {
        id: 3,
        title: 'Exams',
        description: 'Quarterly/Online'
    },
    {
        id: 4,
        title: 'Exemptions',
        description: 'Upto 9 Papers'
    },
]

const EligibilitySection = () => (
    <ul className='eligibility-section-container'>
        {data.map((eachItem) => <EligibilityItem key={eachItem.id} itemDetails={eachItem} />)}
    </ul>
)

export default EligibilitySection