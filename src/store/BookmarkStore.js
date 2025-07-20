import { create } from 'zustand';

const useBookmarkStore = create((set) => ({
  bookmarks: [],

  toggleBookmark: (user) =>
    set((state) => {
      const exists = state.bookmarks.find((u) => u.id === user.id);
      if (exists) {
        return {
          bookmarks: state.bookmarks.filter((u) => u.id !== user.id),
        };
      } else {
        return {
          bookmarks: [...state.bookmarks, user],
        };
      }
    }),
}));

export default useBookmarkStore;
