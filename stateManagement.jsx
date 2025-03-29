import {create} from "zustand";

export const useStore = create((set) => ({
  user: {
    name:'Athul',
    age: 20,
    weight: 62,
    gender: 'male',
    height: 170,
    
  },
  pushUp: false,
  pullUp: false,
  sitUp: false,
  running: false,
  setpushUp: () => set(() => ({pushUp: true})),
  setpullUp: () => set(() => ({pushUp: true})),
  setsitUp: () => set(() => ({pushUp: true})),
  setrunning: () => set(() => ({pushUp: true})),


  progress: 0,
  coins: 500,
  setUser: (user) => set({user}),
  increment: (value) => set((state) => ({ coins: state.coins + value })),
  progressInc: () => set((state) => ({ progress: state.progress + 25 })),
  redeemItem: (cost) =>
    set((state) =>
      state.coins >= cost
        && { coins: state.coins - cost }
        // : (Alert.alert("Not enough coins!"), state)
    ),
}));

