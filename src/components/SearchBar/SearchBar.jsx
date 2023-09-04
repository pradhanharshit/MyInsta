import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import "./SearchBar.css";
import { useTheme } from "../../context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { changeCurrentId } from "../../store/userSlice";

const SearchBar = () => {
  const { themeObject } = useTheme();
  const { allUsers } = useSelector((state) => state.users);

  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setFilteredUsers(
      search !== ""
        ? allUsers?.filter(
            (user) =>
              user?.firstName?.toLowerCase().includes(search?.toLowerCase()) ||
              user?.username?.toLowerCase().includes(search?.toLowerCase()) ||
              user?.lastName?.toLowerCase().includes(search?.toLowerCase())
          )
        : null
    );
  }, [search]);

  return (
    <div className="relative">
      <div className="search-container w-[20rem] mt-5">
        <MagnifyingGlassIcon className="stroke-blue-400 search-icon h-[20px] w-[20px]" />
        <input
          type="text"
          className="search-input rounded-3xl w-[100%]"
          placeholder="Search..."
          style={{
            backgroundColor: themeObject.secondary,
            color: themeObject.text,
          }}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      {filteredUsers !== null && (
        <div
          className="user-search h-max w-[20rem] overflow-scroll absolute z-10 p-5 rounded-2xl border-2 border-blue-400"
          style={{ backgroundColor: themeObject.secondary }}
        >
          {filteredUsers?.map((user) => {
            return (
              <div className="flex justify-between m-2" key={user._id}>
                <img
                  className="h-[40px] w-[40px] rounded-full"
                  src={user?.profilePicture}
                />
                <div className="text-center">
                  <p className="text-lg" style={{ color: themeObject.text }}>
                    {user?.firstName} {user?.lastName}
                  </p>
                  <Link
                    to={`/${user?.username}`}
                    className="text-sm underline underline-offset-1"
                    style={{ color: themeObject.text }}
                    onClick={() => {
                      dispatch(changeCurrentId(user?._id));
                    }}
                  >
                    {user?.username}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
