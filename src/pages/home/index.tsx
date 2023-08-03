import React from 'react'
import {render} from 'react-dom'
import axios from 'axios'
import Designer from '@/pages/home/designer';

import '@/reset.less'

axios.defaults.withCredentials = true

render(<Designer />, document.getElementById('root'))
