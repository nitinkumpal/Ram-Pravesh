import React, {Suspense, lazy } from 'react';
//import Home from './Home'
const Home=lazy(()=>import('./Home'));
const About=lazy(()=>import('./About'));
export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Lazy Loading</h1>
        <Suspense fallback={<div>please wait...Home is loading</div>}>
        <Home />
        </Suspense>
        <Suspense fallback={<div>please wait...About is loading</div>}>
        <About />
        </Suspense>
      </div>
    )
  }
}
