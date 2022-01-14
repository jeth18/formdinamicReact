import { useState, useContext } from "react"
import { AppContext } from "../../context/provider";

export const SelectComponents = () => {
  const [option, setOption] = useState("")
  const { addElement } = useContext(AppContext);

  const handleSubmit = () => {
    if(option !== "") {
      addElement(option)
    }
  }

  return (
    <div className="flex flex-row gap-4 p-5">
      <select className="border-2 border-gray-300 w-1/3 rounded-sm" name="components" onChange={(e) => setOption(e.target.value)}>
        <option value="">----</option>
        <option value="text">input</option>
        <option value="option">radio</option>
        <option value="select">select</option>
      </select>
      <button onClick={() => handleSubmit()}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
    </div>
  )
}