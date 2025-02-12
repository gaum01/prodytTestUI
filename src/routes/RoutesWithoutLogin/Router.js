import React from 'react'
import { Routes, Route } from 'react-router-dom';

import * as component from '../../pages/index';

const Default = component.SignIn;

const routeData = [
  {
      id: 1,
      name: 'Sign In',
      url: '/signin',
      componentName: 'SignIn',
  },
];

const RouterBeforeLogin = () => {
  return (
    <Routes>
      {CreateRoute(routeData)}
    </Routes>
  )
}

const CreateRoute = (routeData) => {
  return (
      <>
          {
              routeData ? routeData.map((route) => {
                  const { id, url, componentName } = route;
                  return (
                      <React.Fragment key={id}>
                          <Route path={url} element={<Dynamicomponent componentName={componentName} />} />
                      </React.Fragment>
                  )
              }) : ''
          }
          <Route path="*" element={<Default />} />
      </>
  )
}

const Dynamicomponent = ({ componentName }) => {
  const dynamicComp = component[componentName] || Default;
  return React.createElement(dynamicComp);
}

export default RouterBeforeLogin
