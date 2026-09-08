"use client";

import { useEffect, useState } from "react";

const roles = [
  { company: "Nykaa", dates: "Jun 2025 – Present", copy: "Led product design for Nykaa’s affiliate platform (NAP), integrated NAP into Nykaa app, built 0→1 experiences for brand campaigns and payouts, and conducted creator research." },
  { company: "Jupiter Money", dates: "Feb 2024 – Jun 2025", copy: "Owned the Credit Card design vertical by overseeing end-to-end experience: redesigned in-app onboarding, launched new onboarding, and optimized post-onboarding journeys." },
  { company: "Jar – Gold savings App", dates: "May 2022 – Aug 2023", copy: "Led design for Retention & Engagement: Built Weekly Magic, boosting daily savings for 1L+ users weekly, and Savings Goal, driving automatic savings in gold through mandate creation." },
  { company: "Tata Elxsi", dates: "Aug 2019 – Apr 2022", copy: "Designed data-rich dashboards for Schaeffler and Tata Electronics. Redesigned ABB’s social web portal across desktop, tablet, and mobile, improving accessibility and user engagement." },
];

const projects = [
  { card: "/images/project-cards/nykaa.svg", pdf: "/case-studies/1_Nykaa%20Portfolio.pdf", title: "Nykaa Project Showcase" },
  { card: "/images/project-cards/jupiter.svg", pdf: "/case-studies/2_%20Jupiter%20Case%20study_Credit%20card%20onboarding.pdf", title: "Jupiter Case Study" },
  { card: "/images/project-cards/jar.svg", pdf: "https://www.figma.com/proto/rl6VUK1XBF4De1WXBy34yn/Werk?node-id=412-18168&viewport=2787%2C487%2C0.2&t=e5mYOM5F9X47oip8-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=412%3A18168&page-id=412%3A18024", title: "Jar Project Showcase" },
  { card: "/images/project-cards/savings-goal.svg", pdf: "https://www.figma.com/proto/rl6VUK1XBF4De1WXBy34yn/Werk?node-id=546-41864&viewport=1910%2C81%2C0.11&t=njoGMwfjAJtxrZ9T-1&scaling=min-zoom&content-scaling=fixed&page-id=412%3A18024", title: "Savings Goal – Jar Case Study" },
  { card: "/images/project-cards/weekly-magic.svg", pdf: "/case-studies/5_Jar_Weekly%20Magic%20Case%20study.pdf", title: "Weekly Magic – Jar Case Study" },
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
        <p>I bring strong ownership, first-principles thinking, and clear communication to complex problems, turning them into thoughtful, high-impact outcomes fast.</p>
      </div>
    </section>

    <section id="experience" className="experience section">
      <img className="experience-doodle lipstick" src="/images/illustrations/lipstick.svg" alt="" />
      <img className="experience-doodle tube" src="/images/illustrations/tube.svg" alt="" />
      <img className="experience-doodle credit-card" src="/images/illustrations/credit card.svg" alt="" />
      <img className="experience-doodle gold-bar" src="/images/illustrations/gold bar.svg" alt="" />
      <h2 className="section-title experience-title">Experience</h2>
      <div className="resume">{roles.map((role) => <article key={role.company}><div className="role-top"><h3>{role.company}</h3><time>{role.dates}</time></div><p>{role.copy}</p></article>)}</div>
      <a className="resume-link" href="/resume/Riddhi-T-Resume.pdf" target="_blank" rel="noopener noreferrer">View full resume <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.29 8.71a.996.996 0 0 0 0 1.41L14.88 12H5a1 1 0 1 0 0 2h9.88l-2.59 2.59a.996.996 0 1 0 1.41 1.41l4.3-4.3a.996.996 0 0 0 0-1.41l-4.3-4.29a.996.996 0 0 0-1.41 0Z" /></svg></a>
    </section>

    <section id="projects" className="projects section">
      <h2 className="section-title projects-title">Key Projects</h2>
      <div className="project-grid">{projects.map((project) => <a className="project-card" key={project.title} href={project.pdf} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} PDF`}><img src={project.card} alt={project.title} /></a>)}</div>
    </section>

    <footer><div className="thanks"><img src="/images/illustrations/heart-footer.svg" alt="" /> Thanks for stopping by! <img src="/images/illustrations/cat.svg" alt="" /></div><p>Made in Figma, built with Codex, powered by a lot of coffee.</p></footer>
  </main>;
}
