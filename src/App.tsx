import React from 'react';
import {RouterProvider} from "react-router-dom"
import { MainRoutes } from './routes/MainRoutes';

 const App = ()=>{
  return(
    <div>
    <RouterProvider router={MainRoutes} />
    </div>
  )
}

export default App;
