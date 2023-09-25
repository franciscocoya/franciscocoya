import { create } from 'zustand'

const useDeviceStore = create((set, get) => ({
  isMenuOpen: false,
  setIsMenuOpen: (isMenuOpen) => set({ isMenuOpen }),
  getIsMenuOpen: () => get().isMenuOpen,
}))

export default useDeviceStore
