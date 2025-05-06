import { createContext, useState, useContext } from "react";

const DropdownContext = createContext();
function Dropdown({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggle = () => setIsOpen((open) => !open);
  const select = (item) => {
    setSelected(item);
    setIsOpen(false);
  };
  return (
    <DropdownContext.Provider value={{ isOpen, toggle, selected, select }}>
      <div className="dropdown">{children}</div>
    </DropdownContext.Provider>
  );
}

Dropdown.Toggle = function Toggle() {
  const { isOpen, toggle, selected } = useContext(DropdownContext);
  return (
    <button onClick={toggle}>
      {selected || "Select an option"}
      {isOpen ? "▲" : "▼"}
    </button>
  );
};

Dropdown.Menu = function Menu({ children }) {
  const { isOpen } = useContext(DropdownContext);
  return isOpen ? <ul className="dropdown-menu">{children}</ul> : null;
};

Dropdown.Item = function Item({ children }) {
  const { select } = useContext(DropdownContext);

  return (
    <li className="dropdown-item" onClick={() => select(children)}>
      {children}
    </li>
  );
};

export default Dropdown;
