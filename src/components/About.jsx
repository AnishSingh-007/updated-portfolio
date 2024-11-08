import React from 'react';
// import './About.css';
import Services from './Services';
import Testimonials from './Testimonials';

const About = () => {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">Profile</h2>
        {/* <h2 className="h2 article-title">About me</h2> */}
      </header>
      <section className="about-text">
        <p>Hello! I'm Anish Kumar Singh, a dynamic Full Stack Software Developer with over 3 years of experience, including 2.1 years specializing in the MERN stack. I thrive on creating user-centric web applications that merge innovative problem-solving with cutting-edge technologies. With a blend of technical expertise and creative innovation, I aim to deliver exceptional user experiences.</p>
        <p>My mission is to craft websites that are not only functional and user-friendly but also visually stunning and engaging. I bring a personal touch to every project, ensuring your product stands out and is easy to navigate. My goal is to convey your message and identity in the most innovative and captivating way possible. I've had the privilege of designing web solutions for several renowned brands, consistently delivering results that exceed expectations.</p>
        <h3>Transforming Ideas into Digital Masterpieces</h3>
        <p>As a dedicated Full Stack Developer, my passion lies in creating websites that blend functionality with eye-catching design. Every project I undertake is a testament to my commitment to user-friendliness, aesthetic appeal, and personalized touches. My ultimate goal is to encapsulate your message and brand identity in the most imaginative and engaging manner.</p>
        <h3>Why Choose Me?</h3>
        <ul>
          <li><strong>Functional and User-Friendly:</strong> Ensuring seamless navigation and usability.</li>
          <li><strong>Visually Stunning:</strong> Crafting designs that captivate and impress.</li>
          <li><strong>Personal Touch:</strong> Adding unique elements that make your product stand out.</li>
          <li><strong>Brand Alignment:</strong> Reflecting your message and identity creatively.</li>
          <li><strong>Proven Track Record:</strong> Designing for renowned brands with a focus on excellence.</li>
        </ul>
        <p>Let's collaborate to transform your vision into a digital masterpiece that not only meets but exceeds your expectations.</p>
      </section>
      <Services />
      <Testimonials />
    </article>
  );
};

export default About;





























// import React from 'react';
// import '../assets/css/style.css';

// const About = () => {
//   return (
//     <article className="about active" data-page="about">
//       <header>
//         <h2 className="h2 article-title">About me</h2>
//       </header>
//       <section className="about-text">
//         <p>Hello! I'm Anish Kumar Singh, a dynamic Full Stack Software Developer with over 3 years of experience, including 2.1 years specializing in the MERN stack. I thrive on creating user-centric web applications that merge innovative problem-solving with cutting-edge technologies. With a blend of technical expertise and creative innovation, I aim to deliver exceptional user experiences.</p>
//         <p>My mission is to craft websites that are not only functional and user-friendly but also visually stunning and engaging. I bring a personal touch to every project, ensuring your product stands out and is easy to navigate. My goal is to convey your message and identity in the most innovative and captivating way possible. I've had the privilege of designing web solutions for several renowned brands, consistently delivering results that exceed expectations.</p>
//         <h3>Transforming Ideas into Digital Masterpieces</h3>
//         <p>As a dedicated Full Stack Developer, my passion lies in creating websites that blend functionality with eye-catching design. Every project I undertake is a testament to my commitment to user-friendliness, aesthetic appeal, and personalized touches. My ultimate goal is to encapsulate your message and brand identity in the most imaginative and engaging manner.</p>
//         <h4>Why Choose Me?</h4>
//         <ul>
//           <li><strong>Functional and User-Friendly:</strong> Ensuring seamless navigation and usability.</li>
//           <li><strong>Visually Stunning:</strong> Crafting designs that captivate and impress.</li>
//           <li><strong>Personal Touch:</strong> Adding unique elements that make your product stand out.</li>
//           <li><strong>Brand Alignment:</strong> Reflecting your message and identity creatively.</li>
//           <li><strong>Proven Track Record:</strong> Designing for renowned brands with a focus on excellence.</li>
//         </ul>
//         <p>Let's collaborate to transform your vision into a digital masterpiece that not only meets but exceeds your expectations.</p>
//       </section>
//     </article>
//   );
// };

// export default About;
