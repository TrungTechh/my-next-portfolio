'use client';

import { Timeline, TimelineEvent } from './TimeLineExp';

const CurrentTimeLineExp = () => {
  return (
    <Timeline>

      <TimelineEvent active>

        <TimelineEvent.Title>
          TC Data | Jun 2024 - Currently
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          <strong className='text-white'> Trainee Data Engineer </strong>
          <li> Developmodules using SQL Server to help stakeholders meet their data needs.</li>
          <li> Engageindiscussions with stakeholders to thoroughly verify and understand the issues present in the data.</li>
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent last>

        <TimelineEvent.Title>
          Inter-K JSC | Nov 2023 - Jan 2024
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          
          <strong className='text-white'> Data Engineer Intern</strong>
          <li> Converted approximately 100 SAP crystal reports into paginated reports using PowerBI Report Builder.</li>
          <li> Provided guidance to counterparts on the utilization of the PowerBI Report Builder.</li>
        </TimelineEvent.Description>

      </TimelineEvent>

    </Timeline>
  )
}

export default CurrentTimeLineExp;