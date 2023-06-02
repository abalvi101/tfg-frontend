import { useEffect } from "react";

export const useClickOutside = ( ref, onClickOutside, otherRef ) => {
  useEffect(() => {

    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event) => {
      event.stopPropagation();
      if (ref.current && !ref.current.contains(event.target) && (otherRef ? !otherRef.current.contains(event.target) : true)) {
        onClickOutside();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};