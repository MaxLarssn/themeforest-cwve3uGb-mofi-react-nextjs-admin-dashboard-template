import { ImagePath } from "@/Constant";
import { FeaturedCourseData } from "@/Data/General/Dashboard/Education";
import { useAppSelector } from "@/Redux/Hooks";
import Link from "next/link";
import { useState } from "react";
import { Bookmark, Star } from "react-feather";

type BookMarkState = Record<string, boolean>;

const FeaturedCoursesBody = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const [bookMark, setBookMark] = useState<BookMarkState>({});
  
  const toggle = (id:string) => {
    const updatedBookMark = { ...bookMark };
    updatedBookMark[id] = !updatedBookMark[id]
    setBookMark(updatedBookMark);
  };

  return (
    <tbody>
      {FeaturedCourseData.map((data, i) => (
        <tr key={i}>
          <td>
            <div className="d-flex align-items-center gap-2">
              <div className="flex-shrink-0">
                <img src={`${ImagePath}/dashboard-4/featured/${data.image}`} alt="featured" />
              </div>
              <div className="flex-grow-1">
                <Link href={`/${i18LangStatus}/ecommerce/product_page`}><h5>{data.title}</h5></Link>
                <span>{data.name}</span>
              </div>
            </div>
          </td>
          <td>{data.date}</td>
          <td><span className="d-flex align-item-center gap-2 font-primary"><Star className="font-primary"/>{data.ratting}</span></td>
          <td>{data.type}</td>
          <td className={bookMark[data.id] ? "clicked-color" : "initial-color"} id={data.id}>
            <Bookmark onClick={() => toggle(data.id)} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default FeaturedCoursesBody;
