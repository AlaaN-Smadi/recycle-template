/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import "./components/buttons/ButtonsStyle.css";
import "./components/pages/PagesStyle.css";
import "./components/customText/TextStyle.css";
import './App.css';

import { setupIonicReact } from "@ionic/react";
import SortPage from './components/pages/SortPage';
import { useState } from 'react';
import InfoPage from './components/pages/InfoPage';
import SignUp from './components/pages/SignUp';
setupIonicReact();

const appPages = {
  sortPage: "sortPage",
  infoPage: "infoPage",
  signupPage: "signupPage",
}

const locations = [
  {
    name: "الدوحة",
    lat: 25.285344108893835,
    lng: 51.532018508215785,
  },
  {
    name: "الريان",
    lat: 25.28585807964291,
    lng: 51.420444525668884
  },
  {
    name: "الوكرة",
    lat: 25.165842419848595,
    lng: 51.597716300933776
  },
  {
    name: "الخور",
    lat: 25.680517099289098,
    lng: 51.49770285815587
  },
  {
    name: "ام صلال",
    lat: 25.398059011068945,
    lng: 51.42442872252488
  },
  {
    name: "الظعاين",
    lat: 25.45662682198745,
    lng: 51.47874996587755
  },
  {
    name: "الشمال",
    lat: 26.06630468670384,
    lng: 51.258086458892954
  }
];

function App() {
  const [activePage, setActivePage] = useState(appPages.sortPage);

  const [formData, setFormData] = useState({
    location: locations[0],
    priceType: "مجاني",
  });

  const handleNextPage = () => {
    switch (activePage) {
      case appPages.sortPage:
        setActivePage(appPages.infoPage);
        break;
      case appPages.infoPage:
        setActivePage(appPages.signupPage);
        break;
      case appPages.signupPage:
      default:
        window.location.reload();
        break;
    }
  }
  
  const handleBackPage = () => {
    switch (activePage) {
      case appPages.infoPage:
        setActivePage(appPages.sortPage);
        break;
      case appPages.signupPage:
      default:
        setActivePage(appPages.infoPage);
        break;
    }
  }

  return (
    <div className="App">
      {
        activePage === appPages.sortPage &&
        <SortPage formData={formData} setFormData={setFormData} handleNext={handleNextPage} />
      }
      {
        activePage === appPages.infoPage &&
        <InfoPage handleBackPage={handleBackPage} locations={locations} formData={formData} setFormData={setFormData} handleNext={handleNextPage} />
      }
      {
        activePage === appPages.signupPage &&
        <SignUp handleBackPage={handleBackPage} formData={formData} setFormData={setFormData} handleNext={handleNextPage} />
      }
    </div>
  );
}

export default App;
