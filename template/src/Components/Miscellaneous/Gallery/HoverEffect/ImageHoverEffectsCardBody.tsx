import { Href, ImagePath } from "@/Constant";
import { HoverImageDataList } from "@/Data/Miscellaneous/Gallery";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { CardBody, Row } from "reactstrap";

export const ImageHoverEffectsCardBody = (props: {data:number}) => {
  return (
    <CardBody className="pb-1">
      <Row className="my-gallery gallery mb-auto">
        <Gallery>
          {HoverImageDataList &&
            HoverImageDataList.map((item, index) => (
              <figure className={`mx-0 col-md-3 col-6 img-hover hover-${props.data}`} key={index}>
                <Item original={`${ImagePath}/${item}`} width="1024" height="768">
                  {({ ref, open }) => (
                    <Link href={Href} onClick={open}>
                      <div className="overflow-hidden">
                        <img ref={ref as React.MutableRefObject<HTMLImageElement>} src={`${ImagePath}/${item}`} alt="" className="w-100 h-100" />
                      </div>
                    </Link>
                  )}
                </Item>
              </figure>
            ))}
        </Gallery>
      </Row>
    </CardBody>
  );
};
