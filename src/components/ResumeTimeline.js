import React from 'react'

import ResumeTimelineItem from 'components/ResumeTimelineItem'

const ResumeTimeline = ({ items }) =>
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
    .map(item => (
      <ResumeTimelineItem
        key={`${item.position} ${item.organization}`}
        {...item}
      />
    ))

export default ResumeTimeline
