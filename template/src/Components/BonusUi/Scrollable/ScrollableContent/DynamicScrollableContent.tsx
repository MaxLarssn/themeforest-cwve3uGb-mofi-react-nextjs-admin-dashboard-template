import { Href, ImagePath } from "@/Constant";
import { ScrollableContentDataList } from "@/Data/BonusUi/Scrollable";
import { ListGroupItem } from "reactstrap";

export const DynamicScrollableContent = () => {
  return (
    <>
      {ScrollableContentDataList.map(({ text, mail, days, src }, index) => (
        <ListGroupItem tag="a" className="list-group-item-action list-hover-primary" href={Href} key={index}>
          <div className="list-wrapper gap-0">
            <img className="list-img" src={`${ImagePath}/${src}`} alt="profile" />
            <div className="list-content">
              <h6>{text}</h6>
              <p>{mail}</p>
              <small className="text-muted">{days}</small>
            </div>
          </div>
        </ListGroupItem>
      ))}
    </>
  );
};
