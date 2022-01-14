export const Option = ({type, label}) => {
  return (
    <div className="flex flex- p-1">
      <label>
        <input type={type} />
        {label}
      </label>
    </div>
  )
}