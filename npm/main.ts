import router from '@/routes'

/**
 * Renders the given HTML view inside the #root element.
 * Also removes any existing <style> tags to prevent style stacking.
 */
function renderView(viewHTML: string): void {
  const rootEl = document.querySelector<HTMLElement>('#root')

  if (!rootEl) {
    console.error('Root element (#root) not found.')
    return
  }

  // Remove old styles
  rootEl.querySelectorAll('style').forEach((style) => style.remove())

  // Inject new view
  rootEl.innerHTML = viewHTML
}

/**
 * Re-renders the view based on the current route.
 */
function handleRouteChange(): void {
  renderView(router())
}

// Initial render
handleRouteChange()

// Re-render on browser back/forward
window.addEventListener('popstate', handleRouteChange)
