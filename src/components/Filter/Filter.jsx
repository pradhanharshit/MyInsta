import {SparklesIcon} from "@heroicons/react/24/outline"
import { useState } from "react"
import { ClickOutHandler } from "react-clickout-ts"

const Filter = () => {
  const [openFilter, setOpenFilter] = useState(false);

  return (
      <>
        <div className="flex justify-end items-center mt-[1rem] w-[85%]">
        <div>
        <SparklesIcon className="h-8 w-8 stroke-blue-400" onClick={() => {
          setOpenFilter(!openFilter)
        }}/>
        <ClickOutHandler onClickOut={() => setOpenFilter(false)}>
          <div className="relative">
            {openFilter && 
            <div className="absolute right-0 bg-blue-400 text-white p-2 rounded-2xl">
              <button>clear</button>
              <button>recent</button>
              <button>trending</button>
            </div>
            }
          </div>
        </ClickOutHandler>
        </div>
        </div>
        
      </>
  )
}

export default Filter