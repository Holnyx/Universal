import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  NavLink,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";
import Body from './components/body/body';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Universal from './App';


const router = createBrowserRouter(

  [
    {
      path: "/",
      element: <Body />,
    },
    {
      path: '/test',
      element: <div> <NavLink to='/'> go to home</NavLink></div>
      
    }
  ],

);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Universal>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </Universal>
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
