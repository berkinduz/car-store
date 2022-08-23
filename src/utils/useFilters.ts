import { carGetters } from "../services/carGetters"

export const useFilters = () => {
  const { getCarsBySorting } = carGetters()

  const sortTypes = ["price", "date", "year"]
  const sortDirections = ["ascending", "descending"]

  const getCars = (sortType: string, sortDirection: string, take: number) => {
    const indexOfSortTypes = sortTypes.indexOf(sortType)
    const indexOfSortDirection = sortDirections.indexOf(sortDirection)

    return getCarsBySorting(indexOfSortTypes, indexOfSortDirection, take)
  }

  return { getCars }
}
