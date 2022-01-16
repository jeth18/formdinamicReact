import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export default ({ children }) => {
  const [form, setForm] = useState([]);

  const addElement = ({ component, label }) => {
    switch (component) {
      case "text":
        setForm((prevForm) => [
          ...prevForm,
          {
            component: "text",
            label: label,
            type: "text",
            _uid: uuid(),
          },
        ]);
        break;
      case "select":
        setForm((prevForm) => [
          ...prevForm,
          {
            component: "select",
            label: label,
            type: "",
            _uid: uuid(),
          },
        ]);
        break;
      case "option":
        setForm((prevForm) => [
          ...prevForm,
          {
            component: "option",
            label: label,
            type: "radio",
            _uid: uuid(),
          },
        ]);
        break;
    }
  };

  const deleteElement = (id) => {
    const newForms = [...form];
    newForms.splice(
      newForms.findIndex((f) => f._uid === id),
      1
    );
    setForm(newForms);
  };

  return (
    <AppContext.Provider value={{ form, setForm, addElement, deleteElement }}>
      {children}
    </AppContext.Provider>
  );
};

export const AppContext = createContext();
