import React from "react";
import { useLocation } from "react-router";

const Head = ({ title, description }) => {
  React.useEffect(() => {
    document.title = 'Raneki | ' + title;
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", description);
  }, [title, description]);

  return <></>;
};

export default Head;
