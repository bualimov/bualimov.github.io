import React from 'react';
import './Education.css';
import cathedral from '../images/cathedral.png';

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h2 className="education-title">Education 👨‍🎓</h2>
        <div className="education-content">
          <div className="education-image">
            <img src={cathedral} alt="Cathedral of Learning" />
          </div>
          <div className="education-text">
            <h3>University of Pittsburgh</h3>
            <p>📍 3990 Fifth Ave, Pittsburgh, PA</p>
          </div>
        </div>   
      </div>
    </section>
  );
}
        // <section id="education" className="education-section">
        //     <div className="education-container">
        //         <h2 className="education-title">Education 👨‍🎓</h2>
        //         <div className="education-content">
        //             <div className="education-image">
        //                 <img src={cathedral} alt="Cathedral of Learning" />
        //             </div>
        //             <div className="education-text">
        //                 <h3>University of Pittsburgh</h3>
        //                 <p>📍 3990 Fifth Ave, Pittsburgh, PA</p>
        //             </div>
        //         </div>
        //     </div>
        // </section>