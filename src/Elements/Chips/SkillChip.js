import React from "react";

const SkillChip = (props) => {
  return (
    <div>
      <div className={props.class}>{props.skill}</div>
    </div>
  );
};

export default SkillChip;
