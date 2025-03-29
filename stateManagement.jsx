import {create} from "zustand";

export const useStore = create((set) => ({
  user: {
    name:'Athul',
    age: 20,
    weight: 62,
    gender: 'male',
    height: 170,
  },
  coins: 500,
  setUser: (user) => set({user}),
  redeemItem: (cost) =>
    set((state) =>
      state.coins >= cost
        && { coins: state.coins - cost }
        // : (Alert.alert("Not enough coins!"), state)
    ),
}));

