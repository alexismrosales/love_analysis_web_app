import Header from '../Header';
import Home from '../Home';
import LoveInfo from '../LoveInfo';
import TopEmojis from '../TopEmojis';

import  './Styles.css';

function App() {
  return ([
    <Header/>,
    <main>
      <Home/>
      <LoveInfo/>
      <TopEmojis/>
    </main>
  ]);
}

export default App;
