import RightPanel from '../RightPanel/RightPanel';
import LeftPanel from '../LeftPanel/LeftPanel';
import BracketRightPanel from '../RightPanel/BracketRightPanel'
import BracketLeftPanel from '../LeftPanel/BracketLeftPanel'
import TopPanel from './TopPanel';
import { useState } from 'react'

function MainPanels() {
    const [preset, setPreset] = useState(0)
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
    "Drivers License - Olivia Rodrigo"
    ]
    const topSongs2020 = ["Circles - Post Malone",
    "The Box - Roddy Ricch",
    "Don't Start Now - Dua Lipa",
    "Rockstar - DaBaby",
    "Adore You - Harry Styles",
    "Life is Good - Future",
    "Memories - Maroon 5",
    "The Bones - Maren Morris"
  ]

  let pageContent = null;
  if (preset === 0) {
    console.log("Preset 0 block executed")
    pageContent = <> 
      <LeftPanel />
      <RightPanel changePreset={setPreset} />
    </>
  } else if (preset === 1) {
    console.log("Preset 1 block executed")
    pageContent = <>
      <BracketLeftPanel input={topSongs2022} />
      <BracketRightPanel />
    </>
  } else if (preset === 2) {
    console.log("Preset 2 block executed")
    pageContent = <>
      <BracketLeftPanel input={topSongs2021} />
      <BracketRightPanel />
    </>
  } else if (preset === 3) {
    console.log("Preset 3 block executed")
    pageContent = <>
      <BracketLeftPanel input={topSongs2020} />
      <BracketRightPanel />
    </>
  }

  return (
    <div className='App'>
      <TopPanel></TopPanel>
      <div className='MainPanels'>{pageContent}</div>
    </div>
  )

      // if (preset == 0) {
      //   return (
      //     <div>
      //     <TopPanel></TopPanel>
      //     <div className='MainPanels'> 
      //       <LeftPanel />
      //       <RightPanel changePreset={setPreset} />
      //     </div>
      //   </div>
      //   )
      // }
      // else if (preset == 1) {
      //   return (
      //   <div>
      //       <TopPanel />
      //       <BracketLeftPanel input={topSongs2022} />
      //       <BracketRightPanel />
      //   </div>
      //   )
      // }
}

export default MainPanels;