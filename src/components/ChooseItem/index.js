import './index.css' 

const ChooseItem = (props) => {
    const {itemDetails} = props 
    const {iconUrl, title, description} = itemDetails 

    return (
        <li className='choose-card-item-container'>
            <img src={iconUrl} alt='icon' className='choose-card-icon' />
            <h1 className='choose-card-title'>{title}</h1>
            <p className='choose-card-description'>{description}</p>
        </li>
    )
}

export default ChooseItem