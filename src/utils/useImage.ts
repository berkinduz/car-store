export const useImage = () => {
  const setImageResolution = (url: string) => {
    return url.replace("{0}", "800x600")
  }

  return { setImageResolution }
}
