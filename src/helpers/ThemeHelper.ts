import { Dark } from 'quasar'
import { ThemeEnum } from 'src/interfaces/enums/ThemeEnum'

export function setLightMode() {
  Dark.set(false)
  setThemeStorage(ThemeEnum.LIGHT)
}

export function setDarkMode() {
  Dark.set(true)
  setThemeStorage(ThemeEnum.DARK)
}

export const getThemeStorage = (): ThemeEnum => {
  return localStorage.getItem(ThemeEnum.LABEL) as ThemeEnum
}

const setThemeStorage = (theme: ThemeEnum) => {
  localStorage.setItem(ThemeEnum.LABEL, theme)
}
