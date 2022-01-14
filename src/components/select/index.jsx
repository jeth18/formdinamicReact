export const Select = ({label}) => {
  return (
    <div className="flex flex-col p-1">
      <label>{label}</label>
      <select  className="border-2 border-gray-300 w-full rounded-sm">
        <option>---</option>  
      </select>
    </div>
  )
}