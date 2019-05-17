import React from 'react'

const contact = {
    name: 'Tristan Slater',
    phone: '+1 778 922 3004',
    email: 'hello@trslater.ca',
    github: 'github.com/trslater',
    address: <React.Fragment>
        5-526 Harbinger Ave<br />
        Victoria BC<br />
        V8V 4J1
    </React.Fragment>,
}

const sections = [
    {
        name: 'Experience',
        type: 'timeline',
        items: [
            {
                position: 'Contract Designer',
                organization: 'PureSafety Inc. (now part of UL)',
                city: 'Edmonton AB',
                fromDate: '2006-09-01',
                toDate: '2008-01-01',
                body: <ul>
                    <li>Continued to expanded ActionScript ability</li>
                </ul>
            },
            {
                position: 'Contract Instructor',
                organization: 'University of Alberta\'s Technology Training Centre',
                city: 'Edmonton AB',
                fromDate: '2011-10-01',
                toDate: '2013-09-01',
                body: <ul>
                    <li>Developed and taught courses in web development</li>
                    <li>Taught cources in Microsoft Office and Creative Suite</li>
                    <li>Consistently received excellent feedback from students</li>
                </ul>,
            },
            {
                position: 'Freelance Web Developer',
                organization: 'Self Employed',
                city: 'Edmonton AB / Victoria BC',
                fromDate: '2008-05-01',
                toDate: '2016-09-01',
                body: <ul>
                    <li>Created websites for a wide variety of clients from realtors to storytellers</li>
                    <li>Managed client project life-cycle from conception to maintenance</li>
                    <li>Constantly developed and improved development process/toolchain</li>
                    <li>Learned PHP, JavaScript, and MySQL to create custom interactive content</li>
                    <li>Kept current with relevant web technologies, frameworks, such as HTML5/CSS3 and WordPress</li>
                </ul>,
            },
            {
                position: 'Full-Time Creative Designer',
                organization: 'PureSafety Inc. (now part of UL)',
                city: 'West Kelowna BC',
                fromDate: '2004-08-01',
                toDate: '2006-03-01',
                body: <ul>
                    <li>Embraced chance for learning and development</li>
                    <li>Learned ActionScript to contribute to interactive learning activities</li>
                    <li>Used scripts to automate production</li>
                </ul>,
            },
            {
                position: 'Instructor',
                organization: 'University of Alberta\'s Technology Training Centre',
                city: 'Edmonton AB',
                fromDate: '2008-08-01',
                toDate: '2009-09-01',
                body: <ul>
                    <li>Taught courses in Microsoft Office and Creative Suite</li>
                    <li>Consistently received excellent feedback from students</li>
                </ul>,
            },
        ],
    },
    {
        name: 'Education',
        type: 'timeline',
        items: [
            {
                position: 'Bachelor of Software Engineering (3rd Year)',
                organization: 'University of Victoria',
                city: 'Victoria BC',
                fromDate: '2016-09-01',
                body: <ul>
                    <li>Consistently strong performance</li>
                    <li>Cumulative GPA: 8.16</li>
                </ul>,
            },
        ],
    },
    {
        name: 'Technical Competencies',
        type: 'simple',
        body: <ul>
            <li>
                Relevant Languages
                <ul>
                    <li>Python</li>
                    <li>MySQL</li>
                    <li>MATLAB</li>
                    <li>R</li>
                </ul>
            </li>

            <li>
                Other Languages
                <ul>
                    <li>Java</li>
                    <li>C</li>
                    <li>JavaScript</li>
                    <li>PHP</li>
                    <li>HTML5/CSS3</li>
                    <li>JavaScript</li>
                </ul>
            </li>

            <li>
                Software/Dev Tools
                <ul>
                    <li>Git/Github</li>
                    <li>Docker</li>
                    <li>Visual Studio Code</li>
                    <li>Slack</li>
                    <li>Adobe CS</li>
                    <li>Microsoft Office</li>
                </ul>
            </li>

            <li>
                Linux / UNIX
                <ul>
                    <li>Filesystem</li>
                    <li>Piping/redirection</li>
                    <li>Bash/bash scripting</li>
                </ul>
            </li>
        </ul>
    },
    {
        name: 'Transferable Core Competencies',
        type: 'simple',
        body: <ul>
            <li>Problem Solver</li>
            <li>Critical Mind</li>
            <li>Attention to Detail</li>
            <li>Organized</li>
        </ul>
    },
    {
        name: 'Hobbies & Interests',
        type: 'simple',
        body: <ul>
            <li>
                Music
                <ul>
                    <li>Guitar</li>
                    <li>Song writing</li>
                    <li>Recording engineering</li>
                </ul>
            </li>
            <li>
                Outdoors
                <ul>
                    <li>Camping</li>
                    <li>Hiking</li>
                </ul>
            </li>
            <li>
                Mathematics
                <ul>
                    <li>Puzzles</li>
                    <li>Visualizations</li>
                </ul>
            </li>
            <li>
                Family
                <ul>
                    <li>Parenting</li>
                </ul>
            </li>
        </ul>
    },
]

export { contact, sections }