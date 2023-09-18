import { create } from 'zustand'

const useDeviceStore = create((set, get) => ({
  innerWidth: 0,
  innerHeight: 0,
  isMobile: false, // Mobile and tablet devices
  showMobileMenu: false,
  setInnerWidth: (innerWidth) => set({ innerWidth }),
  setInnerHeight: (innerHeight) => set({ innerHeight }),
  setIsMobile: (isMobile) => set({ isMobile }),
  setShowMobileMenu: (showMobileMenu) => set({ showMobileMenu }),
  getInnerWidth: () => innerWidth,
  getInnerHeight: () => innerHeight,
}))

export default useDeviceStore
