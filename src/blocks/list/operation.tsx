import React from 'react';
import { IconButton } from '@finxos/ui-components';
import { Operation } from '@finxos/blocks';

import Ul from './icons/ul.svg';
import Ul1 from './icons/ul1.svg';
import Ul2 from './icons/ul2.svg';
import Ul3 from './icons/ul3.svg';
import Ol from './icons/ol.svg';
import Ol1 from './icons/ol1.svg';
import Ol2 from './icons/ol2.svg';
import Ol3 from './icons/ol3.svg';

export default (props => {
  const { currentData } = props;
  return (
    <div>
      <div className="finxos-list__operation">
        <IconButton icon={Ul} disabled />
        {[
          { Icon: Ul1, type: 'ul1' },
          { Icon: Ul2, type: 'ul2' },
          { Icon: Ul3, type: 'ul3' },
        ].map(Type => {
          const { type, Icon } = Type;
          return (
            <IconButton
              key={type}
              className={type === currentData.type ? 'active' : ''}
              onMouseDown={e => {
                e.preventDefault();
                // props.setBlockData({
                //   type,
                // });
                props.setBlockData(
                  {
                    type,
                  },
                  {
                    match: (n: any) => n.type === 'list-item' || n.type === 'list',
                  }
                );
              }}
              icon={Icon}
            />
          );
        })}
      </div>
      <div className="finxos-list__operation">
        <IconButton icon={Ol} disabled />
        {[
          { Icon: '1', type: 'ol1' },
          { Icon: '一', type: 'ol2' },
          { Icon: 'a', type: 'ol3' },
        ].map(Type => {
          const { type, Icon } = Type;
          return (
            <IconButton
              key={type}
              className={`list-special-btn ${type === currentData.type ? 'active' : ''}`}
              onMouseDown={e => {
                e.preventDefault();
                // props.setBlockData({
                //   type,
                // });
                props.setBlockData(
                  {
                    type,
                  },
                  {
                    match: (n: any) => n.type === 'list-item' || n.type === 'list',
                  }
                );
              }}
            >
              {Icon}
            </IconButton>
          );
        })}
      </div>
    </div>
  );
}) as Operation;
