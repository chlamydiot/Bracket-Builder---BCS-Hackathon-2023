import RightPanel from '../RightPanel/BracketRightPanel';
import LeftPanel from '../LeftPanel/BracketLeftPanel';
import TopPanel from '../MainPanels/TopPanel';

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