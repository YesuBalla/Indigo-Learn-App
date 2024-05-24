import {Component} from 'react'

import Header from '../Header'
import BecomeACCASection from '../BecomeACCASection'
import WhyChooseUsSection from '../WhyChooseUsSection'
import EligibilitySection from '../EligibilitySection'
import WWYLearnSection from '../WWYLearnSection'
import PlacementSection from '../PlacementSection'
import KickOffSection from '../KickOffSection'

import './index.css'

class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <div className='home-content-container'>
                    <BecomeACCASection />
                    <WhyChooseUsSection />
                    <EligibilitySection />
                    <WWYLearnSection />
                    <PlacementSection />
                    <KickOffSection />
                </div>
            </>
        )
    }
}

export default Home