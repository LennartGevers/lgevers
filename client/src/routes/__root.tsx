import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div
  className="absolute inset-0 h-full w-full dottedBackground"
><Outlet /></div>
  )
}
