import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import {Button, message} from 'antd'
import config from './app-config'

import css from './app.less'

const SPADesigner = (window as any).mybricks.SPADesigner

export default function MyDesigner() {
  const designerRef = useRef<{ dump; toJSON; geoView; switchActivity; getPluginData }>()
  const [beforeunload, setBeforeunload] = useState(false)

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
