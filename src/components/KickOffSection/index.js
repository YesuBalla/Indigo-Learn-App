import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import './index.css'

const KickOffSection = () => (
    <div className='kick-off-container'>
        <div className='kick-off-content-container'>
            <h1 className="kick-off-heading">Kick off your ACCA Prep journey with IndigoLearn</h1>
            <p className="kick-off-description">Sign-in and get instant access to our Free Courses.</p>
            
        <ul className="kick-off-buttons-container">
            <li>
            <button type='button' className="kick-off-orange-button">
                Orange Button
            </button>
            </li>
        </ul>
        </div>
        <div className="kick-off-input-container">
            <h1 className='kick-off-input-contaier-heading'>Aspiring to be an ACCA? Get in touch with us!</h1>
            <form className="kick-off-form-container">
                <input className="kick-off-input-bar" type="number" placeholder="Phone Number" />
                <input type="email" className="kick-off-input-bar" placeholder="Email ID" />
                <input type="drop" className="kick-off-input-bar" placeholder="Current Qualification" />
                <input type="text" className="kick-off-input-bar" placeholder="Interested In" />
            </form>
            <div className="popup-container">
                <Popup
                    modal
                    trigger={
                    <button type="button" className="trigger-button">
                        Request Call Back
                    </button>
                    }
                >
                    {close => (
                    <>
                        <div>
                        <p className='popup-description'>Call Back Request Success</p>
                        </div>
                        <button
                        type="button"
                        className="trigger-button"
                        onClick={() => close()}
                        >
                        Close
                        </button>
                    </>
                    )}
                </Popup>
            </div>
        </div>
    </div>
)

export default KickOffSection