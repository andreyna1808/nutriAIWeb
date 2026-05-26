import type { UserPreferences } from "@/types"
import { createContext, useContext, type ReactNode } from "react"
import { useLocalStorage } from "./useLocalStorage"

interface PreferencesContextProps {
    preferences: UserPreferences
    setPreferences: (prefs: UserPreferences) => void
}

const DEFAULT_PREFERENCES: UserPreferences = {
    goal: 'maintain',
    theme: 'system',
    language: 'pt'
}

const PreferencesContext = createContext<PreferencesContextProps>({} as PreferencesContextProps)

export const PreferencesProvider = ({children}: {children: ReactNode}) => {
    const [preferences, setPreferences] = useLocalStorage('preferences', DEFAULT_PREFERENCES)

    return (
        <PreferencesContext.Provider value={{preferences, setPreferences}}>
            {children}
        </PreferencesContext.Provider>
    )
}

export const usePreferences = () => {
    const context = useContext(PreferencesContext)
    if (!context) {
        throw new Error('usePreferences must be used within a PreferencesProvider')
    }
    return context
}