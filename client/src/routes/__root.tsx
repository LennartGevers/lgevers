import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
        <h1 className="text-3x1 font-bold underline">Hello Lennart</h1>
      <Outlet />
    </React.Fragment>
  )
}
