import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `BD LEGO | ${title}`;
  }, [title]);
};

export default useTitle;
