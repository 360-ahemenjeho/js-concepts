import { contactPage, homePage, notFoundPage } from '@/views'

export default function router() {
  const pathname = window.location.pathname

  switch (pathname) {
    case '/':
      return homePage
    case '/contact':
      return contactPage
    default:
      return notFoundPage
  }
}
