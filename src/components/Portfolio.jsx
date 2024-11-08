import React, { useState } from "react";
import Modal from "./Modal";
import styles from "./Portfolio.module.css";
import project1 from "../assets/images/project-1.jpg";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.png";
import testportal from "../assets/images/TestPortal/Home.png";

// // Import all images from TestPortal folder
// const importAllImages = (requireContext) => {
//   const images = {};
//   requireContext.keys().forEach((key) => {
//     const imageName = key.replace('./', '').replace(/\.(png|jpg|jpeg|gif)$/, '');
//     images[imageName] = requireContext(key);
//   });
//   console.log("REQUIRE_CONTEXT_IMAGES", images);
// return images;
// };

// const testPortalImages = importAllImages(require.context('../assets/images/TestPortal', false, /\.(png|jpe?g|gif)$/));

// Helper function to import all images from a specific folder
const importImagesFromFolder = (folderPath) => {
  const images = {};
  folderPath.keys().forEach((key) => {
    const imageName = key
      .replace("./", "")
      .replace(/\.(png|jpg|jpeg|gif)$/, "");
    images[imageName] = folderPath(key);
  });
  console.log("IMAGES",images);
  return Object.values(images); // Return an array of image paths
};

// Import images from each project's folder
const financeImages = importImagesFromFolder(
  require.context("../assets/images/Finance", false, /\.(png|jpe?g|gif)$/)
);
const eCommerceImages = importImagesFromFolder(
  require.context("../assets/images/E-Commerce", false, /\.(png|jpe?g|gif)$/)
);
const fundoImages = importImagesFromFolder(
  require.context("../assets/images/Fundo", false, /\.(png|jpe?g|gif)$/)
);
const coachingInstituteImages = importImagesFromFolder(
  require.context("../assets/images/CoachingInstitute", false, /\.(png|jpe?g|gif)$/)
);
const testPortalImages = importImagesFromFolder(
  require.context("../assets/images/TestPortal", false, /\.(png|jpe?g|gif)$/)
);
const docx2jsonImages = importImagesFromFolder(
  require.context("../assets/images/docx2json", false, /\.(png|jpe?g|gif)$/)
);

// Convert the testPortalImages object to an array
const testPortalImagesArray = Object.values(testPortalImages);
const financeImagesArray = Object.values(financeImages);
const eCommerceImagesArray = Object.values(eCommerceImages);
const fundoImagesArray = Object.values(fundoImages);
const coachingInstituteImagesArray = Object.values(coachingInstituteImages);
const docx2jsonImagesArray = Object.values(docx2jsonImages);

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const projects = [
    // {
    //   id: 1,
    //   title: "Finance",
    //   category: "Web development",
    //   image: financeImagesArray,
    //   url: "https://testportal.ssccglpinnacle.com/",
    // },
    {
      id: 2,
      title: "E-Commerce",
      category: "Web Applications",
      image: eCommerceImagesArray,
      url: "https://github.com/AnishSingh-007/Ecommerce",
    },
    // { id: 3, title: "Fundo", category: "Web design", image: fundoImagesArray, url: "https://testportal.ssccglpinnacle.com/", },
    {
      id: 4,
      title: "Offline Coaching Institute",
      category: "Web Applications",
      image: coachingInstituteImagesArray,
      // url: "https://github.com/pinnaclessc/Coaching_institute_frontend",
    },
    {
      id: 5,
      title: "Test Portal",
      category: "Web Applications",
      // image: [testportal],
      image: testPortalImagesArray, // Using the "Home" image
      url: "https://testportal.ssccglpinnacle.com/",
    },
    {
      id: 5,
      title: "Docx2json",
      category: "Web Applications",
      // image: [testportal],
      image: docx2jsonImagesArray, // Using the "Home" image
      url: "https://docx2json.vercel.app/",
    },
  ];

  console.log("SELECTED_PROJECT", selectedProject);

  const handleFilterChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const openModal = (project) => {
    console.log("PROJECT", project);
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Navigate to the previous image
  const showPreviousImage = () => {
    setSelectedProjectIndex((prevIndex) =>
      prevIndex === 0 ? selectedProject.image.length - 1 : prevIndex - 1
    );
  };

  console.log("selectedProjectIndex", selectedProjectIndex);

  // Navigate to the next image
  const showNextImage = () => {
    setSelectedProjectIndex((prevIndex) =>
      prevIndex === selectedProject.image.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <article className={styles.portfolio} data-page="portfolio">
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProject?.image[selectedProjectIndex]}
              alt={selectedProject?.title}
            />
            {/* <img src={projects[selectedProjectIndex].image} alt={projects[selectedProjectIndex].title} /> */}
            <button className={styles.arrowLeft} onClick={showPreviousImage}>
              ◀
            </button>
            <button className={styles.arrowRight} onClick={showNextImage}>
              ▶
            </button>
            {selectedProject?.url ? 
            <a
              href={selectedProject?.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.visitButton}
            >
              Visit Site
            </a> : <p className={styles.visitButton} >Under working</p>
            }
          </div>
        </div>
      </Modal>

      <header>
        <h2 className={styles.articleTitle}>Projects</h2>
      </header>
      <section className={styles.projects}>
        <div className={styles.filterSelectBox}>
          <select
            className={styles.filterSelect}
            value={selectedCategory}
            onChange={handleFilterChange}
          >
            <option value="All">All</option>
            <option value="Web design">Web design</option>
            <option value="Applications">Applications</option>
            <option value="Web development">Web development</option>
          </select>
        </div>
        <ul className={styles.projectList}>
          {projects
            .filter(
              (project) =>
                selectedCategory === "All" ||
                project.category === selectedCategory
            )
            .map((project) => (
              <li
                className={`${styles.projectItem} ${styles.active}`}
                data-filter-item
                data-category={project.category.toLowerCase()}
                key={project.id}
                onClick={() => openModal(project)}
              >
                <div className={styles.projectContent}>
                  <figure className={styles.projectImg}>
                    <div className={styles.projectItemIconBox}>
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <img
                      src={project.image[0]}
                      alt={project.title}
                      loading="lazy"
                    />
                  </figure>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectCategory}>{project.category}</p>
                </div>
              </li>
            ))}
        </ul>
      </section>

      {/* {isModalOpen && selectedProject && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <span className={styles.closeButton} onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedProject.title}</h2>
            <img src={selectedProject.image} alt={selectedProject.title} />
          </div>
        </div>
      )} */}
    </article>
  );
};

export default Portfolio;

// import React, { useState } from 'react';
// import styles from './Portfolio.module.css';

// import project1 from "../assets/images/project-1.jpg";
// import project2 from "../assets/images/project-2.png";
// import project3 from "../assets/images/project-3.jpg";
// import project4 from "../assets/images/project-4.png";
// import testportal from "../assets/images/TestPortal/Home.png";

// const Portfolio = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const projects = [
//     { id: 1, title: "Finance", category: "Web development", image: project1 },
//     { id: 2, title: "Orizon", category: "Web development", image: project2 },
//     { id: 3, title: "Fundo", category: "Web design", image: project3 },
//     { id: 4, title: "Brawlhalla", category: "Applications", image: project4 },
//     { id: 5, title: "Test Portal", category: "Web Applications", image: testportal, url: "https://testportal.ssccglpinnacle.com/" },
//   ];

//   const handleFilterChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   return (
//     <article className={styles.portfolio} data-page="portfolio">
//       <header>
//         <h2 className={styles.articleTitle}>Projects</h2>
//       </header>
//       <section className={styles.projects}>
//         <div className={styles.filterSelectBox}>
//           <select className={styles.filterSelect} value={selectedCategory} onChange={handleFilterChange}>
//             <option value="All">All</option>
//             <option value="Web design">Web design</option>
//             <option value="Applications">Applications</option>
//             <option value="Web development">Web development</option>
//           </select>
//         </div>
//         <ul className={styles.projectList}>
//           {projects
//             .filter(project => selectedCategory === "All" || project.category === selectedCategory)
//             .map(project => (
//               <li
//                 className={`${styles.projectItem} ${styles.active}`}
//                 data-filter-item
//                 data-category={project.category.toLowerCase()}
//                 key={project.id}
//               >
//                 <a href="#">
//                   <figure className={styles.projectImg}>
//                     <div className={styles.projectItemIconBox}>
//                       <ion-icon name="eye-outline"></ion-icon>
//                     </div>
//                     <img src={project.image} alt={project.title} loading="lazy" />
//                   </figure>
//                   <h3 className={styles.projectTitle}>{project.title}</h3>
//                   <p className={styles.projectCategory}>{project.category}</p>
//                 </a>
//               </li>
//             ))}
//         </ul>
//       </section>
//     </article>
//   );
// };

// export default Portfolio;
