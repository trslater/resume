import React from 'react'

import { slugify, formatDate } from 'logic/util'

const ResumeTimelineItem = ({
  position,
  organization,
  city,
  fromDate,
  toDate,
  body,
}) => {
  const fromDateFormatted = formatDate(fromDate)
  const toDateFormatted = toDate === undefined ? 'present' : formatDate(toDate)

  const slug = slugify(`${position} ${organization}`)

  return (
    <section className={'item'} id={slug}>
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
}

export default ResumeTimelineItem
