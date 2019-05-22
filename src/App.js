import React from 'react';
import './App.css';
import { contact, sections } from 'data/content'
import { slugify, formatDate } from 'logic/util'

const App = () => {
  const { name, phone, email, github, address } = contact

  return <article id={'resume'} className={'grid'}>
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

    {sections.map(section => {
      const slug = slugify(section.name)

      return <section
        key={slug}
        id={slug}
        className={(section.type === 'timeline')
          ? 'timelineSection'
          : 'regularSection'}
      >
        <h2>{section.name}</h2>
        {(section.type === 'timeline') ? section.items.sort((a, b) => {
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

                return <section
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
              }) : section.body}
      </section>
    })}
  </article>
}

export default App;
