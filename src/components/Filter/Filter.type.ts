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
   filterHandler: (filter: Filter, isMulti: boolean) => void
}

export interface RenderProps {
   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface FilterControllerProps {
   keyword: string
   values: Filter[]
   isMulti?: boolean
   render: (renderProps: RenderProps) => React.ReactNode
}
