import { Likes, View } from "@/Constant";
import { Button } from "reactstrap";

const LikesViewButton = () => {
  return (
    <div className="social-btngroup d-flex">
      <Button color="primary" className="text-center">{Likes}</Button>&nbsp;
      <Button color="light" className="text-center ms-2">{View}</Button>
    </div>
  );
};

export default LikesViewButton;
