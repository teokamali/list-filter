import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Filter, FilterHelperHook, FilterHelperHookReturn } from "./Filter.type"

export const useFilterHelper = (params: FilterHelperHook): FilterHelperHookReturn => {
   const { keyword, selectedValues } = params
   const router = useRouter()
   const RouterSearchParams = useSearchParams()
   const pathname = usePathname()
   const searchParams = new URLSearchParams(RouterSearchParams)

   const filterHandler = (filter: Filter) => {
      if (selectedValues && selectedValues.includes(filter.value, 0)) {
         searchParams.delete(keyword, filter.value)
         router.push(`${pathname}?${searchParams.toString()}`)
      } else {
         searchParams.append(keyword, filter.value)
         router.push(`${pathname}?${searchParams.toString()}`)
      }
   }
   return {
      filterHandler,
   }
}
