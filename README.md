# Finxos

## What

一个基于 `slate.js` 的富文本框架，并内置提供了常用的富文本编辑工具。

## Why

`slate.js` 是一个富文本开发工具，相较之下像是 `jQuery` 一样，为开发者统一封装了富文本的处理方法，我希望做一个 `Bootstrap` 之于 `jQuery` 的框架，于是`finxos` 应运而生。

## Feature

- 重新定义的规范。模糊了 `slate.js` 对于 mark，element 的定义，以 format，block 定义展示逻辑。format 指文字的额外属性，block 指块级展示元素，block 可以单独展示如 `paragraph`，也可以包含 block,构成一个如 `figure -> img + figcaption` 的组合。

- 一切皆配置。无论是 `format` 和 `block` 的声明，还是编辑器的扩展，皆以配置声明。

- 一个已经设计好的富文本编辑逻辑。

- 一个已经设计好的 UI 组件库。
