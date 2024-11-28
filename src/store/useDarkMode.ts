import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type DarkModeStore = {
  isDarkMode: boolean
  setDarkMode: (newIsDarkMode: boolean) => void
}

export const useDarkMode = create<DarkModeStore>()(
  persist(
    (set) => ({
      isDarkMode: false,
      setDarkMode: (newIsDarkMode) => set(() => ({ isDarkMode: newIsDarkMode })),
    }),
    {
      name: 'dark-mode-storage',
    }
  )
)