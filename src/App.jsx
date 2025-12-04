import React from "react"
import Bike from './components/Bike';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';

export default function App() {
  const containerRef = React.useRef(null);

  return (
    <>
      <Bike containerRef={containerRef} />
      <Nav />
      <div ref={containerRef} className="parallax-container">
        <Header />
        <Main />
      </div>
    </>
  )
}
