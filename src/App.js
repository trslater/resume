import React from 'react'
import './App.css'
import { contact, sections } from 'data/content'

import Resume from 'components/Resume'
import ResumeHeader from 'components/ResumeHeader'
import ResumeSection from 'components/ResumeSection'
import ResumeTimeline from 'components/ResumeTimeline'

const App = () => (
  <Resume>
    <ResumeHeader {...contact} />

    {sections.map(section => (
      <ResumeSection key={section.name} name={section.name}>
          {section.type === 'timeline' ? (
            <ResumeTimeline items={section.items} />
          ) : (
            <div className={'regularSection'}>
                {section.body}
            </div>
          )}
      </ResumeSection>
    ))}
  </Resume>
)

export default App
