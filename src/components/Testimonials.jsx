import React from 'react';
// import './Testimonials.css';
import '../assets/css/style.css';

// Import images
import avatar1 from '../assets/images/avatar-1.png';
import avatar2 from '../assets/images/avatar-2.png';
import avatar3 from '../assets/images/avatar-3.png';
import avatar4 from '../assets/images/avatar-4.png';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h3 className="h3 testimonials-title">Testimonials</h3>
      <ul className="testimonials-list has-scrollbar">
        <li className="testimonials-item">
          <div className="content-card" data-testimonials-item>
            <figure className="testimonials-avatar-box">
              <img src={avatar1} alt="Tech Innovations" width="60" data-testimonials-avatar />
            </figure>
            <h4 className="h4 testimonials-item-title" data-testimonials-title>Rajesh Kumar, CEO of Tech Innovations</h4>
            <div className="testimonials-text" data-testimonials-text>
              <p>"Anish's full stack development skills are exceptional. He transformed our website into a highly functional and visually appealing platform. His attention to detail and commitment to quality are unparalleled."</p>
            </div>
          </div>
        </li>
        <li className="testimonials-item">
          <div className="content-card" data-testimonials-item>
            <figure className="testimonials-avatar-box">
              <img src={avatar2} alt="Web Solutions" width="60" data-testimonials-avatar />
            </figure>
            <h4 className="h4 testimonials-item-title" data-testimonials-title>Priya Singh, CTO of Web Solutions</h4>
            <div className="testimonials-text" data-testimonials-text>
              <p>"Collaborating with Anish on our website project was a pleasure. His expertise in both frontend and backend development ensured a seamless user experience and robust performance. Highly recommended!"</p>
            </div>
          </div>
        </li>
        <li className="testimonials-item">
          <div className="content-card" data-testimonials-item>
            <figure className="testimonials-avatar-box">
              <img src={avatar3} alt="CloudyDays Inc." width="60" data-testimonials-avatar />
            </figure>
            <h4 className="h4 testimonials-item-title" data-testimonials-title>Ahmed Rahman, Cloud Architect at CloudyDays Inc.</h4>
            <div className="testimonials-text" data-testimonials-text>
              <p>"Anish's ability to integrate cloud services with our website made a significant difference in scalability and security. His approach to problem-solving and innovative solutions set him apart from others."</p>
            </div>
          </div>
        </li>
        <li className="testimonials-item">
          <div className="content-card" data-testimonials-item>
            <figure className="testimonials-avatar-box">
              <img src={avatar4} alt="Sanjeev Sharma, Creative Director at Design Studio" width="60" data-testimonials-avatar />
            </figure>
            <h4 className="h4 testimonials-item-title" data-testimonials-title>Sanjeev Sharma, Creative Director at Design Studio</h4>
            <div className="testimonials-text" data-testimonials-text>
              <p>"The comprehensive website development services provided by Anish were top-notch. From design to deployment, he handled everything with professionalism and creativity. Our brand's online presence has never been better."</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Testimonials;
















// import React from 'react';
// // import './Testimonials.css';
// import '../assets/css/style.css';


// const Testimonials = () => {
//   return (
//     <section className="testimonials">
//       <h3 className="h3 testimonials-title">Testimonials</h3>
//       <ul className="testimonials-list has-scrollbar">
//         <li className="testimonials-item">
//           <div className="content-card" data-testimonials-item>
//             <figure className="testimonials-avatar-box">
//               <img src="./assets/images/avatar-1.png" alt="Tech Innovations" width="60" data-testimonials-avatar />
//             </figure>
//             <h4 className="h4 testimonials-item-title" data-testimonials-title>Rajesh Kumar, CEO of Tech Innovations</h4>
//             <div className="testimonials-text" data-testimonials-text>
//               <p>"Anish's full stack development skills are exceptional. He transformed our website into a highly functional and visually appealing platform. His attention to detail and commitment to quality are unparalleled."</p>
//             </div>
//           </div>
//         </li>
//         <li className="testimonials-item">
//           <div className="content-card" data-testimonials-item>
//             <figure className="testimonials-avatar-box">
//               <img src="./assets/images/avatar-2.png" alt="Web Solutions" width="60" data-testimonials-avatar />
//             </figure>
//             <h4 className="h4 testimonials-item-title" data-testimonials-title>Priya Singh, CTO of Web Solutions</h4>
//             <div className="testimonials-text" data-testimonials-text>
//               <p>"Collaborating with Anish on our website project was a pleasure. His expertise in both frontend and backend development ensured a seamless user experience and robust performance. Highly recommended!"</p>
//             </div>
//           </div>
//         </li>
//         <li className="testimonials-item">
//           <div className="content-card" data-testimonials-item>
//             <figure className="testimonials-avatar-box">
//               <img src="./assets/images/avatar-3.png" alt="CloudyDays Inc." width="60" data-testimonials-avatar />
//             </figure>
//             <h4 className="h4 testimonials-item-title" data-testimonials-title>Ahmed Rahman, Cloud Architect at CloudyDays Inc.</h4>
//             <div className="testimonials-text" data-testimonials-text>
//               <p>"Anish's ability to integrate cloud services with our website made a significant difference in scalability and security. His approach to problem-solving and innovative solutions set him apart from others."</p>
//             </div>
//           </div>
//         </li>
//         <li className="testimonials-item">
//           <div className="content-card" data-testimonials-item>
//             <figure className="testimonials-avatar-box">
//               <img src="./assets/images/avatar-4.png" alt="Sanjeev Sharma, Creative Director at Design Studio" width="60" data-testimonials-avatar />
//             </figure>
//             <h4 className="h4 testimonials-item-title" data-testimonials-title>Sanjeev Sharma, Creative Director at Design Studio</h4>
//             <div className="testimonials-text" data-testimonials-text>
//               <p>"The comprehensive website development services provided by Anish were top-notch. From design to deployment, he handled everything with professionalism and creativity. Our brand's online presence has never been better."</p>
//             </div>
//           </div>
//         </li>
//       </ul>
//     </section>
//   );
// };

// export default Testimonials;
