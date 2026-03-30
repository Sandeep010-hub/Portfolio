import { create } from 'zustand';

type ProfileMode = 'software' | 'explorer';

interface ProfileState {
  mode: ProfileMode;
  toggleMode: () => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
  mode: 'software',
  toggleMode: () =>
    set((state) => ({
      mode: state.mode === 'software' ? 'explorer' : 'software',
    })),
}));
