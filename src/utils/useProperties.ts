export const useProperties = () => {
  const getProperty = (name: string, properties: Array) => {
    const prop = properties.filter((e) => e.name === name)
    return prop[0].value
  }

  return { getProperty }
}
