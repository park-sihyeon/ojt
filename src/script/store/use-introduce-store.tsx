import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { produce } from 'immer';

export interface IntroDto {
  name: string; // 성명
  description: string; // 간단 설명
  imageUrl?: string; // 이미지 url
}

interface IntroStore {
  intro: IntroDto | null;
  addIntro: (intro: IntroDto) => void;
  updateIntro: (intro: Partial<IntroDto>) => void;
  getIntro: () => IntroDto | null;
}

export const useIntroStore = create<IntroStore>()(
  persist(
    (set, get) => ({
      intro: null,

      addIntro: (intro) =>
        set(
          produce((state) => {
            state.intro = intro;
          })
        ),

      updateIntro: (updatedIntro) =>
        set(
          produce((state) => {
            if (state.intro) {
              Object.assign(state.intro, updatedIntro);
            } else {
              state.intro = updatedIntro as IntroDto;
            }
          })
        ),

      getIntro: () => get().intro,
    }),
    {
      name: 'intro',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
