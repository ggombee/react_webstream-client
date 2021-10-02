import React from 'react'
import { Route, RouteProps } from 'react-router-dom'

interface Props extends RouteProps {
  component?: React.Component | any
  layout?: React.ComponentType<RouteProps> | React.ComponentType<any>
  authRequired?: boolean
  authNotAllow?: boolean
}

const LayoutRoute: React.FC<Props> = ({
  component,
  layout,
  authRequired = true,
  authNotAllow = false,
  location,
  ...rest
}) => {
  const routeComponent: any = (props: any) => {
    if (layout) {
      return React.createElement(
        layout,
        props,
        React.createElement(component, props)
      )
    }

    return React.createElement(component, props)
  }

  return <Route {...rest} render={routeComponent} />
}

export default LayoutRoute
