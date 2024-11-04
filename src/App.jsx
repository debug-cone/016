// react
// import { useReducer } from 'react'

// css
import './App.css'

// redux
import { useDispatch } from 'react-redux'
import { handleAllProductsAction, handleSingleProductAction } from './store/productSlice'

// services
// import ProductsService from './services/productsService'

// store
// import { 
//   INITIAL_STATE, 
//   productsReducer 
// } from './store/productsReducer'

// components
// import ProductsComponent from './components/ProductsComponent'
import ShowInfoComponent from './components/ShowInfoComponent'

// outlet
import { Outlet, Link } from 'react-router-dom'
import { useEffect } from 'react'


function App() {

  // const [state, dispatch] = useReducer(
  //   productsReducer, 
  //   INITIAL_STATE
  // )

  // // products
  // // useEffect(() => {
    
  // // }, [])

  // function handleData() {
  //   // fetch start
  //   dispatch({ type: 'FETCH_START' })
    
  //   ProductsService.getAllProducts()
  //     .then((res) => dispatch({ type: 'FETCH_SUCCESS', data: res.data.products }))
  //     .catch((err) => dispatch({ type: 'FETCH_ERROR' }))
  // }

  // // ERR
  // if(state.error){
  //   return <h2>An Error occured!</h2>
  // }

  // return (
  //   <div>
  //     <h2>REDUCER</h2>
  //     <button onClick={handleData}>Fetch Data</button>

  //     {
  //       state.isLoading 
  //       ? 
  //       <h2>Loading...</h2> 
  //       : 
  //       <>
  //         {
  //         state.products.map((el, i) => {
  //             return (
  //             <div key={i}>
  //               <h2>{el.title}</h2>
  //               <img src={el.thumbnail} alt={el.title} />  
  //             </div>
  //             )
  //           })
  //         }
  //       </>
  //     }
  //   </div>
  // )

  // REDUX TOOLKIT
  
  // 1. USAGE OF REDUX -> DISPATCH
  const dispatch = useDispatch()
  // function handleInfo() {
  //   dispatch(handleAllProductsAction('SOME INFO'))
  // }
  useEffect(() => {
    dispatch(
      handleSingleProductAction({
        title: 'Iphone X',
        desc: '128GB',
        price: '1200$'
      })
    )
  }, [])

  return (
    <div>
      <h1>REDUX TOOLKIT</h1>
      
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
          <Link to={'/products'}>Products</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  )
  
}

export default App

// 1:29:30
