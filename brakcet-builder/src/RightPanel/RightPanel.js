
import MainPanels from "../RacketPage/RacketPage";

function RightPanel({changePreset}) {
  const setSongsBracket = () => {
    // setPreset(1)
  }

return <div className="RightPanel">
         <div className='CreatePanel'> 
            <button onclick="">
               Create New Bracket
            </button>
         </div>
         <div className='PresetPanel'>
            <p> Preset Panels </p>
            <button onClick={() => changePreset(1)}>
               Top Songs of 2020
            </button>
            <button onClick={() => changePreset(2)}>
               Preset Bracket 2
            </button>
            <button onClick={() => changePreset(3)}>
               Preset Bracket 3
            </button>
            <button onclick={() => changePreset(4)}>
               Preset Bracket 4
            </button>
         </div>
        </div>
}

export default RightPanel;