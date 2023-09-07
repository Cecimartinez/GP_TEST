export const setLocalStore = (key:string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value) )
}

export const getLocalStore = (key:string) => {
  return localStorage.getItem(key)
}