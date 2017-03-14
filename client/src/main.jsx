import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Router from './router'
import 'less/global.less'

render(
    <AppContainer>
        <Router/>
    </AppContainer>,
    document.getElementById('app')
)

if (module && module.hot) {
    // module.hot.accept('./view/app.jsx', () => {
    //     const Next = require('./view/app.jsx').default
    //     reactRender(Next)
    // })
    module.hot.accept()
}
