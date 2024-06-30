'use client';

import { Timeline, TimelineEvent } from './TimeLineExp';

const CurrentTimeLineExp = () => {
  return (
    <Timeline>

      <TimelineEvent active>

        <TimelineEvent.Title>
          Freelance | Feb 2024 - Currently
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          <li> Developed and maintained web crawlers to extract data from various websites using Python and Scrapy.</li>
          <li> Created interactive and insightful reports using Power BI.</li>
          <li> Designed and implemented scalable and efficient database schemas for various projects.</li>
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent last>

        <TimelineEvent.Title>
          Inter-K JSC | Nov 2023 - Jan 2024
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          
          <strong className='text-white'> Data Analyst Intern</strong>
          <li> Converted approximately 100 SAP crystal reports into paginated reports using PowerBI Report Builder.</li>
          <li> Provided guidance to counterparts on the utilization of the PowerBI Report Builder.</li>
        </TimelineEvent.Description>

      </TimelineEvent>

    </Timeline>
  )
}

export default CurrentTimeLineExp;