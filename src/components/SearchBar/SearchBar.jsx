import {MagnifyingGlassIcon} from "@heroicons/react/24/outline"
import "./SearchBar.css"

const SearchBar = () => {
  return (
    <div className="search-container w-[21.5rem] mt-5">
    <MagnifyingGlassIcon className="stroke-blue-400 search-icon h-[20px] w-[20px]"/>
    <input type="text" className="search-input rounded-3xl w-[100%]" placeholder="Search..." />
    </div>
  )
}

export default SearchBar