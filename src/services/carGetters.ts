import axios from "axios"

export const carGetters = () => {
  const getCarBySorting = async (
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

  return { getCarBySorting }
}
