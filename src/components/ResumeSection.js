import React from 'react'

import { slugify } from 'logic/util'

const ResumeSection = ({ name, children }) => (
  <section id={slugify(name)}>
    <h2>{name}</h2>
    {children}
  </section>
)

export default ResumeSection
