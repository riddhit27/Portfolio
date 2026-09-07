"use client";

import { useEffect, useState } from "react";

const roles = [
  { company: "Nykaa", dates: "Jun 2025 – Present", copy: "Led product design for Nykaa’s affiliate platform (NAP), integrated NAP into Nykaa app, built 0→1 experiences for brand campaigns and payouts, and conducted creator research." },
  { company: "Jupiter Money", dates: "Feb 2024 – Jun 2025", copy: "Owned the Credit Card design vertical by overseeing end-to-end experience: redesigned in-app onboarding, launched new onboarding, and optimized post-onboarding journeys." },
  { company: "Jar – Gold savings App", dates: "May 2022 – Aug 2023", copy: "Led design for Retention & Engagement: Built Weekly Magic, boosting daily savings for 1L+ users weekly, and Savings Goal, driving automatic savings in gold through mandate creation." },
  { company: "Tata Elxsi", dates: "Aug 2019 – Apr 2022", copy: "Designed data-rich dashboards for Schaeffler and Tata Electronics. Redesigned ABB’s social web portal across desktop, tablet, and mobile, improving accessibility and user engagement." },
];

const projects = [
  { image: "/images/projects/nykaa-showcase.png", title: "Nykaa Project Showcase", date: "2025–26", copy: "Brand Collabs, Payouts & Earnings, Notification Centre, Write to NAP" },
  { image: "/images/projects/jupiter-case-study.png", title: "Jupiter Case Study", date: "Mar 2024", copy: "Redesigning the Onboarding flow for Jupiter RuPay Credit Card" },
  { image: "/images/projects/jar-showcase.png", title: "Jar Project Showcase", date: "Jun 2022", copy: "3 projects worked on for app Activation, Engagement & Retention." },
  { image: "/images/projects/savings-goal.png", title: "Savings Goal – Jar Case Study", date: "Jun 2022", copy: "Activation project aimed to promote manual saving behaviour." },
  { image: "/images/projects/weekly-magic.png", title: "Weekly Magic – Jar Case Study", date: "Jun 2022", copy: "Engagement project, aimed to increase frequency of manual savings." },
];

export default function Home() {
  const [active, setActive] = useState("about");
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { threshold: 0.35 });
    ["about", "experience", "projects"].forEach((id) => observer.observe(document.getElementById(id)));
    return () => observer.disconnect();
  }, []);

  return <main>
    <nav aria-label="Main navigation">
      <img className="mark" src="/images/rt-mark.svg" alt="rt" />
      {[['about', 'about me'], ['experience', 'experience'], ['projects', 'projects']].map(([id, label]) => <button key={id} onClick={() => scrollTo(id)} className={active === id ? "active" : ""} aria-current={active === id ? "page" : undefined}>{label}</button>)}
    </nav>

    <section id="about" className="hero section">
      <img className="doodle plant" src="/images/illustrations/plant.svg" alt="" /><img className="doodle loops" src="/images/illustrations/jalebi.svg" alt="" /><img className="doodle cup" src="/images/illustrations/coffee.svg" alt="" /><img className="doodle drop" src="/images/illustrations/embellishment.svg" alt="" /><img className="doodle eye" src="/images/illustrations/eye.svg" alt="" />
      <div className="intro">
        <p className="lead">A product designer with 6+ years of experience designing e-comm, fintech, and consumer products in the B2C and B2B space.</p>
        <p>My strengths lie in taking strong ownership, first-principles thinking, communication, and the ability to solve complex problems and deliver fast.</p>
      </div>
    </section>

    <section id="experience" className="experience section">
      <img className="experience-doodle lipstick" src="/images/illustrations/lipstick.svg" alt="" />
      <img className="experience-doodle tube" src="/images/illustrations/tube.svg" alt="" />
      <img className="experience-doodle credit-card" src="/images/illustrations/credit card.svg" alt="" />
      <img className="experience-doodle gold-bar" src="/images/illustrations/gold bar.svg" alt="" />
      <h2>Experience</h2>
      <div className="resume">{roles.map((role) => <article key={role.company}><div className="role-top"><h3>{role.company}</h3><time>{role.dates}</time></div><p>{role.copy}</p></article>)}</div>
      <a className="resume-link" href="#experience">View full resume <span>→</span></a>
    </section>

    <section id="projects" className="projects section">
      <h2>Key Projects</h2>
      <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.title}><div className="art"><img src={project.image} alt="" /></div><div className="project-copy"><div><h3>{project.title}</h3><time>{project.date}</time></div><p>{project.copy}</p></div></article>)}</div>
    </section>

    <footer><div className="thanks"><img src="/images/illustrations/heart-footer.svg" alt="" /> Thanks for stopping by! <img src="/images/illustrations/cat.svg" alt="" /></div><p>Made in Figma, built with Codex, powered by a lot of coffee.</p></footer>
  </main>;
}
