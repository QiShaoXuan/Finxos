export caretPosition from './caret-position';
export getCurrentBlocks from './get-current-blocks';
export getCurrentFormats from './get-current-formats';
export isBlockActive from './is-block-active';
export isFormatActive from './is-format-active';
export mergeDefaultData from './merge-default-data';
export setSelection from './set-selection';
export deepClone from './deep-clone';
export isHeighestBlock from './is-highest-block';
export { keyToCode, compositionKeyToCode } from './key-code/index.ts';
export { applyFormat, removeFormat, updateFormat, toggleFormat } from './handle-format';
export {
  setBlockData,
  insertBlock,
  removeBlock,
  getBlock,
  convertBlock,
  getBlockRange,
  getBlockFocus,
} from './handle-block';
