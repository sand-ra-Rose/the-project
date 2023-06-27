
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import './App.css';
import {PracticeArea} from './PracticeArea';
import {About} from './About';
import { Home } from './Home';
import { NavBar } from './navbar'; 
import { CallArea } from './CallArea';
import{CaseArea} from './CaseArea';
import { CounterArea } from './CounterArea';
import { LawyerArea } from './LawyerArea';
import { News } from './News';
import {Subscribe} from './subscribe';
import { Footer } from './FooterArea';
import { HelpArea } from './HelpArea';
/*import { library } from '@fortawesome/fontawesome-svg-core'
  import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'*/

function App() {
  return (
  <>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
  <div className="container">

</div>
<div className="bg-img theme-background">
<div className="container">
  <NavBar />
  <Home />
  <About />
  <PracticeArea />
  <CallArea />
  </div>
 
<CaseArea />
<CounterArea />
<LawyerArea />
<div className="container">
<div className="bg-img3 theme-background">
<HelpArea />
</div>
</div>
<News />
<Subscribe />
<Footer />
</div>

  </>
  );
}

export default App;
