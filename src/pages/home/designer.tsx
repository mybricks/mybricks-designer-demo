import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import {Button, message} from 'antd'
import config from './app-config'

import css from './app.less'

const designer = 'https://f2.beckwai.com/kos/nlav12333/mybricks/designer-spa/1.2.87/index.min.js';

export default function MyDesigner() {
  const designerRef = useRef<{ dump; toJSON; geoView; switchActivity; getPluginData }>()
  const [beforeunload, setBeforeunload] = useState(false)
  const [SPADesigner, setSPADesigner] = useState(null);

  useMemo(() => {
    if (designer) {
      const script = document.createElement('script');
      script.src = designer;
      document.head.appendChild(script);
      script.onload = () => {
        (window as any).mybricks.SPADesigner && setSPADesigner((window as any).mybricks.SPADesigner);
      };
    }
  }, [designer])

  useEffect(() => {
    if (beforeunload) {
      window.onbeforeunload = () => {
        return true
      }
    } else {
      window.onbeforeunload = null
    }
  }, [beforeunload])

  const onEdit = useCallback(() => {
    setBeforeunload(true);
  }, [])

  const save = useCallback(async () => {
    //保存
    const json = designerRef.current?.dump()
    console.log(json);
  }, [])

  const publish = useCallback(() => {
    console.log(designerRef?.current?.toJSON());
  }, []);

  const onMessage = useCallback((type, msg) => {
    message.destroy();
    message[type](msg);
  }, []);

  return (
    <div className={`${css.view} fangzhou-theme`}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', borderBottom: '1px solid #ccc' }}>
        <Button onClick={save}>保存</Button>
        <Button onClick={publish}>发布</Button>
      </div>

      <div className={css.designer}>
        {SPADesigner && (
          <>
            <SPADesigner
              ref={designerRef}
              config={config(save)}
              onEdit={onEdit}
              onMessage={onMessage}
              _onError_={(ex: any) => {
                console.error(ex);
                onMessage('error', ex.message);
              }}
            />
          </>
        )}
      </div>
    </div>
  )
}
