export const useProperties = () => {
  const getProperty = (name: string, properties: any) => {
    const prop = properties.filter((e: any) => e.name === name)
    return prop[0].value
  }

  return { getProperty }
}
