import SVG from "@/CommonComponent/SVG";
import { SearchMofi } from "@/Constant";
import { ChangeEvent, useEffect, useState } from "react";
import SearchSuggestionList from "./SearchSuggestionList";
import { MenuList } from "@/Data/Layout/Menu";
import { MenuItem, SearchSuggestionItem } from "@/Types/LayoutTypes";
import { getLinkItemsArray } from "@/Redux/Reducers/HeaderBookmarkSlice";
import { useAppDispatch } from "@/Redux/Hooks";

export const HeaderSearch = () => {
  const dispatch = useAppDispatch();
  const [arr, setArr] = useState<SearchSuggestionItem[]>([]);
  const [searchedWord, setSearchedWord] = useState<string>("");
  const [searchedArray, setSearchedArray] = useState<SearchSuggestionItem[]>([]);

  useEffect(() => {
    const suggestionArray: SearchSuggestionItem[] = [];
    let num = 0;
    const getAllLink = (item: MenuItem, icon: string | undefined) => {
      if (item.children) {
        item.children.forEach((ele) => {
          getAllLink(ele, icon);
        });
      } else {
        num = num + 1;
        suggestionArray.push({ icon: icon, title: item.title, path: item.path ? item.path : '' , bookmarked: false, id: num });
      }
    };
    MenuList?.forEach((item) => {
      item.Items?.forEach((child) => {
        getAllLink(child, child.icon);
      });
    });
    setArr(suggestionArray);
    dispatch(getLinkItemsArray(suggestionArray));
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (!searchedWord) setSearchedWord("");
    setSearchedWord(e.target.value);
    const result = arr.filter((item) =>item.title?.toLowerCase().includes(e.target.value.toLowerCase()));
    setSearchedArray(result);
  };

  return (
    <li>
      <div className="form-group m-0 w-100">
        <div className="Typeahead Typeahead--twitterUsers">
          <div className="u-posRelative d-flex align-items-center">
            <SVG className="search-bg svg-color" iconId="search" />
            <input className="demo-input py-0 Typeahead-input form-control-plaintext w-100 border-0" type="text" placeholder={SearchMofi} name="q" title="" onChange={(e) => handleSearch(e)} value={searchedWord}/>
          </div>
          <div className={`Typeahead-menu w-auto custom-scrollbar ${searchedWord.length ? "is-open" : ""}`}>
            <SearchSuggestionList searchedArray={searchedArray} setSearchedWord={setSearchedWord}/>
          </div>
        </div>
      </div>
    </li>
  );
};