"use client"
import { FilterController } from "@/components/Filter/Filter"
import { Filter as FilterType } from "@/components/Filter/Filter.type"

export default function Home() {
   const categories: FilterType[] = [
      {
         label: "Shoes",
         value: "shoe-sandals",
      },
      {
         label: "Bags",
         value: "bags",
      },
      {
         label: "Shirts",
         value: "shirts",
      },
      {
         label: "Pants",
         value: "pants",
      },
      {
         label: "Shorts",
         value: "shorts",
      },
   ]
   const variants: FilterType[] = [
      {
         label: "Wired",
         value: "wired",
      },
      {
         label: "Wireless",
         value: "wireless",
      },
   ]
   const search: FilterType[] = [
      {
         label: "Search Product",
         value: "",
      },
   ]
   return (
      <main className="flex flex-col gap-6 p-24">
         <FilterController
            keyword="categories"
            values={categories}
            isMulti
            render={({ onChange }) => {
               return (
                  <div>
                     <h1 className="text-lg font-bold mb-2">Select Desired Categories:</h1>
                     <div className="flex gap-4 border border-violet-50 p-2 rounded-md">
                        {categories.map((category) => {
                           return (
                              <div key={category.value} className="flex gap-2 ">
                                 <label htmlFor={`category-${category.value}`}>{category.label}</label>
                                 <input id={`category-${category.value}`} name="category" type="checkbox" value={category.value} onChange={onChange} />
                              </div>
                           )
                        })}
                     </div>
                  </div>
               )
            }}
         />
         <FilterController
            keyword="variants"
            values={variants}
            render={({ onChange }) => {
               return (
                  <div>
                     <h1 className="text-lg font-bold mb-2">Select a Variant:</h1>
                     <div className="flex gap-4 border border-violet-50 p-2 rounded-md">
                        {variants.map((category) => {
                           return (
                              <div key={category.value} className="flex gap-2 ">
                                 <label htmlFor={`category-${category.value}`}>{category.label}</label>
                                 <input id={`category-${category.value}`} name="category" type="radio" value={category.value} onChange={onChange} />
                              </div>
                           )
                        })}
                     </div>
                  </div>
               )
            }}
         />
      </main>
   )
}
