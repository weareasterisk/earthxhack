import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from "react-router-dom";
import { Helmet } from "react-helmet";
import HomePage from "./components/pages/homepage" 
import ReactPixel from "react-facebook-pixel"
import ContentWrapper from './components/common/contentwrapper';

export default class App extends React.Component {

  componentWillMount() {
    ReactPixel.init('2979011885465884')
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8"/>
          <title>EarthxHack | The Environmental Hackathon of Dallas</title>
        </Helmet>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route component={RouteNotFound}/>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export const RouteNotFound: React.FC = () => {
  return (
    <React.Fragment>
      <ContentWrapper className="text-center flex flex-row justify-center pt-4">
        <h1 className="text-2xl"><span className="text-red-600">404</span>: Route not found</h1>
        <Link to="/">Go Home</Link>
      </ContentWrapper>
    </React.Fragment>
  )
}