import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { hashHistory, Router, Route, IndexRoute } from 'react-router'
import App from 'view/app'
import Project from 'view/project'
import Detail from 'view/Detail'
import Api from 'view/api'
import Index from 'view/Index'
import 'less/global.less'

render(
    <Router history={hashHistory}>
        <Route path="/" breadcrumbName="所有项目" component={App}>
            <IndexRoute component={Index} />
            <Route breadcrumbName="name" path="project/:name" component={Project}>
                <IndexRoute component={Detail} />
                <Route breadcrumbName="uid" path="api/:uid" component={Api} />
            </Route>
        </Route>
    </Router>,
    document.getElementById('app')
)

if (module && module.hot) {
    module.hot.accept('./view/app.jsx', () => {
        const App = require('./view/app.jsx').default
        render(
            <AppContainer>
                <App />
            </AppContainer>,
            document.getElementById('app')
        )
    })
}
