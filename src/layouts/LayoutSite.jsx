import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutSite = () => {
  return (
    <div>
      <Outlet/>
    </div>
  );
};

export default LayoutSite
