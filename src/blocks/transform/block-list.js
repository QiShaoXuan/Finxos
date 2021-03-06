import React from 'react';
import { useSlate } from 'slate-react';
import { Dropdown, Select } from '@finxos/ui-components';
import {  convertBlock } from '@finxos/tools';
import { ZWNBSP } from '@finxos/var/special-characters';
const { Option } = Select;
import { name } from './index';

import './style.scss';

export default props => {
  const { visible, setVisible } = props;
  const editor = useSlate();

  const select = (
    <div>
      <Select
        // showSearch
        // autoFocus={true}
        open={visible}
        onBlur={() => {
          setVisible(false);
        }}
        style={{ width: 200, opacity: 0, transform: 'translateY(-100%)' }}
        onChange={targetName => {
          setVisible(false);
          convertBlock(editor, {
            currentBlock: {
              type: name,
              data: {},
              children: [{ text: ZWNBSP }],
            },
            targetName,
          });
        }}
      >
        {editor.setting.blocks.map(block => {
          return block.isBlock === true ? null : (
            <Option key={block.name} value={block.name}>
              <div className="finxos-transform-block-list__item">
                {block.icon ? <block.icon /> : null}
                <span className="finxos-transform-block-list__item-name">{block.name}</span>
              </div>
            </Option>
          );
        })}
      </Select>
    </div>
  );

  return (
    <Dropdown overlay={select} visible={visible}>
      <span></span>
    </Dropdown>
  );
};
