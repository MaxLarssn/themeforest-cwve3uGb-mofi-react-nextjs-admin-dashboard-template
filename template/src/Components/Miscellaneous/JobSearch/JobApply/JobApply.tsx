import { Href, ImagePath, JobCancelButton, JobPersonalDetails, JobSubmitButton, JobUIDesigner, JobUploadYourFiles, JobYourEducation, JobYourExperience, StarColorTwo } from "@/Constant";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";
import { Button, Card, CardBody, CardFooter } from "reactstrap";
import EducationClass from "./Education";
import ExperienceClass from "./Experience";
import PersonalDetail from "./PersonalDetail";
import UploadFileClass from "./UploadFile";

const JobApply = () => {
  return (
    <Card>
      <div className="job-search">
        <CardBody className="pb-0">
          <div className="d-flex">
            <img className="img-40 b-r-0 img-fluid  m-r-20" src={`${ImagePath}/job-search/1.jpg`} alt=""/>
            <div className="flex-grow-1">
              <h6 className="f-w-600">
                <Link href={Href}>{JobUIDesigner}</Link>
                <span className="pull-right">
                  <Button color="primary"><span><i className="fa fa-check text-white" /></span> Save this job</Button>
                </span>
              </h6>
              <p>Save this job <Rating className="ms-1" fillColor={StarColorTwo} initialValue={Math.random()*5} size={15} /></p>
            </div>
          </div>
          <div className="job-description">
            <h4 className="mb-0">{JobPersonalDetails}</h4>
            <PersonalDetail />
            <h4 className='mb-0'>{JobYourEducation}</h4>
            <EducationClass />
            <h4  className= 'mb-0' >{JobYourExperience}</h4>
            <ExperienceClass />
            <h4 className='mb-0'>{JobUploadYourFiles}</h4>
            <UploadFileClass />
          </div>
        </CardBody>
        <CardFooter>
          <Button color="primary mx-1">{JobSubmitButton}</Button>
          <Button color="light">{JobCancelButton}</Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default JobApply;
