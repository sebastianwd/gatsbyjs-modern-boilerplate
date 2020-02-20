const useStorage = () => {
  const get = key => localStorage.getItem(key)

  const set = (key, value) => localStorage.setItem(key, value)

  const remove = key => localStorage.removeItem(key)

  return {
    get,
    set,
    remove,
  }
}

export default useStorage
