import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import AboutMePage from './pages/AboutMePage';
// import ContactPage from './pages/ContactPage';
// import PortfolioPage from './pages/PortfolioPage';
// import ResumePage from './pages/ResumePage';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutMePage />
      },
      // {
      //   path:'portfolio',
      //   element: <PortfolioPage />
      // },
      // {
      //   path: 'contact',
      //   element: <ContactPage />
      // },
      // {
      //   path: 'resume',
      //   element: <ResumePage />
      // }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
