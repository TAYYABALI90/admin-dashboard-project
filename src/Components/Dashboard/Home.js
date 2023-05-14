import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
// import Spinner from './Spinner'
import RouteConstants from '../../RoutesConstant'

//Lazy Loaded Components
let AddProduct = React.lazy(() => import('./AddProduct'));
let ViewProduct = React.lazy(() => import('./ViewProduct'));
let EditProduct = React.lazy(() => import('./EditProduct'));
let AddCategory = React.lazy(() => import('./AddCategory'));
let ViewCategory = React.lazy(() => import('./ViewCategory'));
let EditCategory = React.lazy(() => import('./EditCategory'));
let AddUser = React.lazy(() => import('./AddUser'));
let ViewUser = React.lazy(() => import('./ViewUser'));
let EditUser = React.lazy(() => import('./EditUser'));

//Components
// import AddProduct from './AddProduct'
// import ViewProduct from './ViewProduct'
// import EditProduct from './EditProduct'
// import AddCategory from './AddCategory'
// import ViewCategory from './ViewCategory'
// import EditCategory from './EditCategory'
// import AddUser from './AddUser'
// import ViewUser from './ViewUser'
// import EditUser from './EditUser'

export default function Home() {
  return (
    <>
      <div className="content-wrapper">
        <Suspense fallback={"loading..."}>
          <Routes>
            <Route path={RouteConstants.addProduct} element={<AddProduct></AddProduct>}></Route>
            <Route path={RouteConstants.viewProduct} element={<ViewProduct></ViewProduct>}></Route>
            <Route path={"/editProduct/:id"} element={<EditProduct></EditProduct>}></Route>
            <Route path={RouteConstants.addCategory} element={<AddCategory></AddCategory>}></Route>
            <Route path={RouteConstants.viewCategory} element={<ViewCategory></ViewCategory>}></Route>
            <Route path={"/editCategory/:id"} element={<EditCategory></EditCategory>}></Route>
            <Route path={RouteConstants.addUser} element={<AddUser></AddUser>}></Route>
            <Route path={RouteConstants.viewUser} element={<ViewUser></ViewUser>}></Route>
            <Route path={"/editUser/:id"} element={<EditUser></EditUser>}></Route>
          </Routes>
        </Suspense>
      </div>
    </>
  )
}
