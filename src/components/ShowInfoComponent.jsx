import { useSelector } from 'react-redux'

function ShowInfoComponent() {
    
    // 2. USAGE OF REDUX -> SELECTOR
    const {info} = useSelector(state => state.productStore)

    return (
        // SHOW INFO ONLY WHEN TRUE
        <div 
        className='text-3xl font-bold text-green-600'
        >
            {info && info}
        </div>
    )
}

export default ShowInfoComponent