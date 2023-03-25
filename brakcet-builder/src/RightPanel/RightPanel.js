// import RightPanelButtonFunc from "./RightPanelButtonFunc";

function RightPanel() {
return <div className="RightPanel">
         <div className='CreatePanel'> 
            <button onclick="">
               Create New Bracket
            </button>
         </div>
         <div className='PresetPanel'>
            <p> Preset Panels </p>
            <button onclick="">
               Top Songs of 2020
            </button>
            <button onclick="">
               Preset Bracket 2
            </button>
            <button onclick="">
               Preset Bracket 3
            </button>
            <button onclick="">
               Preset Bracket 4
            </button>
         </div>
        </div>
}

export default RightPanel;