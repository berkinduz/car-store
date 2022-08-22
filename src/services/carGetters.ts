import axios from "axios"

export const carGetters = () => {
  const getCarByFilters = async (
    sortBy: number,
    priceDirection: number,
    take: number
  ) => {
    const res = await axios
      .get(
        `http://sandbox.arabamd.com/api/v1/listing?sort=${sortBy}&sortDirection=${priceDirection}&take=${take}`
      )
      .then((res) => res.data)

    return res
  }
}
