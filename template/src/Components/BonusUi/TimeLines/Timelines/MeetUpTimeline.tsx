import { MeetUpTimelineTitle, PleaseMeetUp, WebDesignersMeeUp } from '@/Constant';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Badge } from 'reactstrap';

const MeetUpTimeline = () => {
const MeetUpText: string = "Find nearby web designers to network with! A Web Design Meetup is a place where you can discuss tools.";

   return (
     <VerticalTimelineElement className='vertical-timeline-element--work' date='November 04 2023' icon={<i className='icon-pin-alt'></i>} iconClassName='cd-timeline-img cd-location bg-secondary'>
       <div className='timeline-wrapper'>
         <Badge color='success'>{MeetUpTimelineTitle}</Badge>
       </div>
       <h4 className='m-0 vertical-timeline-element-subtitle'>{WebDesignersMeeUp}</h4>
       <p className='mb-0'>{MeetUpText}</p>
       <div className='time-content pt-2'>
         <i className='icon-android'></i>
         <h5>{PleaseMeetUp}</h5>
       </div>
     </VerticalTimelineElement>
   );
}
export default MeetUpTimeline;