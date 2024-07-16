import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContextProvider";

// Use this if you are using the React Context API

export function useItemsContext() {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error(
      "useItemsContext must be used within an ItemsContextProvider"
    );
  }

  return context;
}
