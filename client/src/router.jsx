import React from 'react'
import { hashHistory, Router, Route, IndexRoute } from 'react-router'
import App from 'view/app'
import Project from 'view/project'
import Detail from 'view/Detail'
import Api from 'view/api'
import Index from 'view/Index'

export default () => {
    return (
        <Router history={hashHistory} key={Math.random()}>
            <Route path="/" breadcrumbName="所有项目" component={App}>
                <IndexRoute component={Index} />
                <Route breadcrumbName="name" path="project/:name" component={Project}>
                    <IndexRoute component={Detail} />
                    <Route breadcrumbName="uid" path="api/:uid" component={Api} />
                </Route>
            </Route>
        </Router>
    )
}
