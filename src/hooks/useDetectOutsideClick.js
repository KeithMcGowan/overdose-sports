import { useState, useEffect } from "react";

export const useDetectOutsideClick = (element, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const clickEvent = (e) => {
      if (element.current !== null && !element.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener("click", clickEvent);
    }

    return () => {
      window.removeEventListener("click", clickEvent);
    };
  }, [isActive, element]);

  return [isActive, setIsActive];
};
