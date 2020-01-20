import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import { Helmet } from "react-helmet";
import HomePage from "./components/pages/homepage" 

const eventLocation = {
  "location": {
    "@type": "Place",
    "name": "Embarcadero Building, Fair Park",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3809 Grand Avenue",
      "addressLocality": "Dallas",
      "postalCode": "75223",
      "addressRegion": "TX",
      "addressCountry": "US"
    }
  },
};

const eventData = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "EarthxHack",
  "startDate": "2020-04-24",
  "endDate": "2020-04-26",
  eventLocation,
  "image": [
    "https://cdn.weareasterisk.com/hackathon-assets/hackdfw/logos/png/hackdfw-1x1-color.png",
    "https://cdn.weareasterisk.com/hackathon-assets/hackdfw/artwork/banner-hd-large.png"
  ],
  "description": "EarthxHack is a hackathon designed to inspire you to use your creativity, technical thinking, and knowledge to solve real issues plaguing the world today. We want to provide a space to help inspire creative solutions, so you can create inspirational ideas that can be implemented on a global scale. We encourage you to come and join us in making new things and turning the world into a better place!",
};

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>EarthxHack | The Environmental Hackathon of Dallas</title>
        <script className="structured-data-list" type="application/ld+json">
          { JSON.stringify(eventData) }
        </script>
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}/>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
