import React from "react";
import PropTypes from "prop-types";

export interface ISpacer {
  height?: number | string,
  color?: string
}

const Spacer: React.FC<ISpacer> = ({ height = 1.5, color = "transparent"}) => {
  return (
     <React.Fragment>
       <div className={`h-${height} color-${color}`}/>
     </React.Fragment>
  )
}

export default Spacer;