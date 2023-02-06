import { fx } from "money";
import type { Valute } from "@/types";

function fxInit(base: string, list: Valute[]) {
  fx.base = base;
  fx.rates = list.reduce((acc, el: Valute) => {
    acc[el.CharCode] = el.Value;
    return acc;
  }, fx.rates);
}

function getValuteCourse(nominal: number, from: string, to: string) {
  return fx(nominal).from(from).to(to).toFixed(4);
}

function getValuteTitle(nominal: number, name: string) {
  return nominal > 1 ? `${nominal} ${name}` : name;
}

function getDiffValute(valute: Valute) {
  return (valute.Value - valute.Previous).toFixed(2);
}

export { fxInit, getValuteCourse, getValuteTitle, getDiffValute };
