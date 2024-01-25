export interface Filter {
   label: string
   value: string
}
export interface FilterHelperHook {
   keyword: string
   selectedValues: string[]
   values: Filter[]
}

export interface FilterHelperHookReturn {
   filterHandler: (filter: Filter) => void
}

export interface RenderProps {
   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface FilterControllerProps {
   keyword: string
   values: Filter[]

   render: (renderProps: RenderProps) => React.ReactNode
}
