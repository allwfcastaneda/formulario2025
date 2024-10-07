import React from 'react';
import { TooltipWrapper } from './styled';

const Tooltip = ({ content, position }) => {
  return (
    <TooltipWrapper style={{ top: position.top, left: position.left }}>
      {content}
    </TooltipWrapper>
  );
};

export default Tooltip;
