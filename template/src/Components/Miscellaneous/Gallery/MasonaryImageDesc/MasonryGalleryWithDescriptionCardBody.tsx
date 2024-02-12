import { Href, ImagePath, PortfolioTitle } from "@/Constant";
import { MasonryImageData } from "@/Data/Miscellaneous/Gallery";
import Link from "next/link";
import Masonry from "react-masonry-css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { CardBody } from "reactstrap";

export const MasonryGalleryWithDescriptionCardBody = () => {
  const description :string = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy." 

  const breakpointColumnsObj = {
    default: 4,
    1199: 3,
    700: 2,
    500: 1,
  };

  return (
    <CardBody className="photoswipe-pb-responsive">
      <Gallery withCaption>
        <Masonry breakpointCols={breakpointColumnsObj} className="my-gallery row grid gallery-with-description" columnClassName="grid-item col-xl-3 col-sm-6">
          {MasonryImageData.map((element, index) => (
            <li style={{ listStyle: "none" }} key={index} className="p-0">
              <figure className="m-0">
                <Item original={`${ImagePath}/${element.src}`} width="700" height="750" caption={description}>
                  {({ ref, open }) => (
                    <Link href={Href} onClick={open}>
                      <img className="img-thumbnail p-2 rounded-0 rounded-top-1" ref={ref as React.MutableRefObject<HTMLImageElement>} src={`${ImagePath}/${element.src}`} alt="images" />
                      <div className="caption border-top-0 p-2">
                        <h4 className="mt-0">{PortfolioTitle}</h4>
                        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                      </div>
                    </Link>
                  )}
                </Item>
              </figure>
            </li>
          ))}
        </Masonry>
      </Gallery>
    </CardBody>
  );
};
