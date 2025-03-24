import React from 'react'
import { Filter, ChevronDown } from "lucide-react";

const FilterButton = ({handleClick}) => {
    return (
        <button className="flex items-center gap-2 border-2 my-3 ml-5 cursor-pointer border-[#5E2D29] text-[#5E2D29] px-5 py-2 rounded-full hover:bg-[#5E2D29] hover:text-white transition" onClick={handleClick}>
            <Filter className="w-5 h-5" />
            <span className="font-medium">Filter</span>
            <ChevronDown className="w-4 h-4" />
        </button>
    )
}

export default FilterButton