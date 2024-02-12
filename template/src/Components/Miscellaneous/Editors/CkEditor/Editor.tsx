import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CKEditorExample } from "@/Constant";
import { Card, CardBody, Col } from "reactstrap";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

const Editor = () => {
  const content = `Launched by a Saturn V rocket from Kennedy Space Center in Merritt Island, Florida on July 16, Apollo 11 was the fifth manned mission of NASA's Apollo program. The Apollo spacecraft had three parts: Command Module with a cabin for the three astronauts which was the only part which landed back on Earth Service Module which supported the Command Module with propulsion, electrical power, oxygen and water Lunar for on the Moon. After being sent to the Moon by the Saturn V's upper stage, the astronauts separated the spacecraft from it and travelled for three days until they entered into lunar orbit. Armstrong and Aldrin then moved into the Lunar Module and landed in the Sea of Tranquility. They stayed a total of about 21 and a half hours on the lunar surface. After lifting off in the upper part of the Lunar Module and rejoining Collins in the Command Module, they returned to Earth and landed in the Pacific Ocean on July 24. <br/><br/><br/><br/><br/>`

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={CKEditorExample} />
        <CardBody>
          <CKEditor editor={ClassicEditor} data={content} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Editor;