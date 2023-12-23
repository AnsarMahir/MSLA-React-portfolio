/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/techdesktop.jpg";

const imageAltText = "desktop with tech items";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "How to integrate loyalty points system in WooCommerce",
    description: "I will teach you a free method to integrate loyalty points system in WooCommerce",
    url: "https://letsknowtech.com/how-to-integrate-loyalty-points-system-in-woocommerce",
  },
  {
    title: "How to create child theme in wordpress",
    description:
      "A child theme in WordPress is a sub-theme that inherits the functionality and styling of its parent theme",
    url: "https://letsknowtech.com/how-to-create-child-theme-in-wordpress-step-by-step-guide/",
  },
  {
    title: "My Resume Site",
    description: "A resume site created for First year first semester module",
    url: "https://github.com/AnsarMahir/firstportfolio.github.co",
  },
  {
    title: "WordPress: The Pros and The Cons",
    description: "Wordpress Ups and Downs that everyone should know before ......",
    url: "https://letsknowtech.com/wordpress-the-pros-and-the-cons/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
