import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
      >
        <div className='container-fluid'>
          {props.title}

          {/* <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button> */}
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/about'>
                  {props.aboutTest}
                </Link>
              </li>
            </ul>
            <div className='d-flex' role='search'>
              {/* <div className='d-flex'>
                <button
                  className='bg-primary rounded mx-2'
                  onClick={() => {
                    props.toggleMode('primary');
                  }}
                  style={{ height: '30px', width: '30px', cursor: 'pointer' }}
                ></button>
                <button
                  className='bg-dark rounded mx-2'
                  onClick={() => {
                    props.toggleMode('dark');
                  }}
                  style={{ height: '30px', width: '30px', cursor: 'pointer' }}
                ></button>
                <button
                  className='bg-light rounded mx-2'
                  onClick={() => {
                    props.toggleMode('light');
                  }}
                  style={{ height: '30px', width: '30px', cursor: 'pointer' }}
                ></button>
                <button
                  className='bg-danger rounded mx-2'
                  onClick={() => {
                    props.toggleMode('danger');
                  }}
                  style={{ height: '30px', width: '30px', cursor: 'pointer' }}
                ></button>
                <button
                  className='bg-warning rounded mx-2'
                  onClick={() => {
                    props.toggleMode('warning');
                  }}
                  style={{ height: '30px', width: '30px', cursor: 'pointer' }}
                ></button>
                <button
                  className='bg-info rounded mx-2'
                  onClick={() => {
                    props.toggleMode('secondary');
                  }}
                  style={{ height: '30px', width: '30px', cursor: 'pointer' }}
                ></button>
              </div>  */}

              <div
                className={`form-check form-switch text-${
                  props.mode === 'light' ? 'Dark' : 'light'
                }`}
              >
                <input
                  className='form-check-input'
                  onClick={props.toggleMode}
                  type='checkbox'
                  role='switch'
                  id='flexSwitchCheckDefault'
                />
                <label
                  className='form-check-label'
                  htmlFor='flexSwitchCheckDefault'
                >
                  Enable dark mode
                </label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  //  give prop type like number string boolean etc.
  title: PropTypes.string.isRequired,
  aboutTest: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  // default title when are you not giving props then these execute
  title: ' Title ',
  // aboutTest: 'About',
};
export default Navbar;
