import { AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";

export const StaticAccordion = () => {
  return (
    <AccordionItem>
      <AccordionHeader targetId="1" className="bg-light-success text-success">
        <span className="text-success">What is bootstrap?</span>
      </AccordionHeader>
      <AccordionBody accordionId="1">
        <p>
          {`-->`} Bootstrap is the most popular HTML, CSS and JavaScript framework for developing a responsive and mobile friendly website.
          <br />
          {`--> `}It is absolutely free to download and use.
        </p>
      </AccordionBody>
    </AccordionItem>
  );
};
