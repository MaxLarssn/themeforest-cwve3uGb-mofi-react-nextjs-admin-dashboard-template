import { Row, Col } from "reactstrap";
import { AddNewBookmark, Bookmark, Href } from "@/Constant";
import Link from "next/link";
import { setFlip } from "@/Redux/Reducers/LayoutSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { useRouter } from "next/navigation";
import SVG from "@/CommonComponent/SVG";

export const BookmarkListData = () => {
  const {bookmarkedData} = useAppSelector((state)=>state.headerBookMark)
  const {i18LangStatus} = useAppSelector((state)=>state.langSlice)
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <div className="front">
      <h5 className="f-18 f-w-600 mb-0 dropdown-title">{Bookmark}</h5>
      <ul className="bookmark-dropdown">
        <li className="custom-scrollbar">
          <Row>
            {bookmarkedData.map((item, index) => (
              <Col xs="4" className="text-center mb-2" key={index}>
                <div className="bookmark-content" onClick={() => router.push(`/${i18LangStatus}${item.path}`)}>
                  <div className={`bookmark-icon bg-light-${item.color ? item.color : "primary"}`}><SVG className={`stroke-icon stroke-${item.color ? item.color : "primary" }`} iconId={`stroke-${item.icon}`}/></div>
                  <span className={`font-${item.color ? item.color : "primary" }`}>{item.title}</span>
                </div>
              </Col>
            ))}
          </Row>
        </li>
        <li className="text-center m-0" onClick={()=>dispatch(setFlip())}>
          <Link className="flip-btn f-w-700" id="flip-btn" href={Href}>{AddNewBookmark}</Link>
        </li>
      </ul>
    </div>
  );
};
  