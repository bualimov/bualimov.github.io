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
            <div className="education-col education-col-left">
                <h3>University of Pittsburgh 📚</h3>
                <div>B.S. in Computer Science <i>(grad. April 2027)</i></div>
                <div>Minor in Economics</div>
                <div>Certificate of Leadership</div>
                <div>Pitt Honors Degree </div>                
                <br/>
                <h3>Coursework 📝</h3>
                <div>Programming</div>
                <div>Algorithms & Data Structures</div>
                <div>Math Foundations in Machine Learning</div>
                <div>Discrete Structures</div>
                <div>Formal Methods in CS</div>
                <div>Computer Org. & Assembly Language</div>
                <div>Systems Software</div>
                <div>Social Implications in Computing</div>
                <div>Leadership</div>
                <div>Economics</div>
            </div>

            <div className="education-col education-col-left">
                <h3>Clubs + Extracurriculars 📈</h3>
                <div>Computer Science Club</div>
                <div>Management Consulting Club</div>
                <div>Panther Equity (Investment Fund)</div>
                <div>Chess Club</div>
            </div> 
          </div> {/*text*/}

        </div> {/*container*/}
      </div> {/*content*/}
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