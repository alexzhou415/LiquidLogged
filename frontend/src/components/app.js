import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import Liquids from '../components/liquid/liquids.jsx';

const App = () => (
    <div>
        <Header />
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/login" component={LoginFormContainer} />
            <Route exact path="/signup" component={SignupFormContainer} />

            <Route exact path="/liquids" component={Liquids} />
            <Route exact path="/profile" component={ProfileContainer} />
        </Switch>
        <Footer />
    </div>
);



export default App;