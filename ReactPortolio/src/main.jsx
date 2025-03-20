import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import PortfolioLogo from '../images/PortfolioLogo.png';


export default Header;

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import AboutMePage from './Pages/AboutMePage';
import PortfolioPage from './Pages/PortfolioPage';
import ConactPage from './Pages/ContactPage';
import ResumePage from './Pages/ResumePage';
import ErrorPage from './Pages/ErrorPage';


// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <img src={PortfolioLogo} alt="Avatar" />,
      },
      {
        index: true,
        element: <AboutMePage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'contact',
        element: <ConactPage />,
      },
      {
        path: 'resume',
        element: <ResumePage />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
