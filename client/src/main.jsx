import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import App from 'view/app'
import Project from 'view/project'
import Index from 'view/Index'

render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index} />
            <Route path="project/:id" component={Project} />
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
