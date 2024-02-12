import { Bookmark, PlusCircle } from "react-feather";
import { Button, Nav } from "reactstrap";
import { Href, NewBookmark, Tags, Views } from "@/Constant";
import BookmarkModal from "./ModalBookMark";
import ModalTag from "./ModalTag";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setAddModal, setTagModal, updateActiveTabs } from "@/Redux/Reducers/BookmarkTabSlice";
import { BookmarkSideData, BookmarkTagData } from "@/Data/Application/Bookmark";

const NavTab = () => {
  const { activeTabs, bookMarkList } = useAppSelector((state) => state.bookmarkTab);
  const dispatch = useAppDispatch();
  const onHandleClick = (id: string) => { dispatch(updateActiveTabs(id)); };

  return (
    <Nav className="main-menu" role="tablist">
      <li>
        <Button block color="primary" className="badge-primary btn-mail" onClick={() => dispatch(setAddModal())}>
          <Bookmark className="me-2" />{NewBookmark}
          <BookmarkModal />
        </Button>
      </li>
      <li><span className="main-title f-w-700">{Views}</span></li>
      {BookmarkSideData.map((data, index) => (
        <li key={index}>
          <a className={`show ${activeTabs === data.value ? "active" : ""}`} onClick={() => onHandleClick(data.value)} href={Href}>
            <span className="title"> {data.title} {data.title === "Favorites" && `(${bookMarkList.length})`}</span>
          </a>
        </li>
      ))}
      <li><hr /></li>
      <li>
        <span className="main-title f-w-700">{Tags}
          <span className="pull-right" onClick={() => dispatch(setTagModal())}><a href={Href}><PlusCircle /></a></span>
        </span>
      </li>
      <ModalTag />
      {BookmarkTagData.map((data, index) => (
        <li key={index}>
          <a className={`show ${activeTabs === data.value ? "active" : ""}`} onClick={() => onHandleClick(data.value)} href={Href}>
            <span className="title"> {data.title}</span>
          </a>
        </li>
      ))}
    </Nav>
  );
};

export default NavTab;