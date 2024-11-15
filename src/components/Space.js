import React from 'react';

const Space = ({ size = 80, axis = "y", type = "margin" }) => {
  const spacingType = type === "margin" ? `m${axis}-${size}` : `p${axis}-${size}`;

  return <div className={spacingType} />;
};

export default Space;




// Space usage 
// Add axis x or y for horizontal or vertical spacing respectfully
// <Space size={6} axis="y" type="padding" /> ==> for pading space on the y axis(vertically)
// <Space size={6} axis="x" /> ==> for space on the y axis
// size: Typically from 0 to 64 in Tailwind CSS, where 4 is equal to 1rem (16px).
// Ensure the size matches Tailwind’s spacing scale (1, 2, 4, 8, etc.).