import './index.css'

const WWYLearnSection = () => (
    <div className='learn-section-container'>
        <h1 className='learn-section-heading'>What will you Learn in ACCA?</h1>
        <hr className='horizontal-line' />
        <ul className='learn-cards-list'>
            <li className='learn-card'>
                <p className='learn-card-header'>Knowledge Level</p>
                <ul className='learn-list-items-container'>
                    <li><span className='list-item'>Business And Technology (BT)</span></li>
                    <li><span className='list-item'>Financial Accounting (FA)</span></li>
                    <li><span className='list-item'>Audit and Assurance (AA)</span></li>
                </ul>
                <p className='learn-card-footer'>3 Papers</p>
            </li>
            <li className='learn-card'>
                <p className='learn-card-header'>Skill Level</p>
                <ul className='learn-list-items-container'>
                    <li><span className='list-item'>Technical Skills (TS)</span></li>
                    <li><span className='list-item'>Professional Skills (PS)</span></li>
                    <li><span className='list-item'>Analytical Skills (AS)</span></li>
                    <li><span className='list-item'>Leadership Skills (LS)</span></li>
                    <li><span className='list-item'>Interpersonal Skills (IS)</span></li>
                    <li><span className='list-item'>Digital Skills (DS)</span></li>
                </ul>
                <p className='learn-card-footer'>3 Papers</p>
            </li>
            <li className='learn-card'>
                <p className='learn-card-header'>Professional Level</p>
                <ul className='learn-list-items-container'>
                    <p className='list-category-heading'>Compulsory</p>
                    <li><span className='list-item'>Advanced Financial Management</span></li>
                    <li><span className='list-item'>Advanced Taxation</span></li>
                    <p className='list-category-heading'>Two out of the following</p>
                    <li><span className='list-item'>Advanced Performance Management</span></li>
                    <li><span className='list-item'>Advanced Audit and Assurance</span></li>
                    <li><span className='list-item'>Strategic Business Reporting</span></li>
                    <li><span className='list-item'>Strategic Business Leader</span></li>
                </ul>
                <p className='learn-card-footer'>3 Papers</p>
            </li>
        </ul>
    </div>
)

export default WWYLearnSection