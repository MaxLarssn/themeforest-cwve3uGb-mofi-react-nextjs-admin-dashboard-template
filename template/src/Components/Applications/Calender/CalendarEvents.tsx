import { useState } from "react";
import { Button, Col, Input, Label } from "reactstrap";
import { CalenderInitialData } from "@/Data/Application/Calendar";
import { CalendarFilter, DraggableEvents, Href, RemoveAfterDrop } from "@/Constant";

const CalendarEvents = () => {
  const [openCalender, setOpenCalender] = useState(false);

  return (
    <Col xxl="3" className="box-col-4e">
      <div className="md-sidebar mb-3">
        <Button tag="a" color="primary" className="md-sidebar-toggle" href={Href} onClick={() => setOpenCalender(!openCalender)}>{CalendarFilter}</Button>
        <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${openCalender ? "open" : ""}`}>
        <div id="external-events" className="calendar-default">
          <h4>{DraggableEvents}</h4>
          <div className="external-events-list">
            {CalenderInitialData.events.map((event, index) => (
              <div className={`fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event p-md-3 p-2 text-sm mb-3 border-0 ${event.className}`} title={event.title} key={index}>
                <div className="fc-event-main">
                  <i className={`me-2 ${event.icon}`}></i>
                  {event.title}
                </div>
              </div>
            ))}
          </div>
          <p>
            <Input className="checkbox_animated" id="drop-remove" type="checkbox" />
            <Label htmlFor="drop-remove" className="m-0">{RemoveAfterDrop}</Label>
          </p>
        </div>
        </div>

      </div>
    </Col>
  );
};

export default CalendarEvents;
