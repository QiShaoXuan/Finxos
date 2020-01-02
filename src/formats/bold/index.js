import React from 'react'

export default {
  name: 'bold',
  title: '粗体',
  render: props => {
    return <strong {...props.attributes}>{props.children}</strong>
  },
  shortcut: event => {
    return event.ctrlKey && event.key === 'b'
  },
}
