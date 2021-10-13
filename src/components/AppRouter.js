import React from 'react'
import { Route, Switch, Redirect, Router } from 'react-router'
import { privateRoutes, publicRoutes } from '../routes'
import { CHAT_ROUTE, LOGIN_ROUTE } from '../util/const'

export default function AppRouter() {
    const user = false
    return user ? (
        <Switch>
            {privateRoutes.map(({ path, Component }) =>
            <Route path={path} component={Component} exact={true}/>
            )}
            <Redirect to={CHAT_ROUTE} />
        </Switch>
    ) : (
        <Switch>
            {publicRoutes.map(({ path, Component }) =>
            <Route path={path} component={Component} exact={true}/>
            )}
            <Redirect to={LOGIN_ROUTE} />
        </Switch>
    )
}
