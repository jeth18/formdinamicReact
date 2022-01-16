export const Input = ({ type, label }) => {
  return (
    <div className="flex flex-col p-1">
      <label>{label}</label>
      <input
        type={type}
        className="border-2 border-gray-300 w-auto rounded-sm px-2"
      />
    </div>
  );
};
