import { Row } from "reactstrap";
import { ImageAbout } from "@/Constant";
import PagesSort from "./Pages";
import { DescriptionMyGallery } from "@/Components/Miscellaneous/Gallery/GalleryDridDesc/DescriptionMyGallery";

const PhotosTab = () => {
  return (
    <>
      <h6 className="mb-2">{ImageAbout}</h6>
      <Row className="my-gallery gallery-with-description">
        <DescriptionMyGallery />
      </Row>
      <PagesSort pageClass="start" />
    </>
  );
};

export default PhotosTab;
