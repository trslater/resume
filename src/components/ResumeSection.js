import React from 'react'

import { slugify } from 'logic/util'

const ResumeSection = ({ name, children }) => {
  const slug = slugify(name)

  return (
    <section key={slug} id={slug}>
      <h2>{name}</h2>
      {children}
    </section>
  )
}

export default ResumeSection