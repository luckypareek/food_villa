export function filterData(searchText,allRestaurants)
{
   const data=  allRestaurants?.filter((restaurant)=> restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase()))

   //console.log( data, "filterdata")
   return data
}
