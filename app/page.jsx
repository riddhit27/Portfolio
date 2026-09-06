"use client";

import { useEffect, useState } from "react";

const roles = [
  { company: "Nykaa", dates: "Jun 2025 – Present", copy: "Led product design for Nykaa’s affiliate platform (NAP), integrated NAP into Nykaa app, built 0→1 experiences for brand campaigns and payouts, and conducted creator research." },
  { company: "Jupiter Money", dates: "Feb 2024 – Jun 2025", copy: "Owned the Credit Card design vertical by overseeing end-to-end experience: redesigned in-app onboarding, launched new onboarding, and optimized post-onboarding journeys." },
  { company: "Jar – Gold savings App", dates: "May 2022 – Aug 2023", copy: "Led design for Retention & Engagement: Built Weekly Magic, boosting daily savings for 1L+ users weekly, and Savings Goal, driving automatic savings in gold through mandate creation." },
  { company: "Tata Elxsi", dates: "Aug 2019 – Apr 2022", copy: "Designed data-rich dashboards for Schaeffler and Tata Electronics. Redesigned ABB’s social web portal across desktop, tablet, and mobile, improving accessibility and user engagement." },
];

const projects = [
  { kind: "nykaa", title: "Nykaa Project Showcase", date: "2025–26", copy: "Brand Collabs, Payouts & Earnings, Notification Centre, Write to NAP" },
  { kind: "jupiter", title: "Jupiter Case Study", date: "Mar 2024", copy: "Redesigning the Onboarding flow for Jupiter RuPay Credit Card" },
  { kind: "jar", title: "Jar Project Showcase", date: "Jun 2022", copy: "3 projects worked on for app Activation, Engagement & Retention." },
  { kind: "goal", title: "Savings Goal – Jar Case Study", date: "Jun 2022", copy: "Activation project aimed to promote manual saving behaviour." },
  { kind: "magic", title: "Weekly Magic – Jar Case Study", date: "Jun 2022", copy: "Engagement project, aimed to increase frequency of manual savings." },
];

function ProjectArt({ kind }) {
  if (kind === "goal") return <div className="art goal"><span className="target">◎</span><i className="arrow">↗</i><b>●</b><em>● ●</em></div>;
  if (kind === "magic") return <div className="art magic"><span>✦</span><i>◆</i><b>▰</b><em>⌁</em><strong>⌁</strong></div>;
  if (kind === "jar") return <div className="art jar"><div className="phone one"><strong>SPIN TO WIN</strong><span>◉</span></div><div className="phone two"><strong>You have reached<br/>your goal!</strong><span>▣</span></div></div>;
  if (kind === "jupiter") return <div className="art jupiter"><div className="phone tilt">Get the 3-in-1<br/>Switcher Credit Card</div><div className="phone straight">2%<small>CASHBACK</small></div></div>;
  return <div className="art nykaa"><div className="phone report"><b>₹25,50,000</b><span>Reports</span></div><div className="phone campaign"><b>Brand Campaigns</b><span>📣</span></div></div>;
}

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
      <button className="mark" onClick={() => scrollTo("about")} aria-label="Back to top">rt</button>
      {[['about', 'about me'], ['experience', 'experience'], ['projects', 'projects']].map(([id, label]) => <button key={id} onClick={() => scrollTo(id)} className={active === id ? "active" : ""}>{label}</button>)}
    </nav>

    <section id="about" className="hero section">
      <span className="doodle plant">♧</span><span className="doodle loops">◎◎</span><span className="doodle cup">☕</span><span className="doodle drop">⌁</span><span className="doodle eye">◉</span>
      <div className="intro">
        <p className="lead">A product designer with 6+ years of experience designing e-comm, fintech, and consumer products in the B2C and B2B space.</p>
        <p>My strengths lie in taking strong ownership, first-principles thinking, communication, and the ability to solve complex problems and deliver fast.</p>
      </div>
    </section>

    <section id="experience" className="experience section">
      <h2>Experience</h2>
      <div className="resume">{roles.map((role) => <article key={role.company}><div className="role-top"><h3>{role.company}</h3><time>{role.dates}</time></div><p>{role.copy}</p></article>)}</div>
      <a className="resume-link" href="#experience">View full resume <span>→</span></a>
    </section>

    <section id="projects" className="projects section">
      <h2>Key Projects</h2>
      <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.title}><ProjectArt kind={project.kind} /><div className="project-copy"><div><h3>{project.title}</h3><time>{project.date}</time></div><p>{project.copy}</p></div></article>)}</div>
    </section>

    <footer><div className="thanks"><span>♥</span> Thanks for stopping by! <span>◕‿◕</span></div><p>Designed in Figma. Made with Framer. Powered by AI and a lot of coffee.</p></footer>
  </main>;
}