import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import userDetails from "./components/user-detail.component";

function App() {
  return (
    <Router>
    <div className="container">
    <Route path="/" component={userDetails} />
    </div>
    </Router>
  );
}

export default App;
