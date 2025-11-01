import React from "react";

const Head = (props) => {
  React.useEffect(() => {
    document.title = 'Site | ' + props.title;
    document
      .querySelector('meta[name="description"] ')
      .setAttribute("content", props.description);
  }, []);
  return <></>;
};

export default Head;
