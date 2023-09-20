import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PatientLayout from './layouts/PatientLayout/PatientLayout.tsx'
import Home from './pages/Home/Home.tsx'
import BurnDegree from './pages/BurnDegree/BurnDegree.tsx'
import Motivation from './pages/Motivation/Motivation.tsx';
import Settings from './pages/Settings/Settings.tsx';
import Error from './pages/Error/Error.tsx';
import Doctors from './pages/Doctors/Doctors.tsx';
import Watch from './pages/Watch/Watch.tsx';
import Doctor from './pages/Doctor/Doctor.tsx';
import DoctorLayout from './layouts/DoctorLayout/DoctorLayout.tsx';
import Requests from './pages/Requests/Requests.tsx';
import Results from './pages/Results/Results.tsx';

const layout:Boolean = true;

const router = createBrowserRouter([
  {
    path:'/',
    element:<PatientLayout />,
    errorElement: <Error />,
    children:[
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/watch',
        element: <Watch />
      },
      {
        path:'/burn-degree',
        element: <BurnDegree />
      },
      {
        path:'/motivation',
        element: <Motivation />
      },
      {
        path:'/settings',
        element: <Settings />
      },
      {
        path:'/doctors',
        element: <Doctors />
      },
      {
        path:'/doctors/:doctorId',
        element: <Doctor />
      },
    ]
  }
])

const DoctorRouter = createBrowserRouter([
  {
    path: "/",
    element: (
        <DoctorLayout />
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/watch",
        element: <Watch />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/requests",
        element: <Requests />,
      },
      {
        path: "/results",
        element: <Results />,
      },
      {
        path: "/results/:patientId",
        // element: <Patient />,
      },
      {
        path: "/:userId",
        // element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    // element: <Login />,
  },
  {
    path: "/signup",
    // element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={layout ? router : DoctorRouter}/>
    // <App />,
)
