import { useState } from "react"

function LeftPanel({setCustomList, changePreset}) {
  const [name, setName] = useState('')
  const [textArea, setTextArea] = useState('')

  const generateCustomBracket = (event) => {
    event.preventDefault()
    setCustomList(textArea.split(/\r?\n/))
    changePreset(5)
  }

    return <div className="LeftPanel">
      <h1>Create a custom bracket:</h1>
      <div className="FormContainer">
        <form onSubmit={generateCustomBracket}>
          <div>
            <label>
              Name:
              <input 
                type="text" 
                value={name} 
                onChange={({target}) => setName(target.value)}>
              </input>
            </label>
          </div>
          <div>
            <label>
              Input teams:
              <textarea 
                value={textArea} 
                onChange={({target}) => setTextArea(target.value)}
                placeholder='Enter 8 inputs separated by new lines'>
              </textarea>
            </label>

          <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
}

export default LeftPanel;