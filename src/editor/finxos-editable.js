import { Editable, useSlate } from 'slate-react';

import React, { useCallback } from 'react';
import { renderElement, renderLeaf } from './untils';
import toggleFormat from '../tools/toogle-format';
import './style.scss';

export default props => {
  const editor = useSlate();
  const { blocks, formats } = props;
  return (
    <Editable
      editor={editor}
      renderElement={useCallback(props => renderElement(props, blocks), [])}
      renderLeaf={useCallback(props => renderLeaf(props, formats), [])}
      onKeyDown={event => {
        const renderFormat = formats.find(v => v.shortcut && v.shortcut(event));
        if (!renderFormat) {
          return;
        }
        event.preventDefault();
        toggleFormat(editor, renderFormat.name);
      }}
    />
  );
};