import Header from '../Header';
import Home from '../Home';
import Cards from '../Cards';

import  './Styles.css';

function App() {
  return ([
    <Header/>,
    <main>
      <Home/>
      <Cards/>
    </main>
  ]);
}

export default App;
