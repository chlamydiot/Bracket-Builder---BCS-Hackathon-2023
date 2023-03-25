import RightPanel from '../RightPanel/RightPanel';
import LeftPanel from '../LeftPanel/LeftPanel';
import BracketLeftPanel from '../LeftPanel/BracketLeftPanel'
import TopPanel from './TopPanel';
import { useState } from 'react'

function MainPanels() {
    const [preset, setPreset] = useState(0)
    const [customList, setCustomList] = useState([])
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
    const topSongs2021 = ["Levitating - Dua Lipa",
    "Save Your Tears - The Weeknd",
    "Blinding Lights - The Weeknd",
    "Mood - 24kGoldn",
    "Good 4 U - Olivia Rodrigo",
    "Kiss Me More - Doja Cat",
    "Leave the Door Open - Silk Sonic",
    "Drivers License - Olivia Rodrigo"]
    const topSongs2020 = ["Circles - Post Malone",
    "The Box - Roddy Ricch",
    "Don't Start Now - Dua Lipa",
    "Rockstar - DaBaby",
    "Adore You - Harry Styles",
    "Life is Good - Future",
    "Memories - Maroon 5",
    "The Bones - Maren Morris"]
    const topSongs2019 = ["Old Town Road - Lil Nas X",
  "Sunflower - Post Malone",
  "Without Me - Halsey",
  "Bad Guy - Billie Eilish",
  "Wow - Post Malone",
  "Happier - Marshmello",
  "7 Rings - Ariana Grande",
  "Talk - Khalid",]

  let pageContent = null;
  if (preset === 0) {
    console.log("Preset 0 block executed")
    pageContent = <> 
      <LeftPanel setCustomList={setCustomList} changePreset={setPreset}/>
    </>
  } else if (preset === 1) {
    console.log("Preset 1 block executed")
    pageContent = <>
      <BracketLeftPanel input={topSongs2019} />
    </>
  } else if (preset === 2) {
    console.log("Preset 2 block executed")
    pageContent = <>
      <BracketLeftPanel input={topSongs2020} />
    </>
  } else if (preset === 3) {
    console.log("Preset 3 block executed")
    pageContent = <>
      <BracketLeftPanel input={topSongs2021} />
    </>
  } else if (preset === 4) {
    console.log("Preset 4 block executed")
    pageContent = <>
      <BracketLeftPanel input={topSongs2022} />
    </>
  } else if (preset === 5) {
    console.log("Custom preset executed")
    pageContent = <>
      <BracketLeftPanel input={customList} />
    </>
  }
  return (
    <div className='App'>
      <TopPanel></TopPanel>
      <div className='MainPanels'>
        {pageContent}
        <RightPanel changePreset={setPreset} />
      </div>
    </div>
  )
}

export default MainPanels;