import React from 'react';
import './Experience.css';

// Experience data, with dates in MM-YYYY format
const experiences = [
  {
    type: 'work',
    title: 'Certified Trainer & Shift Supervisor',
    company: "Raising Cane's",
    start: '01-2024',
    end: '10-2024',
    description: 'Identified as a high-potential employee and fast-tracked for a managerial role. Routinely trained team members on crew member tasks while maintaining operational efficiency and customer satisfaction.'
  },
  {
    type: 'work',
    title: 'Junior Analyst',
    company: 'Panther Equity',
    start: '09-2024',
    end: '05-2025',
    description: 'Utilized Excel & financial modeling tools to assess investment opportunities, performing quantitative analysis. Prepared reports and presentations analyzing activity & trends in the stock market, especially the technology sector.'
  },
  {
    type: 'leadership',
    title: 'President',
    company: 'Golden Oaks Designs',
    start: '08-2023',
    end: '05-2024',
    description: 'Led the club, organized tournaments, and increased membership by 30%. Fostered a welcoming environment for players of all skill levels.'
  },
  // Add more experiences as needed
];

// Color mapping for experience types
const typeColors = {
  work: '#2196f3',
  leadership: '#ffd700',
  project: '#4caf50',
};

// Helper to get months between two MM-YYYY dates
function getMonthDiff(start, end) {
  const [sm, sy] = start.split('-').map(Number);
  const [em, ey] = end.split('-').map(Number);
  return (ey - sy) * 12 + (em - sm);
}

// Timeline range (most recent at top)
const timelineStart = '06-2023'; // oldest
const timelineEnd = '07-2025';   // most recent
const totalMonths = getMonthDiff(timelineStart, timelineEnd);
const timelineHeight = 800; // px
const pxPerMonth = timelineHeight / totalMonths;

// Get vertical position for a date (inverted for most recent at top)
function getTop(date) {
  return getMonthDiff(date, timelineEnd) * pxPerMonth;
}

// Experience box component with connector
function ExperienceBox({ type, title, company, start, end, description, style, side }) {
  // Connector class for left/right
  const connectorClass = side === 'left' ? 'connector-left' : 'connector-right';
  return (
    <div className={`experience-box ${type} ${side}`} style={style}>
      <div className={`timeline-connector ${connectorClass}`}></div>
      <h3>{title}</h3>
      <div className="company">{company}</div>
      <div className="dates">{start} - {end}</div>
      <p>{description}</p>
    </div>
  );
}

// Generate ticks for years, half-years, and quarters
function TimelineTicks() {
  const ticks = [];
  const [startM, startY] = timelineStart.split('-').map(Number);
  const [endM, endY] = timelineEnd.split('-').map(Number);
  let months = (endY - startY) * 12 + (endM - startM);
  for (let i = 0; i <= months; i++) {
    const date = new Date(startY, startM - 1 + i);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const label = `${month.toString().padStart(2, '0')}-${year}`;
    const top = getTop(`${month.toString().padStart(2, '0')}-${year}`);
    let tickClass = '';
    let showLabel = false;
    if (month === 1) { // Major tick: January (new year)
      tickClass = 'tick-major';
      showLabel = true;
    } else if (month === 7) { // Medium tick: July (half-year)
      tickClass = 'tick-medium';
    } else if (month % 3 === 1) { // Minor tick: every quarter (Jan, Apr, Jul, Oct)
      tickClass = 'tick-minor';
    }
    ticks.push(
      <React.Fragment key={label}>
        <div className={`timeline-tick ${tickClass}`} style={{ top }}></div>
        {showLabel && (
          <div className="timeline-label" style={{ top }}>{year}</div>
        )}
      </React.Fragment>
    );
  }
  return ticks;
}

// Main Experience section
export default function Experience() {
  return (
    <section id="experience" className="experience-section">
        <div className="experience-container">
          <h2 className="experience-title">Experience 💼</h2>
          <div className="timeline-key">
            <span className="key work"></span> Work
            <span className="key leadership"></span> Leadership
            <span className="key project"></span> Project
          </div>
          <div className="timeline" style={{ height: timelineHeight }}>
            {/* Timeline line */}
            <div className="timeline-line"></div>
            {/* Ticks and year labels */}
            <TimelineTicks />
            {/* Experience boxes */}
            {experiences.map((exp, i) => (
              <ExperienceBox
                key={i}
                {...exp}
                side={i % 2 === 0 ? 'left' : 'right'}
                style={{
                  top: getTop(exp.start),
                  borderColor: typeColors[exp.type] || '#fff',
                }}
              />
            ))}
          </div>
        </div>
    </section>
  );
}