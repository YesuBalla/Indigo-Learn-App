import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import { AiFillDribbbleCircle } from "react-icons/ai"
import './index.css'

const BecomeACCASection = () => (
    <div className='become-acca-container'>
        <div className='become-acca-content-container'>
            <h1 className="become-acca-heading">Become ACCA in 18 months</h1>
            <p className="become-acca-description">
                Becoming ACCA qualified in 18 months requires a structured plan. Enroll in an ACCA program, create a detailed study plan.
            </p>
            <ul className='specification-cards'>
            <li className='card'>
                <div className='card-heading-container'>
                    <AiFillDribbbleCircle size={17} />
                    <p className="card-heading">Commitment</p>
                </div>
                <p className="card-value">Value1</p>
            </li>
            <li className='card'>
                <div className='card-heading-container'>
                    <AiFillDribbbleCircle size={17} />
                    <p className="card-heading">Preparation</p>
                </div>
                <p className="card-value">Value2</p>
            </li>
            <li className='card'>
                <div className='card-heading-container'>
                    <AiFillDribbbleCircle size={17} />
                    <p className="card-heading">Application</p>
                </div>
                <p className="card-value">Value3</p>
            </li>
            <li className='card'>
                <div className='card-heading-container'>
                    <AiFillDribbbleCircle size={17} />
                    <p className="card-heading">Integrity</p>
                </div>
                <p className="card-value">Value4</p>
            </li>
        </ul>
        <ul className="buttons-container">
            <li>
            <button type='button' className="blue-button">
                Blue Button
            </button>
            </li>
            <li>
            <button type='button' className="orange-button">
                Orange Button
            </button>
            </li>
        </ul>
        </div>
        <div className="input-container">
            <h1 className='input-contaier-heading'>Aspiring to be an ACCA? Get in touch with us!</h1>
            <form className="form-container">
                <input className="input-bar" type="number" placeholder="Phone Number" />
                <input type="email" className="input-bar" placeholder="Email ID" />
                <input type="drop" className="input-bar" placeholder="Current Qualification" />
                <input type="text" className="input-bar" placeholder="Interested In" />
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

export default BecomeACCASection