import { SparklesIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { ClickOutHandler } from "react-clickout-ts";
import { useTheme } from "../../context/ThemeContext";

const Filter = ({ sort, setSort }) => {
  const [openFilter, setOpenFilter] = useState(false);
  const { themeObject } = useTheme();

  return (
    <>
      <div className="flex justify-end items-center mt-[1rem] w-[85%]">
        <div>
          <SparklesIcon
            className="h-8 w-8 stroke-blue-400"
            onClick={() => {
              setOpenFilter(!openFilter);
            }}
          />
          <ClickOutHandler onClickOut={() => setOpenFilter(false)}>
            <div className="relative">
              {openFilter && (
                <div
                  className="absolute right-0 border-2 border-blue-400 p-2 rounded-2xl"
                  style={{
                    backgroundColor: themeObject.secondary,
                    color: themeObject.text,
                  }}
                >
                  <button
                    className={`${sort === "recent" ? "underline" : null} mt-1`}
                    onClick={() => {
                      setSort("recent");
                    }}
                  >
                    Recent
                  </button>
                  <button
                    className={`${sort === "older" ? "underline" : null} mt-1`}
                    onClick={() => {
                      setSort("older");
                    }}
                  >
                    Older
                  </button>
                  <button
                    className={`${
                      sort === "trending" ? "underline" : null
                    } mt-1`}
                    onClick={() => {
                      setSort("trending");
                    }}
                  >
                    Trending
                  </button>
                  <button
                    className="underline mt-2 text-sm"
                    onClick={() => {
                      setSort("");
                    }}
                  >
                    Clear
                  </button>
                </div>
              )}
            </div>
          </ClickOutHandler>
        </div>
      </div>
    </>
  );
};

export default Filter;
