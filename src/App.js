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

function App() {
  const [activePage, setActivePage] = useState(appPages.sortPage);

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

  return (
    <div className="App">
      {
        activePage === appPages.sortPage &&
        <SortPage handleNext={handleNextPage} />
      }
      {
        activePage === appPages.infoPage &&
        <InfoPage handleNext={handleNextPage} />
      }
      {
        activePage === appPages.signupPage &&
        <SignUp handleNext={handleNextPage} />
      }
    </div>
  );
}

export default App;
