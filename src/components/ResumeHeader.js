import React from 'react'

const ResumeHeader = ({ name, phone, email, github, address }) => (
  <header>
    <div id={'me'}>
      <h1>Tristan Slater</h1>
    </div>

    <ul id={'contact'}>
      <li><a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>

      </li><li><a href={`mailto:${name} <${email}>`} target={'_blank'}>{email}</a></li>

      <li><a href={`https://${github}`}>{github}</a></li>
    </ul>

    <div id={'address'}>{address}</div>
  </header>
)

export default ResumeHeader