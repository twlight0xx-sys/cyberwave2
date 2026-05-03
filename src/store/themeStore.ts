import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
    isDark: boolean;
    themeMode: 'light' | 'dark' | 'glassy';
    animationIntensity: 'low' | 'medium' | 'high';
    backgroundColor: string;
    toggleDarkMode: () => void;
    setThemeMode: (mode: 'light' | 'dark' | 'glassy') => void;
    setAnimationIntensity: (intensity: 'low' | 'medium' | 'high') => void;
    setBackgroundColor: (color: string) => void;
}

export const useThemeStore = create<ThemeState>()(
    persist((set) => (
        {
            isDark: false,
            themeMode: 'glassy',
            animationIntensity: 'medium',
            backgroundColor: '#ffffff',
            toggleDarkMode: () => set((state) => ({ isDark: !state.isDark })),
            setThemeMode: (mode) => set({ themeMode: mode }),
            setAnimationIntensity: (intensity) => set({ animationIntensity: intensity }),
            setBackgroundColor: (color) => set({ backgroundColor: color }),
        } 
    ), { name: 'theme-storage' })
);