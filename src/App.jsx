import './App.css';
import Navbar from './Navbar';
import About from './about.jsx';
import React, { useState } from 'react';
import Alert from './alert.jsx';
import TextForm from './TextForm.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Front from './front.jsx';

const App = () => {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const removeClass = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-secondary');
  };
  const toggleMode = (cls) => {
    // removeClass();
    // document.body.classList.add('bg-' + cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#040858';
      showAlert('dark mode has been enabled.', 'success');
      document.title = 'TextUtiles - dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing mode.';
      // }, 2000);                                            // use title blinking
      // setInterval(() => {
      //   document.title = 'Install TextUtils';
      // }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('light mode has been enabled.', 'success');
      document.title = 'TextUtiles - light Mode';
    }
  };
  // Switch not use Es6 version in Es6 use Routes insted of Switch if you want to use Switch so install react router dom version 5.
  return (
    <div>
      <Router>
        <Navbar
          title='TextUtils'
          aboutTest='AboutTextConverter'
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        {/* <Navbar title = "Techsimplus"   /> */}
        {/* <Navbar title ={6564}   />    /*give error type string but you are giving number. */}
        {/* <Navbar  /> */}

        {/* my-3 is use for give spacing on y-axis like margin top */}
        {/* <div className="container my-3">
      <Practice title="Techsimplus" about="about techsimplus" heading="Enter the text to Analyze" />
      </div> */}

        {/* <About mode={mode} /> */}
        <div className='container my-3' style={{ height: '80vh' }}>
          <Routes>
            {/* react always do partial matching that means this always show component 1 if you go exact component so use exact keyword before path */}
            {/* '/user'--> component 1
            '/user/home' --> component 2 */}
            <Route
              path='/textUtils-website/about'
              element={<About mode={mode} />}
            ></Route>
            <Route
              path='/textUtils-website/textConverter'
              element={
                <TextForm
                  showAlert={showAlert}
                  heading=' Try textConverter for convert text in upperCase, lowerCase, Remove Extra space'
                  mode={mode}
                />
              }
            ></Route>
            <Route exact path='/textUtils-website' Component={Front}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
};
export default App;
