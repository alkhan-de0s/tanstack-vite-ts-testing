import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_unauthenticated/register')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_unauthenticated/register"!</div>
}
