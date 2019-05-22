import React from 'react'

import { slugify, formatDate } from 'logic/util'

const ResumeTimeline = ({ items }) => {
  return (
    items
      // Sort by to date
      .sort((a, b) => {
        if (a.toDate < b.toDate) {
          return -1
        } else if (a.toDate > b.toDate) {
          return 1
        } else {
          return 0
        }
      })
      .reverse()
      .map(item => {
        const { position, organization, city, fromDate, toDate, body } = item

        const fromDateFormatted = formatDate(fromDate)
        const toDateFormatted =
          toDate === undefined ? 'present' : formatDate(toDate)

        const slug = slugify(`${position} ${organization}`)

        return (
          <section className={'item'} id={slug} key={slug}>
            <header>
              <div className={'date'}>
                {fromDateFormatted}–{toDateFormatted}
              </div>
              <div className={'location'}>{city}</div>
            </header>

            <div className={'body'}>
              <h3>{position}</h3>
              <h4>{organization}</h4>
              {body}
            </div>
          </section>
        )
      })
  )
}

export default ResumeTimeline
