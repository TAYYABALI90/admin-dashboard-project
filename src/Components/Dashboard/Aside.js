import React from 'react'
import { Link } from 'react-router-dom'
import RouteConstants from '../../RoutesConstant'

export default function Aside() {
  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4 h-500">
        <Link to="/dashboard" className="brand-link">
          <img src="dist/img/AdminLTELogo.png" alt='' className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </Link>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="dist/img/image-1.png" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <Link to="/dashboard" className="d-block">TAYYAB ALI</Link>
            </div>
          </div>
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              <li className="nav-header">PRODUCTS</li>
              <li className="nav-item">
                <Link to={`/dashboard${RouteConstants.addProduct}`} className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Add Product</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/dashboard${RouteConstants.viewProduct}`} className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>View Products</p>
                </Link>
              </li>
              <li className="nav-header">CATEGORIES</li>
              <li className="nav-item">
                <Link to={`/dashboard${RouteConstants.addCategory}`} className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Add Category</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/dashboard${RouteConstants.viewCategory}`} className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>View Categories</p>
                </Link>
              </li>
              <li className="nav-header">USERS</li>
              <li className="nav-item">
                <Link to={`/dashboard${RouteConstants.addUser}`} className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Add User</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/dashboard${RouteConstants.viewUser}`} className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>View Users</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  )
}
