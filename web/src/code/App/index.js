import Header from '../Header';
import Home from '../Home';
import LoveInfo from '../LoveInfo';
import TopEmojis from '../TopEmojis';
import TalkInfo from '../TalkInfo';

import  './Styles.css';

function App() {
  return ([
    <Header/>,
    <main>
      <Home/>
      <LoveInfo/>
      <TopEmojis/>
      <TalkInfo/>
    </main>
  ]);
}

export default App;
