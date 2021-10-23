export const BASE_URL = "https://how.viidoo.it"
export const ICON_URL = `${BASE_URL}/icon.svg`
export const DESCRIPTION = `Personal developer diary and sandbox. Pronounced "how we do it".`

// todo: really mean "production"

export let isClient: boolean | undefined = undefined

export function setIsClient(v: boolean) {
  isClient = v
}
