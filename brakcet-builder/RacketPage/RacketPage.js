import RightPanel from '../RightPanel/BrackRightPanel';
import LeftPanel from '../LeftPanel/BracketLeftPanel';
import TopPanel from './BracketTopPanel';

function MainPanels() {
    return <div className="App">
      <TopPanel></TopPanel>
      <div className='MainPanels'> 
        <LeftPanel></LeftPanel>
        <RightPanel></RightPanel>
      </div>
    </div>
}

export default MainPanels;