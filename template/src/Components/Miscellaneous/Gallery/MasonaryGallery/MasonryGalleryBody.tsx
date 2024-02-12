import { Href, ImagePath } from "@/Constant";
import { MasonryImageData } from "@/Data/Miscellaneous/Gallery";
import Link from "next/link";
import Masonry from "react-masonry-css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { CardBody } from "reactstrap";

export const MasonryGalleryBody = () => {
  const breakpointColumnsObj = {
    default: 4,
    1199: 3,
    700: 2,
    500: 1,
  };

  return (
    <CardBody className="photoswipe-pb-responsive">
      <Gallery>
        <Masonry breakpointCols={breakpointColumnsObj} className="my-gallery row grid gallery" columnClassName="col-md-3 col-sm-6 grid-item">
          {MasonryImageData.map((element, index) => (
            <figure key={index} className="m-0">
              <Item original={`${ImagePath}/${element.src}`} width="700" height="850">
                {({ ref, open }) => (
                  <Link href={Href} onClick={open}>
                    <img className="img-thumbnail mb-4" ref={ref as React.MutableRefObject<HTMLImageElement>} src={`${ImagePath}/${element.src}`} alt="images" />
                  </Link>
                )}
              </Item>
            </figure>
          ))}
        </Masonry>
      </Gallery>
    </CardBody>
  );
};
