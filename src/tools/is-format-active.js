import { Editor } from 'slate';

export default (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: n => n[format] === true,
  });
  return !!match;
};
