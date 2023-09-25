import { create } from 'zustand'

const useThemeStore = create((set, get) => ({
  isDarkMode: false,
  setIsDarkMode: (isDarkMode) => set({ isDarkMode }),
  getIsDarkMode: () => get().isDarkMode,
}))

export default useThemeStore
