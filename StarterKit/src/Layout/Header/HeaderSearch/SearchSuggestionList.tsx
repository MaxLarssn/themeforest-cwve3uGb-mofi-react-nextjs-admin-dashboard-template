import SVG from "@/CommonComponent/SVG";
import { useAppSelector } from "@/Redux/Hooks";
import { SearchSuggestionListType } from "@/Types/LayoutTypes";
import { useTranslation } from "@/app/i18n/client";
import Link from "next/link";

const SearchSuggestionList = ({ searchedArray, setSearchedWord }: SearchSuggestionListType) => {
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);

  return (
    <>
      {searchedArray?.map((item, index) => (
        <div className="ProfileCard u-cf" key={index}>
          <div className="ProfileCard-avatar">
            <SVG className="feather feather-airplay m-0" iconId={`stroke-${item.icon}`} />
          </div>
          <div className="ProfileCard-details">
            <div className="ProfileCard-realName">
              <Link className="realname  w-auto d-flex justify-content-start gap-2" href={`/${i18LangStatus}/${item.path}`} onClick={() => setSearchedWord("")}>
                {item.title}
              </Link>
            </div>
          </div>
        </div>
      ))}
      {!searchedArray?.length && <p>Opps!! There are no result found.</p>}
    </>
  );
};

export default SearchSuggestionList;
