import Header from '../Header';
import Home from '../Home';
import LoveInfo from '../LoveInfo';
import TopEmojis from '../TopEmojis';
import TalkInfo from '../TalkInfo';
import LastWords from '../LastWords';
import  './Styles.css';

function App() {
  return ([
    <Header/>,
    <main>
      <Home/>
      <LoveInfo/>
      <TopEmojis/>
      <TalkInfo/>
      <LastWords/>
    </main>
  ]);
}

export default App;
