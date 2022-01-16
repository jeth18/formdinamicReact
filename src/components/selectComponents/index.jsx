import { useState, useContext } from "react";
import { AppContext } from "../../context/provider";

export const SelectComponents = () => {
  const [option, setOption] = useState({
    component: "",
    label: "",
  });
  const { addElement } = useContext(AppContext);

  const handleSubmit = () => {
    if (option.component !== "") {
      addElement(option);
      setOption({
        component: "",
        label: "",
      });
    }
  };

  return (
    <div className="flex flex-col gap-4 p-5">
      <h1 className="text-3xl">Selecciona el elemento que deseas agregar </h1>
      <div className="flex flex-row gap-4 p-5">
        <select
          className="border-2 border-gray-300 w-1/3 rounded-sm"
          name="components"
          value={option.component}
          onChange={(e) => setOption({ ...option, component: e.target.value })}
        >
          <option value="">----</option>
          <option value="text">input</option>
          <option value="option">radio</option>
          <option value="select">select</option>
        </select>
        <button
          onClick={() => handleSubmit()}
          disabled={option.component === ""}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
      {option.component !== "" && (
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="label">Label: </label>
            <input
              className="border-2 border-gray-300 w-auto rounded-sm px-2"
              type="text"
              name="label"
              id="label"
              onChange={(e) => setOption({ ...option, label: e.target.value })}
            />
          </div>
        </div>
      )}
    </div>
  );
};
