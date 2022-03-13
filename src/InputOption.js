import React from "react";
import "./InputOption.css";

export default function InputOption({ title, color, Icons, handleClick , handleImageIconClickEvent}) {
  return (
    <div className="inputOption">
      {/* {console.log(Icons.type.render.displayName)} */}
      {Icons.type.render.displayName === "ThumbUpIcon" ||
      Icons.type.render.displayName === "ThumbDownAltIcon" ? (
        <>
          <Icons style={{ color: color }} onClick={handleClick} />
          <h4>{title}</h4>
        </>
      ) : Icons.type.render.displayName === "ImageIcon" ? (
        <>
          <Icons style={{ color: color }} onClick={handleImageIconClickEvent}/>
          <h4>{title}</h4>
        </>
      ) : (
        <>
          <Icons style={{ color: color }} />
          <h4>{title}</h4>
        </>
      )}
      {/* <Icons style={{ color: color }} />
           <h4>{title}</h4> */}
    </div>
  );
}
