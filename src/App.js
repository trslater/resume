import React from 'react';
import './App.css';
import { contact, sections } from 'data/content'
import { slugify, formatDate } from 'logic/util'

import ResumeHeader from 'components/ResumeHeader'
import ResumeSection from 'components/ResumeSection'

const App = () => {
  const { name, phone, email, github, address } = contact

  return <article id={'resume'} className={'grid'}>
    <ResumeHeader {...{ name, phone, email, github, address }} />

    {sections.map(section => (
      <ResumeSection name={section.name}>
        {section.type === 'timeline'
          ? (section.items.sort((a, b) => {
            if (a.toDate < b.toDate) {
              return -1;
            } else if (a.toDate > b.toDate) {
              return 1;
            } else {
              return 0;
            }
          }).reverse().map(item => {
            const {
              position,
              organization,
              city,
              fromDate,
              toDate,
              body
            } = item

            const fromDateFormatted = formatDate(fromDate)
            const toDateFormatted = (toDate === undefined)
              ? 'present'
              : formatDate(toDate)

            return (
              <section
                className={'item'}
                id={slugify(`${position} ${organization}`)}
              >
                <header>
                  <div className={'date'}>{fromDateFormatted}–{toDateFormatted}</div>
                  <div className={'location'}>{city}</div>
                </header>

                <div className={'body'}>
                  <h3>{position}</h3>
                  <h4>{organization}</h4>
                  {body}
                </div>
              </section>
            )
          })) : section.body}
      </ResumeSection>
    ))}
  </article>
}

export default App;
