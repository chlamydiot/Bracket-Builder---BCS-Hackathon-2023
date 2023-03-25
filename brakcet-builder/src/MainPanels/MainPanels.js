import RightPanel from '../RightPanel/RightPanel';
import LeftPanel from '../LeftPanel/LeftPanel';
import TopPanel from './TopPanel';

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