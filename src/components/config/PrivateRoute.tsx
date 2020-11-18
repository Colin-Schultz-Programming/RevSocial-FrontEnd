import React, { Component } from 'react'
import { RouterProps } from 'react-router'
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = (props:RouterProps) => {
    <Route {...props} render={props => (
        sessionStorage.getItem('userToken')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/sessions/new', state: { from: props.location } }} />
    )} />
}