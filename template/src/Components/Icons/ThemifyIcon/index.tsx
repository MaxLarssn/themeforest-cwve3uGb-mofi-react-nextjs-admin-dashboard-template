import { useCallback, useState } from "react";
import { Container, Row } from "reactstrap";
import ThemifyIconCard from "./ThemifyIconCard";
import { ThemifyIconData } from "@/Data/Icons";
import IconMarkUp from "../Icon-markup";

const ThemifyIconContainer = () => {
    const [iTag, setITag] = useState<string | object>("");
    const [icon, setIcon] = useState<string | object>("");
  
    const callback = useCallback((tag: string) => {
      setITag({
        iTag: '<i className="'+ tag + '"></i>',
      });
      setIcon({
        icon: "" + tag + " fa-2x",
      });
    }, []);
    return (
      <>
        <Container fluid>
          {ThemifyIconData.map((item, i) => {
            return (
              <Row key={i}>
                <ThemifyIconCard iconType={item.data} title={item.title} parentCallback={callback} />
              </Row>
            );
          })}
        </Container>
        <IconMarkUp itag={iTag} icons={icon} />
      </>
    );
};

export default ThemifyIconContainer;
