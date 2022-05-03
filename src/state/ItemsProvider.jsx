// NPM packages
import { createContext, useContext, useState } from "react";

// Properties
const Context = createContext(null);

// Methods
// For the parent
export function ItemsProvider({ children }) {
  // Local state
  const [items, setItems] = useState([]);

  // Properties
  const value = { items, setItems };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

// For the child
export function useItems() {
  const context = useContext(Context);
  const errorText =
    "To use useItems(), you need to wrap the parent component with <ItemsProvider/>";

  // Safeguards
  if (!context) throw new Error(errorText);

  return context;
}
