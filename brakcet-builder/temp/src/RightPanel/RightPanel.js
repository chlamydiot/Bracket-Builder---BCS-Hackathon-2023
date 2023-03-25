

function RightPanel({changePreset}) {
return <div className="RightPanel">
         <div className='CreatePanel'> 
            <button onClick={() => changePreset(0)}>
               Create New Bracket
            </button>
         </div>
         <div className='PresetPanel'>
            <p> Preset Panels </p>
            <button onClick={() => changePreset(1)}>
               Top Songs of 2019
            </button>
            <button onClick={() => changePreset(2)}>
               Top Songs of 2020
            </button>
            <button onClick={() => changePreset(3)}>
               Top Songs of 2021
            </button>
            <button onClick={() => changePreset(4)}>
               Top Songs of 2022
            </button>
         </div>
        </div>
}

export default RightPanel;