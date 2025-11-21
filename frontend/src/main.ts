// import { loadTranslations, setupLanguageSwitcher } from '../src/utils/translation.ts'
// import { App } from './App.ts'
// import { initializeGameUI } from './logic/initGameUI'
// import { GDPRHelpers } from './services/gdprService'
import './style.css'
// import { initializeBannerSystem } from './utils/bannerNotification'
// import './utils/removeBeforeUnloadAlerts'
// import { addResponsiveStyles } from './utils/responsiveUtils'

const root = document.querySelector<HTMLDivElement>('#app')

window.addEventListener('DOMContentLoaded', async () => {
  if (!root) return

  // Add responsive styles first
  // addResponsiveStyles()

  // Initialize banner notification system
  // initializeBannerSystem()

  // root.appendChild(App())

  // initializeGameUI()

  // await loadTranslations()
  // setupLanguageSwitcher()


  // Initialize GDPR compliance
  // GDPRHelpers.initialize()
})





// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Ft_transcendence</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)





// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
