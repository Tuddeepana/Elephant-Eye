import React, { Suspense, lazy } from 'react';

const Router = lazy(() => import('./router/Router.jsx'));

function App() {

  return (
    <>
      <div>
        <Suspense fallback={<div></div>}>
          <Router />
        </Suspense>
      </div>
    </>
  )
}

export default App
