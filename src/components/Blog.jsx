import React from 'react';
// import './Blog.css';
import blogImage1 from '../assets/images/blog-1.jpg';
import blogImage2 from '../assets/images/blog-2.jpg';
import blogImage3 from '../assets/images/blog-3.jpg';
import blogImage4 from '../assets/images/blog-4.jpg';
import blogImage5 from '../assets/images/blog-5.jpg';
import blogImage6 from '../assets/images/blog-6.jpg';

const Blog = () => {
  return (
    <article className="blog" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>
      <section className="blog-posts">
        <ul className="blog-posts-list">
          <li className="blog-post-item">
            <a href="#">
              <figure className="blog-banner-box">
                <img src={blogImage1} alt="Design conferences in 2022" loading="lazy" />
              </figure>
              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">Design</p>
                  <span className="dot"></span>
                  <time dateTime="2022-02-23">Feb 23, 2022</time>
                </div>
                <h3 className="h3 blog-item-title">Design conferences in 2022</h3>
                <p className="blog-text">Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
              </div>
            </a>
          </li>
          <li className="blog-post-item">
            <a href="#">
              <figure className="blog-banner-box">
                <img src={blogImage2} alt="Best fonts every designer" loading="lazy" />
              </figure>
              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">Design</p>
                  <span className="dot"></span>
                  <time dateTime="2022-02-23">Feb 23, 2022</time>
                </div>
                <h3 className="h3 blog-item-title">Best fonts every designer</h3>
                <p className="blog-text">Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.</p>
              </div>
            </a>
          </li>
          <li className="blog-post-item">
            <a href="#">
              <figure className="blog-banner-box">
                <img src={blogImage3} alt="Design digest #80" loading="lazy" />
              </figure>
              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">Design</p>
                  <span className="dot"></span>
                  <time dateTime="2022-02-23">Feb 23, 2022</time>
                </div>
                <h3 className="h3 blog-item-title">Design digest #80</h3>
                <p className="blog-text">Excepteur sint occaecat cupidatat non proident, quis nostrum exercitationem ullam corporis suscipit.</p>
              </div>
            </a>
          </li>
          <li className="blog-post-item">
            <a href="#">
              <figure className="blog-banner-box">
                <img src={blogImage4} alt="UI interactions of the week" loading="lazy" />
              </figure>
              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">Design</p>
                  <span className="dot"></span>
                  <time dateTime="2022-02-23">Feb 23, 2022</time>
                </div>
                <h3 className="h3 blog-item-title">UI interactions of the week</h3>
                <p className="blog-text">Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.</p>
              </div>
            </a>
          </li>
          <li className="blog-post-item">
            <a href="#">
              <figure className="blog-banner-box">
                <img src={blogImage5} alt="The forgotten art of spacing" loading="lazy" />
              </figure>
              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">Design</p>
                  <span className="dot"></span>
                  <time dateTime="2022-02-23">Feb 23, 2022</time>
                </div>
                <h3 className="h3 blog-item-title">The forgotten art of spacing</h3>
                <p className="blog-text">Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </a>
          </li>
          <li className="blog-post-item">
            <a href="#">
              <figure className="blog-banner-box">
                <img src={blogImage6} alt="Design digest #79" loading="lazy" />
              </figure>
              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">Design</p>
                  <span className="dot"></span>
                  <time dateTime="2022-02-23">Feb 23, 2022</time>
                </div>
                <h3 className="h3 blog-item-title">Design digest #79</h3>
                <p className="blog-text">Optio cumque nihil impedit quo minus quod maxime placeat, velit esse cillum.</p>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Blog;
