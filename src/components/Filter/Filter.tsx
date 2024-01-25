"use client"
import { useSearchParams } from "next/navigation"
import { ChangeEvent } from "react"
import { useFilterHelper } from "./Filter.helper"
import { FilterControllerProps } from "./Filter.type"

export const FilterController = (props: FilterControllerProps) => {
   const { keyword, render, values } = props
   const RouterSearchParams = useSearchParams()

   const selectedValues = RouterSearchParams.getAll(keyword) ? RouterSearchParams.getAll(keyword) : []

   const { filterHandler } = useFilterHelper({ keyword, values, selectedValues: selectedValues ?? [] })

   const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const selectedFilter = values.find((item) => item.value === event.target.value)
      if (!selectedFilter) {
         return
      }
      filterHandler(selectedFilter)
   }

   return (
      <div className="flex gap-4">
         <>{render({ onChange: onChangeHandler })}</>
      </div>
   )
}
