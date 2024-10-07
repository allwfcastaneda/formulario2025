import { create } from "zustand"

export const useUserStore = create((set) => ({
  data: {},
  token: "",
  usuarioRol: [],
  setUsuarioData: (newData) => set({ data: newData }),
  setToken: (newToken) => set({ token: newToken }),
  setUsuarioRol: (newUsuarioRol) => set({ usuarioRol: newUsuarioRol })
}))