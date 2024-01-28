import Header from '../Header';
import Home from '../Home';
import LoveInfo from '../LoveInfo';

import  './Styles.css';

function App() {
  return ([
    <Header/>,
    <main>
      <Home/>
      <LoveInfo/>
    </main>
  ]);
}

export default App;
