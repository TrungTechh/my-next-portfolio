'use client';

import { Timeline, TimelineEvent } from './TimeLineExp';

const CurrentTimeLineExp = () => {
  return (
    <Timeline>

      <TimelineEvent active>

        <TimelineEvent.Title>
         7-Eleven | Sep 2024 - Present
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          <strong className='text-white'> Fresher Data Engineer </strong>
          <li> Collaborate with cross-functional teams to address and fulfill their data requirements.</li>
          <li> Develop and maintain real-time streaming pipelines that consume data from Kafka and transform it into ClickHouse.</li>
          <li> Design and implement Airflow jobs to process large datasets in batch, including automated notifications to Google Chat for job errors, missing data, or inactive Kafka consumer groups.</li>
          <li> Utilize App Script and n8n to integrate with external services such as Google, Jira for seamless data flow and automation.</li>
          <li> Developed a chatbot for generating insights from Superset data using OpenAI API.</li>
          <li> Enabled real-time replication from PostgreSQL using logical replication and Airbyte CDC.</li>
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent>

        <TimelineEvent.Title>
          TC Data | Jun 2024 - Sep 2024
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