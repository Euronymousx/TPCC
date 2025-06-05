// vitest setup file
import '@testing-library/jest-dom'
Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  value: class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
})
