import axios from "axios"

export const carGetters = () => {
  const getCarsBySorting = async (
    sortBy: number = 0,
    priceDirection: number = 0,
    take: number = 10
  ) => {
    const res = await axios
      .get(
        `http://sandbox.arabamd.com/api/v1/listing?sort=${sortBy}&sortDirection=${priceDirection}&take=${take}`
      )
      .then((res) => res.data)

    return res
  }

  const getCarById = async (id: string) => {
    const res = await axios
      .get(`http://sandbox.arabamd.com/api/v1/detail?id=${id}`)
      .then((res) => res.data)
    return res
  }

  const getFilteredCars = async (filters: object, take: number) => {
    console.log(filters)
    const res = await axios
      .get(
        `http://sandbox.arabamd.com/api/v1/listing?minYear=${filters.minYear}&maxYear=${filters.maxYear}&take=${take}`
      )
      .then((res) => res.data)

    return res
  }

  return { getCarsBySorting, getCarById, getFilteredCars }
}
