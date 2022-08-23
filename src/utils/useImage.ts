export const useImage = () => {
  const setImageResolution = (url: any) => {
    return url.replace("{0}", "800x600")
  }

  return { setImageResolution }
}
