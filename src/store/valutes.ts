import { defineStore } from "pinia";
import { apiGet } from "@/functions/api";

import type { Valute } from "@/types";

export const useValutesStore = defineStore({
  id: "valutes",
  state: () => {
    return {
      list: [] as Valute[],
      filteredList: [] as Valute[],
    };
  },
  getters: {
    currentList: (state) => {
      const currentList = state.filteredList?.length
        ? state.filteredList
        : state.list;
      return currentList;
    },
    charCodes: (state) => {
      return state.list.map((el) => el.CharCode);
    },
  },
  actions: {
    async getValutesList() {
      const {
        data: { Valute },
      } = await apiGet("daily_json.js");
      this.list = Object.values(Valute);
      this.list = this.list.map((el: Valute) => {
        return {
          ...el,
          reverse: false,
        };
      });
    },
    filterValutes(e: InputEvent) {
      const request = (e.target as HTMLInputElement).value;
      this.filteredList = this.list.filter(
        (el) =>
          el.CharCode.toLowerCase().includes(request.toLowerCase()) ||
          el.Name.toLowerCase().includes(request.toLowerCase())
      );
    },
  },
});
