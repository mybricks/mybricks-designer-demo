import React from 'react';
import {message} from 'antd';
import servicePlugin, {call as callConnectorHttp, mock as connectorHttpMock,} from '@mybricks/plugin-connector-http'
import toolsPlugin from "@mybricks/plugin-tools";

import {render as renderUI} from '@mybricks/render-web';

const defaultComlibs = [
  {
    editJs: "https://f2.eckwai.com/kos/nlav12333/fangzhou/pub/comlibs/7632_1.2.15/2023-07-20_11-14-04/edit.js",
    rtJs: "https://f2.eckwai.com/kos/nlav12333/fangzhou/pub/comlibs/7632_1.2.15/2023-07-20_11-14-04/rt.js"
  },
  {
    editJs: "https://f2.eckwai.com/kos/nlav12333/fangzhou/pub/comlibs/7182_1.0.26-main.0/2023-07-18_21-41-33/edit.js",
    rtJs: "https://f2.eckwai.com/kos/nlav12333/fangzhou/pub/comlibs/7182_1.0.26-main.0/2023-07-18_21-41-33/rt.js"
  },
  {
    editJs: "https://f2.eckwai.com/kos/nlav12333/fangzhou/pub/comlibs/5952_1.0.0-main.0/2022-12-06_16-24-51/edit.js",
    rtJs: "https://f2.eckwai.com/kos/nlav12333/fangzhou/pub/comlibs/5952_1.0.0-main.0/2022-12-06_16-24-51/rt.js"
  }
];

export default function (save) {
  return {
    shortcuts: {
      'ctrl+s': [save],
    },
    plugins: [
      servicePlugin({}),
      toolsPlugin(),
    ],
    comLibLoader: () => {
      return Promise.resolve(defaultComlibs.map(lib => lib.editJs));
    },
    pageContentLoader() {
      //加载页面内容
      return new Promise((resolve, reject) => {
        resolve({"content":{"xg.desn.stageview":{"D":{"C":["xg.desn.sdk.ModelState","xg.desn.designer.stageview.ViewSlotModel","xg.desn.designer.stageview.geo.SlotStyleModel","xg.desn.designer.stageview.geo.SlotModel","xg.desn.designer.stageview.geo.GeoViewModel","xg.desn.designer.stageview.topl.PinModel","xg.desn.designer.stageview.topl.DiagramModel","xg.desn.designer.stageview.topl.FrameModel","xg.desn.designer.stageview.topl.ToplViewModel","xg.desn.designer.stageview.StageViewModel"],"W":{"id":"_0_","state":"_1_","designerVersion":"_2_","pluginDataset":"_3_","mybricks.plugin.label":"_4_","@mybricks/plugins/service":"_5_","connectors":"_6_","config":"_7_","paramsFn":"_8_","resultFn":"_9_","@mybricks/plugins/domain-service":"_10_","domainModels":"_11_","@mybricks/plugins/tools":"_12_","envVars":"_13_","_themes":"_14_","viewSlots":"_15_","top":"_16_","closeable":"_17_","status":"_18_","tabs":"_19_","showTitleBar":"_20_","_height":"_21_","width":"_22_","height":"_23_","bottom":"_24_","editViewWidth":"_25_","mainModule":"_26_","instId":"_27_","title":"_28_","slot":"_29_","name":"_30_","style":"_31_","zoom":"_32_","layout":"_33_","justifyContent":"_34_","alignItems":"_35_","slots":"_36_","comAry":"_37_","capacity":"_38_","showType":"_39_","_defaultF":"_40_","_rootF":"_41_","type":"_42_","template":"_43_","proxyFor":"_44_","deletable":"_45_","schema":"_46_","notes":"_47_","styleInited":"_48_","frame":"_49_","frames":"_50_","zIndex":"_51_","_type":"_52_","left":"_53_","editable":"_54_","isFrame":"_55_","frameAry":"_56_","inputPins":"_57_","conAry":"_58_","typeTitle":"_59_","fromPlugin":"_60_","direction":"_61_","hostId":"_62_","description":"_63_","wrap":"_64_","_schema":"_65_","forRef":"_66_","icon":"_67_","extValues":"_68_","extBinding":"_69_","parent":"_70_","_inputPins":"_71_","outputPins":"_72_","properties":"_73_","scrollTop":"_74_","scrollLeft":"_75_","_outputPins":"_76_","inputJoints":"_77_","outputJoints":"_78_","diagramAry":"_79_","commentAry":"_80_","visible":"_81_","_title":"_82_","createTime":"_83_","isGlobal":"_84_","showIO":"_85_","updateTime":"_86_","startFrom":"_87_","focusModelAry":"_88_","zIndexCur":"_89_","con":"_90_","com":"_91_","debuggable":"_92_","varComAry":"_93_","curDiagram":"_94_"}},"refs":{"0":{"_0_":"u_atZZZ","_1_":{"_R_":"1"},"_2_":0.2,"_3_":{"_4_":{},"_5_":{"_6_":[],"_7_":{"_8_":"export%20default%20function%20(%7B%20params%2C%20data%2C%20headers%2C%20url%2C%20method%20%7D)%20%7B%0A%20%20%2F%2F%20%E8%AE%BE%E7%BD%AE%E8%AF%B7%E6%B1%82query%E3%80%81%E8%AF%B7%E6%B1%82%E4%BD%93%E3%80%81%E8%AF%B7%E6%B1%82%E5%A4%B4%0A%20%20return%20%7B%20params%2C%20data%2C%20headers%2C%20url%2C%20method%20%7D%3B%0A%20%7D%0A","_9_":"export default function ({ response, config }) {\n  // if (response.code !== 0) {\n  //    throw new Error(response.errMsg)\n  // }\n  return response\n}\n"}},"_10_":{"_11_":[]},"_12_":{}},"_13_":{},"_14_":[],"_15_":{"_16_":{"_R_":"2"},"_24_":{"_R_":"4"}},"_25_":280,"_26_":{"_27_":"_main_","_28_":"主模块","_29_":{"_R_":"6"},"_49_":{"_R_":"12"}},"_F_":9},"1":{"_F_":0},"2":{"_0_":"u_OGayw","_1_":{"_R_":"3"},"_17_":false,"_18_":"normal","_19_":["geoView"],"_20_":false,"_21_":"auto","_23_":"auto","_F_":1},"3":{"_F_":0},"4":{"_0_":"u_R1ogg","_1_":{"_R_":"5"},"_17_":false,"_18_":"min","_19_":["toplView"],"_20_":true,"_F_":1},"5":{"_F_":0},"6":{"_0_":"u_vPPiw","_1_":{"_R_":"7"},"_30_":"geo","_31_":{"_R_":"8"},"_36_":[{"_R_":"9"}],"_47_":[],"_48_":true,"_39_":"pc","_F_":4},"7":{"_F_":0},"8":{"_32_":1,"_33_":"flex-column","_34_":"flex-start","_35_":"flex-start","_23_":800,"_22_":1024,"_F_":2},"9":{"_0_":"u_rGTGT","_1_":{"_R_":"10"},"_37_":[],"_31_":{"_R_":"11"},"_28_":"主场景","_F_":3},"10":{"_F_":0},"11":{"_32_":1,"_33_":"flex-column","_34_":"flex-start","_35_":"flex-start","_23_":800,"_22_":1024,"_F_":2},"12":{"_0_":"u_8WP0v","_1_":{"_R_":"13"},"_30_":"topl","_50_":[{"_R_":"14"}],"_93_":[],"_31_":{"_53_":150,"_16_":150},"_94_":{"_R_":"26"},"_F_":8},"13":{"_F_":0},"14":{"_0_":"u_rGTGT","_1_":{"_R_":"15"},"_51_":0,"_52_":0,"_31_":{"_53_":null,"_16_":null},"_54_":true,"_55_":true,"_56_":[],"_57_":[{"_R_":"16"}],"_71_":[],"_72_":[{"_R_":"18"},{"_R_":"20"},{"_R_":"22"},{"_R_":"24"}],"_76_":[],"_77_":[],"_78_":[],"_37_":[],"_79_":[{"_R_":"26"}],"_88_":[],"_89_":{"_90_":0,"_91_":100},"_28_":"主场景","_40_":true,"_F_":7},"15":{"_F_":0},"16":{"_0_":"u__y7EB","_1_":{"_R_":"17"},"_51_":0,"_52_":2,"_42_":"normal","_45_":false,"_58_":[],"_61_":"inner-output","_62_":"open","_28_":"打开","_65_":{"_42_":"any"},"_54_":true,"_70_":{"_R_":"14"},"_46_":{"_42_":"any"},"_F_":5},"17":{"_F_":0},"18":{"_0_":"click","_1_":{"_R_":"19"},"_51_":0,"_52_":2,"_42_":"event","_45_":false,"_58_":[],"_61_":"inner-input","_62_":"click","_28_":"点击","_65_":{"_42_":"any"},"_70_":{"_R_":"14"},"_46_":{"_42_":"any"},"_F_":5},"19":{"_F_":0},"20":{"_0_":"scroll","_1_":{"_R_":"21"},"_51_":0,"_52_":2,"_42_":"event","_45_":false,"_58_":[],"_61_":"inner-input","_62_":"scroll","_28_":"滚动","_65_":{"_42_":"object","_73_":{"_74_":{"_42_":"number"},"_75_":{"_42_":"number"}}},"_70_":{"_R_":"14"},"_46_":{"_42_":"object","_73_":{"_74_":{"_42_":"number"},"_75_":{"_42_":"number"}}},"_F_":5},"21":{"_F_":0},"22":{"_0_":"load","_1_":{"_R_":"23"},"_51_":0,"_52_":2,"_42_":"event","_45_":false,"_58_":[],"_61_":"inner-input","_62_":"load","_28_":"加载完成","_65_":{"_42_":"any"},"_70_":{"_R_":"14"},"_46_":{"_42_":"any"},"_F_":5},"23":{"_F_":0},"24":{"_0_":"unload","_1_":{"_R_":"25"},"_51_":0,"_52_":2,"_42_":"event","_45_":false,"_58_":[],"_61_":"inner-input","_62_":"unload","_28_":"卸载","_65_":{"_42_":"any"},"_70_":{"_R_":"14"},"_46_":{"_42_":"any"},"_F_":5},"25":{"_F_":0},"26":{"_0_":"u_BZqc_","_1_":{"_R_":"27"},"_37_":[],"_72_":[],"_78_":[],"_58_":[],"_80_":[],"_31_":{"_81_":true,"_53_":null,"_16_":null,"_23_":400,"_22_":700},"_70_":{"_R_":"14"},"_82_":"主场景","_83_":1691052219252,"_84_":true,"_85_":true,"_86_":1691052219916,"_28_":"主场景","_F_":6},"27":{"_F_":0}},"def":{"_R_":"0"}}}})
      })
    },
    toplView: {
      title: '交互',
      cards: {
        main: {
          title: '页面'
        }
      },
      globalIO: {
        startWithSingleton: true
      },
      vars: {},
      fx: {},
      useStrict: false
    },
    editView: {
      items({ }, cate0, cate1, cate2) {
        cate0.title = `项目`
      },
    },
    com: {
      env: {
        renderCom(json, opts, coms) {
          return renderUI(
            json,
            {
              comDefs: { ...coms },
              // observable: window['rxui'].observable,
              ...(opts || {}),
              env: {
                ...(opts?.env || {}),
                edit: false,
                runtime: true
              },
              callConnector(connector, params) {
                //调用连接器
                if (connector.type === 'http') {
                  //服务接口类型
                  return callConnectorHttp(
                    { script: connector.script, useProxy: true },
                    params
                  )
                } else {
                  return Promise.reject('错误的连接器类型.')
                }
              }
            }
          )
        },
        i18n(title) {
          //多语言
          return title
        },
        callConnector(connector, params, connectorConfig) {
          /** 启动 Mock */
          if (connectorConfig?.openMock) {
            return connectorHttpMock({ ...connector, outputSchema: connectorConfig.mockSchema });
          }
          //调用连接器
          if (connector.type === 'http') {
            //服务接口类型
            return callConnectorHttp(
              { script: connector.script, useProxy: true },
              params
            )
          } else {
            return Promise.reject('错误的连接器类型.')
          }
        },
        // uploadFile(files) {
        //   return uploadApi(files)
        // },
        vars: {
          getQuery: () => ({}),
          getProps: () => ({}),
          get getRouter() {
            const toast = (info: string) => {
              message.info(info);
            };
            return () => ({
              reload: () => toast('reload'),
              redirect: ({ url }: { url: string }) => toast(`redirect: ${url}`),
              back: () => toast('back'),
              forward: () => toast('forward'),
              pushState: ({
                            state,
                            title,
                            url,
                          }: {
                state: any;
                title: string;
                url: string;
              }) =>
                toast(`pushState: ${JSON.stringify({ state, title, url })}`),
              openTab: ({ url, title }: { url: string; title: string }) =>
                toast(`open a new tab: ${JSON.stringify({ url, title })}`),
            });
          },
          get getCookies() {
            return () => {
              return {}
            }
          }
        },
      },
      events: [
        //配置事件
        {
          type: 'jump',
          title: '跳转到',
          exe({ options }) {
            const page = options.page
            if (page) {
              window.location.href = page
            }
          },
          options: [
            {
              id: 'page',
              title: '页面',
              editor: 'textarea',
            },
          ],
        },
      ],
    },
    geoView: {
      scenes: {
        adder: [
          {
            type: 'popup',
            title: '对话框',
            template: {
              namespace: 'mybricks.basic-comlib.popup',
              deletable: false,
              asRoot: true
            },
          },
          {
            type: 'popup',
            title: '抽屉',
            template: {
              namespace: 'mybricks.basic-comlib.drawer',
              deletable: false,
              asRoot: true
            }
          }
        ]
      }
    }
  }
}