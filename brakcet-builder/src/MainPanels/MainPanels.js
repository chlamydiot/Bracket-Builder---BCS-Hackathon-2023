import RightPanel from '../RightPanel/RightPanel';
import LeftPanel from '../LeftPanel/LeftPanel';
import BracketRightPanel from '../RightPanel/BracketRightPanel'
import BracketLeftPanel from '../LeftPanel/BracketLeftPanel'
import TopPanel from './TopPanel';
import { useState } from 'react'

function MainPanels() {
    const [preset, setPreset] = useState('0')
    const topSongs2022 = ["Heat Waves - Glass Animals",
  "As It Was - Harry Styles",
  "Stay - Justin Bieber",
  "Easy on Me - Adele",
  "Shivers - Ed Sheeran",
  "First Class - Jack Harlow",
  "Big Energy - Latto",
  "Ghost - Justin Bieber",
  "Super Gremlin - Kodak Black",
  "About Damn Time - Lizzo",
  "Industry Baby - Lil Nas X",
  "ABCDEFU - Gayle",
  "Need to Know - Doja Cat",
  "Woman - Doja Cat",
  "Running Up That Hill - Kate Bush"]


    return <div className="App">
      <TopPanel></TopPanel>
      if (preset == 0) {
        <div className='MainPanels'> 
          <LeftPanel></LeftPanel>
          <RightPanel changePreset={setPreset}></RightPanel>
        </div>
      }
      else if (preset == 1) {
        <div>
          <BracketLeftPanel input={topSongs2022} ></BracketLeftPanel>
          <BracketRightPanel></BracketRightPanel>
        </div>
      }
    </div>
}

export default MainPanels;