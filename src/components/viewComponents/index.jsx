import { Input } from "../input";
import { Option } from "../option";
import { Select } from "../select";
import { useContext } from "react/cjs/react.development";
import { AppContext } from "../../context/provider";

export const ViewComponents = () => {

  const { form, deleteElement } = useContext(AppContext);

  const typeComponent = (field) => {
    const { component, label, type } = field
    switch (component) {
      case "text":
        return <Input type={type} label={label}/>
      case "select":
        return <Select label={label}/>
      case "option":
        return <Option type={type} label={label}/>
      default:
        return null;
    }
  }
  
  return (
    <div className="p-5">
      <h1 className="text-4xl">Form</h1>
      <form>
        {form.map((field) => {
          return (
            <div key={field._uid} className="flex flex-row">
              {typeComponent(field)}
              <button className="p-2" onClick={() => deleteElement(field._uid)}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          )
       })}
      </form>
    </div>
  )
}