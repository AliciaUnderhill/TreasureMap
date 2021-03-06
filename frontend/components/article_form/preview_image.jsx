import React from "react";

const PreviewImage = props => {
  return (
    <button onClick={props.removePreview(props.idx)}>
      <img className="preview-image" src={props.imageUrl} />
    </button>
  );
};

export default PreviewImage;
