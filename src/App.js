import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Tabs from "./components/Tabs";

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

/* Theme variables */
import './theme/variables.css';
import Homepage from './pages/Home';
import ViewCoffee from './pages/ViewCoffee';
import ViewCoffees from './pages/ViewCoffees';

const App = (props) => (
  <IonApp>
    <IonReactRouter>

      <IonSplitPane contentId="main">
        <IonRouterOutlet id="main">
          
          <Route path="/tabs" render={ () => <Tabs />} />
          <Route exact={ false } path="/coffee/:id" render={(props) => <ViewCoffee {...props} />} />
          <Route exact={ false } path="/coffees" render={(props) => <ViewCoffees {...props} />} />
          <Route exact={ false } path="/coffees/:from_search" render={(props) => <ViewCoffees {...props} />} />

          <Route path="/" component={ Homepage } exact={true} />
          <Redirect exact from="/" to="/tabs/home" />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
