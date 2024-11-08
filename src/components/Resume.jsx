import React from "react";
import "../assets/css/style.css";

const Resume = () => {
  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">PINNACLE CIVIL SERVICES</h4>
            <span>2022(May) — Present</span>
            <ul>
              <li className="timeline-text">
                <strong>- </strong>I started my coding journey at Pinnacle Civil
                Services with a 3-month full-time internship in Gurgaon,
                Haryana. Following the internship, I was offered a permanent
                position as a Full Stack Web Developer.
              </li>
              <li className="timeline-text"></li>
            </ul>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              R. K. National Engineering
            </h4>
            <span>2022(Feb) - 2022(May)</span>
            <ul>
              <li className="timeline-text">
                <strong>- </strong>As the Chief Coordinator of an up-and-coming
                startup specializing in electrical goods for factories, I
                embraced a multifaceted role with varied tasks such as:
              </li>
              <li className="timeline-text">
                Product pricing, quotation generation, invoicing, GEM tender
                management, technical support, calling, purchasing,
                commissioning, and packaging.
              </li>
            </ul>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Neptune India</h4>
            <span>2017(July) — 2018(November)</span>
            <ul>
              <li className="timeline-text">
                <strong>- </strong>Leveraged technical expertise to drive sales
                and promotion as a sales engineer.
              </li>
              <li className="timeline-text">
                Responsibilities included client communication, pre-sales
                support, and proposal generation.
              </li>
            </ul>
          </li>
        </ol>
      </section>
      <section className="skill">
        <h3 className="h3 skills-title">My Skills Performance Measure</h3>
        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Frontend</h5>
              <data value="80">80%</data>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "80%" }}
              ></div>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Backend</h5>
              <data value="70">70%</data>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "70%" }}
              ></div>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Graphic design</h5>
              <data value="90">90%</data>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "90%" }}
              ></div>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Cloud Services(AWS)</h5>
              <data value="50">50%</data>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "50%" }}
              ></div>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">WordPress</h5>
              <data value="70">70%</data>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "70%" }}
              ></div>
            </div>
          </li>
        </ul>
      </section>
      <section className="timeline2">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              B.Tech(Electronic & Communication Engineering)
            </h4>
            <span>2013 — 2017</span>
            <ul>
              <li className="timeline-text">
                I completed my Bachelor's degree in Electronic & Communication
                Engineering with a CGPA of 7.6 from Haldia Institute of
                Technology, West Bengal.
              </li>
            </ul>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              I.Sc. (Intermediate In Science)
            </h4>
            <span>2011 — 2013</span>
            <ul>
              <li className="timeline-text">
                I completed my Intermediate with a focus on Science, including
                subjects like Physics, Chemistry, and Mathematics (P.C.M.).
              </li>
            </ul>
          </li>
        </ol>
      </section>
    </article>
  );
};

export default Resume;

// import React from "react";
// // import './Resume.css';
// import "../assets/css/style.css";

// const Resume = () => {
//   return (
//     <article className="resume" data-page="resume">
//       <header>
//         <h2 className="h2 article-title">Resume</h2>
//       </header>
//       <section className="timeline">
//         <div className="title-wrapper">
//           <div className="icon-box">
//             <ion-icon name="book-outline"></ion-icon>
//           </div>
//           <h3 className="h3">Experience</h3>
//         </div>
//         <ol className="timeline-list">
//           <li className="timeline-item">
//             <h4 className="h4 timeline-item-title">PINNACLE CIVIL SERVICES</h4>
//             <span>2022(May) — Present</span>
//             <p className="timeline-text">
//               I started my journey at Pinnacle Civil Services with a 3-month
//               full-time internship in Delhi NCR, Gurgaon. Following the
//               internship, I was offered a permanent position as a Full Stack Web
//               Developer.
//             </p>
//           </li>
//           <li className="timeline-item">
//             <h4 className="h4 timeline-item-title">
//               R. K. National Engineering
//             </h4>
//             <span>2022(Feb) - 2022(May)</span>
//             <p className="timeline-text">
//               As the Chief Coordinator of an up-and-coming startup specializing
//               inelectrical goods for factories, I embraced a multifaceted role
//               with variedtasks.(such as <strong>product pricing, quotation generation,
//               invoicing,GEM tender management, technical support, calling,
//               purchasing,commissioning, and packaging.</strong>)
//             </p>
//           </li>
//           <li className="timeline-item">
//             <h4 className="h4 timeline-item-title">Neptune India</h4>
//             <span>2017(July) — 2018(November)</span>
//             <p className="timeline-text">
//               Leveraged technical expertise to drive sales and promotion as a
//               salesengineer. Responsibilities included client communication,
//               pre-sales support, and proposal generation.
//             </p>
//           </li>
//         </ol>
//       </section>
//       <section className="skill">
//         <h3 className="h3 skills-title">My skills</h3>
//         <ul className="skills-list content-card">
//           <li className="skills-item">
//             <div className="title-wrapper">
//               <h5 className="h5">Frontend</h5>
//               <data value="80">80%</data>
//             </div>
//             <div className="skill-progress-bg">
//               <div
//                 className="skill-progress-fill"
//                 style={{ width: "80%" }}
//               ></div>
//             </div>
//           </li>
//           <li className="skills-item">
//             <div className="title-wrapper">
//               <h5 className="h5">Backend</h5>
//               <data value="70">70%</data>
//             </div>
//             <div className="skill-progress-bg">
//               <div
//                 className="skill-progress-fill"
//                 style={{ width: "70%" }}
//               ></div>
//             </div>
//           </li>
//           <li className="skills-item">
//             <div className="title-wrapper">
//               <h5 className="h5">Graphic design</h5>
//               <data value="90">90%</data>
//             </div>
//             <div className="skill-progress-bg">
//               <div
//                 className="skill-progress-fill"
//                 style={{ width: "90%" }}
//               ></div>
//             </div>
//           </li>
//           <li className="skills-item">
//             <div className="title-wrapper">
//               <h5 className="h5">Cloud Services(AWS)</h5>
//               <data value="50">50%</data>
//             </div>
//             <div className="skill-progress-bg">
//               <div
//                 className="skill-progress-fill"
//                 style={{ width: "50%" }}
//               ></div>
//             </div>
//           </li>
//           <li className="skills-item">
//             <div className="title-wrapper">
//               <h5 className="h5">WordPress</h5>
//               <data value="50">70%</data>
//             </div>
//             <div className="skill-progress-bg">
//               <div
//                 className="skill-progress-fill"
//                 style={{ width: "70%" }}
//               ></div>
//             </div>
//           </li>
//         </ul>
//       </section>
//       <section className="timeline2">
//         <div className="title-wrapper">
//           <div className="icon-box">
//             <ion-icon name="book-outline"></ion-icon>
//           </div>
//           <h3 className="h3">Education</h3>
//         </div>
//         <ol className="timeline-list">
//           <li className="timeline-item">
//             <h4 className="h4 timeline-item-title">
//               B.Tech(Electronic & Communication Engineering)
//             </h4>
//             <span>2013 — 2017</span>
//             <p className="timeline-text">
//               I completed my Bachelor's degree in Electronic & Communication
//               Engineering with a CGPA of 7.6 from Haldia Institute of
//               Technology, West Bengal...
//             </p>
//           </li>
//           <li className="timeline-item">
//             <h4 className="h4 timeline-item-title">
//               I.Sc. (Intermediate In Science)
//             </h4>
//             <span>2011 — 2013</span>
//             <p className="timeline-text">
//               I completed my Intermediate with a focus on Science, including
//               subjects like Physics, Chemistry, and Mathematics (P.C.M.)...
//             </p>
//           </li>
//         </ol>
//       </section>
//     </article>
//   );
// };

// export default Resume;
