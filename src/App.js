import React, { Suspense } from 'react';
const Header = React.lazy(() => import('MicroFrontend/Header'))
const Footer = React.lazy(() => import('MicroFrontend/Footer'))

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        wofefef
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
