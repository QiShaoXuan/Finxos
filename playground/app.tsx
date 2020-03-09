import React from 'react';
import ReactDom from 'react-dom';
import { FinxosSlate, FinxosEditable } from '@finxos/editor';
import { Header } from '@finxos/ui-components';
import { HistoryGroup, Toolbar, EditBar, BlockList } from '@finxos/components';

import 'antd/dist/antd.css';
import './style.scss';
import BlockSettings from '@finxos/blocks';
import FormatSettings from '@finxos/formats';
import './assets/styles/reset.scss';
import './style.scss';
const content = [
  {
    type: 'heading',
    children: [{ text: '梦游天姥吟留别' }],
  },
  {
    type: 'paragraph',
    children: [
      {
        text:
          '海客谈瀛洲，烟涛微茫信难求。越人语天姥，云霞明灭或可睹。天姥连天向天横，势拔五岳掩赤城。天台四万八千丈，对此欲倒东南倾。我欲因之梦吴越，一夜飞渡镜湖月。湖月照我影，送我至剡溪。谢公宿处今尚在，渌水荡漾清猿啼。脚著谢公屐，身登青云梯。半壁见海日，空中闻天鸡。',
      },
      {
        text: '越人语天姥，云霞明灭或可睹。',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text:
          '千岩万转路不定，迷花倚石忽已暝。熊咆龙吟殷岩泉，栗深林兮惊层巅。云青青兮欲雨，水澹澹兮生烟。列缺霹雳，丘峦崩摧。洞天石扉，訇然中开。青冥浩荡不见底，日月照耀金银台。霓为衣兮风为马，云之君兮纷纷而来下。虎鼓瑟兮鸾回车，仙之人兮列如麻。忽魂悸以魄动，恍惊起而长嗟。惟觉时之枕席，失向来之烟霞。世间行乐亦如此，古来万事东流水。别君去兮何时还？且放白鹿青崖间，须行即骑访名山。安能摧眉折腰事权贵，使我不得开心颜。',
      },
      {
        text: '越人语天姥，云霞明灭或可睹。',
      },
    ],
  },
  {
    type: 'list',
    children: [
      {
        type: 'list-item',
        children: [
          {
            text: '天姥连天向天横，势拔五岳掩赤城。',
          },
        ],
      },
      {
        type: 'list',
        children: [
          {
            type: 'list-item',
            children: [
              {
                text: '天台四万八千丈，对此欲倒东南倾。',
                underline: true,
              },
            ],
          },
          {
            type: 'list',
            children: [
              {
                type: 'list-item',
                children: [
                  {
                    text: '我欲因之梦吴越，一夜飞渡镜湖月。',
                  },
                ],
              },
              {
                type: 'list',
                children: [
                  {
                    type: 'list-item',
                    children: [
                      {
                        text: '湖月照我影，送我至剡溪。',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'list-item',
        children: [
          {
            text:
              '脚著谢公屐，身登青云梯。半壁见海日，空中闻天鸡。千岩万转路不定，迷花倚石忽已暝。熊咆龙吟殷岩泉，栗深林兮惊层巅。云青青兮欲雨，水澹澹兮生烟。列缺霹雳，丘峦崩摧。洞天石扉，訇然中开。青冥浩荡不见底，日月照耀金银台。霓为衣兮风为马，云之君兮纷纷而来下。虎鼓瑟兮鸾回车，仙之人兮列如麻。忽魂悸以魄动，恍惊起而长嗟。惟觉时之枕席，失向来之烟霞。世间行乐亦如此，古来万事东流水。别君去兮何时还？且放白鹿青崖间，须行即骑访名山。安能摧眉折腰事权贵，使我不得开心颜。',
          },
        ],
      },
    ],
  },
  {
    type: 'blockquote',
    children: [{ text: '在 block 为空时，可输入 "/" 以转换 block' }],
  },
  // {
  //   type: 'code',
  //   children: [{ text: 'outer code' }],
  // },
];

// const content = [ {
//   type: 'heading',
//   children: [{ text: '梦游天姥吟留别' }],
// },]

class App extends React.Component {
  render() {
    return (
      <div className="editor-container">
        <FinxosSlate content={content} blocks={BlockSettings} formats={FormatSettings}>
          <Header
            portal={document.body}
            left={
              <>
                {/*<BlockMenu BlockSettings={BlockSettings} />*/}
                <HistoryGroup />
                <BlockList style={{ marginLeft: 20 }} />
              </>
            }
          />
          <Toolbar />
          <EditBar />
          <FinxosEditable />
        </FinxosSlate>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));