import { Provider } from "@/components/ui/provider"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { I18nProvider } from "./contexts/I18nContext.tsx"
import { PreferencesProvider } from "./contexts/PreferenceContext.tsx"
import { MealsProvider } from "./contexts/MealsContext.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <I18nProvider>
        <PreferencesProvider>
          <MealsProvider>
            <App />
          </MealsProvider>
        </PreferencesProvider>
      </I18nProvider>
    </Provider>
  </StrictMode>,
)
