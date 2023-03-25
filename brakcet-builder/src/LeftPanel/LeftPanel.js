import { useState } from "react"

function LeftPanel() {
  const [name, setName] = useState('')
  const [textArea, setTextArea] = useState('')

  const generateBracket = () => {
    console.log("Bracket would be generated here.");
  }

    return <div className="LeftPanel">
      <h1>Enter form details here:</h1>
      <div className="FormContainer">
        <form onSubmit={generateBracket}>
          <div>
            <label>
              Name:
              <input type="text" value={name} onChange={({target}) => setName(target.value)}></input>
            </label>
          </div>
          <div>
            <label>
              Input teams:
              <textarea 
                value={textArea} 
                onChange={({target}) => setTextArea(target.value)
                }>
                Separate teams by newlines
              </textarea>
            </label>
          </div>
        </form>
      </div>
    </div>
}

export default LeftPanel;