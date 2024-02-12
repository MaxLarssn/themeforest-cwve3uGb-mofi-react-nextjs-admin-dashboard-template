/* eslint-disable no-throw-literal */
import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";
import { AjaxRequestMovies, MovieMode } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AjaxData } from "@/Data/BonusUi/SweetAlert";

const AjaxRequestMovie = () => {
  const displayAlert = () => {
    SweetAlert.fire({text: 'Search for a movie. e.g. "Herry Poter".',input: "text",confirmButtonColor: "#7A70BA",})
      .then((name) => {
        if (name) return fetch(`https://itunes.apple.com/search?term=${name.value}&entity=movie`);
        throw null;
      })
      .then((results) => {return results.json();})
      .then((json) => {
        const movie = json.results[0];
        if (!movie) return SweetAlert.fire({ text: "No movie was found!", confirmButtonColor: "#7A70BA" });
        const name = movie.trackName;
        const imageURL = movie.artworkUrl100;
        SweetAlert.fire({title: "Top result:",imageUrl: imageURL,text: name,});
      })
      .catch((err) => {if (err) SweetAlert.fire("Oh noes!", "The AJAX request failed!", "error");});
  };

  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card className="height-equal">
        <CommonCardHeader title={AjaxRequestMovies} span={AjaxData} />
        <CardBody className="btn-showcase">
          <Button color="secondary" className="sweet-15" onClick={displayAlert}>{MovieMode}</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AjaxRequestMovie;
