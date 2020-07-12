import React from 'react';
import { Helmet } from 'react-helmet-async'
import Header from './Header';



const Main = ({  description, children }) => {
  return (<>
    <Helmet>
      <meta name="description" content={description || "STORE"} />
    </Helmet>
    <Header />

    <main className="container">
      {children}
    </main>
  </>)
}

export default Main