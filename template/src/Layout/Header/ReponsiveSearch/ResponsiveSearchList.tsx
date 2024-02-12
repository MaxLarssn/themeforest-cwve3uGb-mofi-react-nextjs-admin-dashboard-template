import SVG from "@/CommonComponent/SVG";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setResponsiveSearch } from "@/Redux/Reducers/LayoutSlice";
import { SearchSuggestionListType } from "@/Types/LayoutTypes";
import Link from "next/link";

const ResponsiveSearchList = ({ searchedArray, setSearchedWord }: SearchSuggestionListType) => {
  const dispatch = useAppDispatch();
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);
  
  const handleSearch = () => {
    setSearchedWord("");
    dispatch(setResponsiveSearch());
  };

  return (
    <>
      {searchedArray?.map((item, index) => (
        <div className="ProfileCard u-cf" key={index}>
          <div className="ProfileCard-avatar">
            <SVG className="feather feather-airplay m-0" iconId={`stroke-${item.icon}`} />
          </div>
          <div className="ProfileCard-details">
            <div className="ProfileCard-realName">
              <Link className="realname w-auto d-flex justify-content-start gap-2" href={`/${i18LangStatus}/${item.path}`} onClick={handleSearch}>{item.title}</Link>
            </div>
          </div>
        </div>
      ))}
      {!searchedArray?.length && <p>Opps!! There are no result found.</p>}
    </>
  );
};

export default ResponsiveSearchList;
