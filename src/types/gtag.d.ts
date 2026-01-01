// Type definitions for Google Analytics gtag.js
export {};

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'set' | 'event',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}
