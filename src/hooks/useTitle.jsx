import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `WonderKin | ${title}`;
  }, [title]);
};

export default useTitle;