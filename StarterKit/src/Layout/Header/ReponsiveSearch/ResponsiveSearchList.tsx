import SVG from "@/CommonComponent/SVG";
import { Href } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setResponsiveSearch } from "@/Redux/Reducers/LayoutSlice";
import { SearchSuggestionListType } from "@/Types/LayoutTypes";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ResponsiveSearchList = ({ searchedArray, setSearchedWord }: SearchSuggestionListType) => {
  const dispatch = useAppDispatch();
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);
  const router = useRouter();
  
  const handleSearch = (path:string) => {
    setSearchedWord("");
    dispatch(setResponsiveSearch());
    router.push(`/${i18LangStatus}/${path}`)
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
              <Link className="realname  w-auto d-flex justify-content-start gap-2" href={Href} onClick={()=>handleSearch(item.path)}>{item.title}</Link>
            </div>
          </div>
        </div>
      ))}
      {!searchedArray?.length && <p>Opps!! There are no result found.</p>}
    </>
  );
};

export default ResponsiveSearchList;
