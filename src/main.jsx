import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";


import "./fonts.css";
import "./styles.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProcessPage from "./pages/ProcessPage";
import IndustriesPage from "./pages/IndustriesPage";
import PlatformsPage from "./pages/PlatformsPage";
import ContactPage from "./pages/ContactPage";


/* =========================================
   ROUTES
   ========================================= */

const routes = {
  "/": HomePage,
  "/about": AboutPage,
  "/services": ServicesPage,
  "/process": ProcessPage,
  "/industries": IndustriesPage,
  "/platforms": PlatformsPage,
  "/contact": ContactPage,
};


/* =========================================
   NORMALIZE PATH
   ========================================= */

function getPath() {
  const path = window.location.pathname;

  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }

  return path || "/";
}


/* =========================================
   LAYOUT
   ========================================= */

function Layout({ children }) {

  /* -----------------------------------------
     Scroll to top when page changes
     ----------------------------------------- */

  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

  }, [children]);


  /* -----------------------------------------
     Header + scroll progress
     ----------------------------------------- */

  useEffect(() => {

    const header =
      document.getElementById("siteHeader");

    const progress =
      document.getElementById("siteProgress");


    function updateScrollUI() {

      if (header) {

        header.classList.toggle(
          "scrolled",
          window.scrollY > 20
        );

      }


      if (progress) {

        const max =
          document.documentElement.scrollHeight -
          window.innerHeight;

        const percentage =
          max > 0
            ? (window.scrollY / max) * 100
            : 0;

        progress.style.width =
          `${percentage}%`;

      }

    }


    window.addEventListener(
      "scroll",
      updateScrollUI,
      { passive: true }
    );

    updateScrollUI();


    return () => {

      window.removeEventListener(
        "scroll",
        updateScrollUI
      );

    };

  }, [children]);


  /* -----------------------------------------
     REVEAL ANIMATIONS
     
     This was missing from the React version.
     ----------------------------------------- */

  useEffect(() => {

    const elements =
      document.querySelectorAll(".reveal");


    if (!elements.length) {
      return;
    }


    /* Fallback for browsers without
       IntersectionObserver */

    if (!("IntersectionObserver" in window)) {

      elements.forEach((element) => {
        element.classList.add("visible");
      });

      return;

    }


    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "visible"
              );

              observer.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -40px 0px",
        }
      );


    elements.forEach((element) => {

      observer.observe(element);

    });


    return () => {

      observer.disconnect();

    };

  }, [children]);


  return (
    <>
      <div
        className="site-progress"
        id="siteProgress"
      />

      <Header />

      <main id="top">
        {children}
      </main>

      <Footer />
    </>
  );
}


/* =========================================
   APP
   ========================================= */

function App() {

  const [path, setPath] =
    useState(getPath());


  useEffect(() => {

    function handleNavigation() {

      setPath(getPath());

    }


    window.addEventListener(
      "popstate",
      handleNavigation
    );


    return () => {

      window.removeEventListener(
        "popstate",
        handleNavigation
      );

    };

  }, []);


  const Page =
    routes[path] || HomePage;


  return (
    <Layout>
      <Page />
    </Layout>
  );
}


/* =========================================
   START APPLICATION
   ========================================= */

const root =
  document.getElementById("root");


createRoot(root).render(
  <App />
);