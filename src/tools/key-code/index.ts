import { keyCodes } from './key-code-list';

export interface ketToCodeInterface {
  keyCode?: number;
  assist?: string[];
  value: string[];
}

const assistMap: { [key: string]: string } = {
  ctrl: 'ctrlKey',
  shift: 'shiftKey',
  alt: 'altKey',
  meta: 'metaKey',
};

export const keyToCode = (key: string | string[]): number | number[] => {
  if (Array.isArray(key)) {
    return key.map(code => keyCodes[code.toUpperCase()]);
  }

  return keyCodes[key.toUpperCase()];
};

export const compositionKeyToCode = (keys: string[]): ketToCodeInterface => {
  let keyCode;
  let assist: string[] = [];
  keys.forEach(key => {
    if (assistMap[key]) {
      assist.push(assistMap[key]);
    } else {
      keyCode = keyCodes[key];
    }
  });
  return {
    keyCode,
    assist,
    value: keys,
  };
};
