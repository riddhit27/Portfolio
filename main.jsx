import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Bookmark, ChevronDown, Compass, Filter, Grid2X2, List, MapPin, Menu, Search, SlidersHorizontal, Sparkles, X } from 'lucide-react';
import './styles.css';

const items = [
  { title: 'The future is closer than you think', type: 'Experience', place: 'New York · 12—18 Sep', color: 'sunset', tag: 'Featured', desc: 'A living exhibition about the ideas, people and places shaping what comes next.' },
  { title: 'Material matters', type: 'Talks & workshops', place: 'London · 26 Sep', color: 'mint', tag: 'Trending', desc: 'Meet the makers changing our relationship with the everyday.' },
  { title: 'Signals from tomorrow', type: 'Screening', place: 'Berlin · 04 Oct', color: 'blue', tag: 'New', desc: 'An evening of short films, sound and conversations from the edge of culture.' },
  { title: 'A field guide to elsewhere', type: 'Installation', place: 'Copenhagen · 11 Oct', color: 'lilac', tag: 'Curated', desc: 'Step outside the familiar. Six artists map a world that has not arrived yet.' },
  { title: 'Common ground', type: 'Community', place: 'Amsterdam · 19 Oct', color: 'orange', tag: 'Open call', desc: 'A day of making, sharing and learning with your neighbours.' },
  { title: 'After the algorithm', type: 'Conversation', place: 'Paris · 02 Nov', color: 'pink', tag: 'Limited places', desc: 'A candid conversation on taste, technology and the things we choose.' },
];

function Card({ item, saved, onSave }) {
  return <article className="card">
    <div className={`visual ${item.color}`}><span className="visual-mark">{item.type === 'Experience' ? '↗' : item.type === 'Screening' ? '✦' : item.type === 'Installation' ? '◌' : '＋'}</span><span className="card-tag">{item.tag}</span><button aria-label="Save" className={`save ${saved ? 'saved' : ''}`} onClick={onSave}><Bookmark size={17} fill={saved ? 'currentColor' : 'none'} /></button></div>
    <div className="card-body"><div className="eyebrow">{item.type}</div><h3>{item.title}</h3><p>{item.desc}</p><div className="meta"><MapPin size={14}/>{item.place}<ArrowRight size={16} className="card-arrow"/></div></div>
  </article>;
}

function App() {
  const [query, setQuery] = useState(''); const [view, setView] = useState('grid'); const [filterOpen, setFilterOpen] = useState(false); const [saved, setSaved] = useState([]);
  const filtered = useMemo(() => items.filter(i => `${i.title} ${i.type} ${i.place}`.toLowerCase().includes(query.toLowerCase())), [query]);
  const toggleSave = t => setSaved(s => s.includes(t) ? s.filter(x => x !== t) : [...s, t]);
  return <div className="page">
    <header><a className="brand" href="#top"><span className="brand-dot"/>BTTF<span className="brand-sub">/ 25</span></a><nav><a className="active" href="#discover">Discover</a><a href="#calendar">Calendar</a><a href="#about">About</a></nav><div className="header-actions"><button className="saved-link"><Bookmark size={17}/> Saved <span>{saved.length}</span></button><button className="menu"><Menu size={21}/></button></div></header>
    <main id="top"><section className="hero"><div className="hero-copy"><div className="kicker"><Sparkles size={15}/> A new perspective</div><h1>Find what’s<br/><em>next.</em></h1><p>Discover ideas, experiences and people that are making tomorrow feel a little more possible.</p></div><div className="hero-orbit"><div className="orbit o1"/><div className="orbit o2"/><div className="orbit o3"/><div className="orbit-center"><Compass size={35}/><span>Explore<br/>the unknown</span></div><span className="orbit-note n1">01 — Ideas</span><span className="orbit-note n2">02 — People</span></div></section>
      <section className="content" id="discover"><div className="section-head"><div><div className="eyebrow">The edit</div><h2>What are you<br/><span>curious about?</span></h2></div><p className="section-intro">A considered collection of things worth<br/>making time for.</p></div>
      <div className="toolbar"><label className="search"><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search the collection"/><kbd>⌘ K</kbd></label><div className="tool-right"><button className={`filter ${filterOpen ? 'chosen':''}`} onClick={()=>setFilterOpen(!filterOpen)}><SlidersHorizontal size={16}/> Filter <span>3</span></button><div className="view-toggle"><button className={view==='grid'?'selected':''} onClick={()=>setView('grid')}><Grid2X2 size={17}/></button><button className={view==='list'?'selected':''} onClick={()=>setView('list')}><List size={18}/></button></div></div></div>
      {filterOpen && <div className="filter-panel"><span>Showing all discoveries</span><button onClick={()=>setFilterOpen(false)}><X size={15}/> Close</button></div>}
      <div className={`cards ${view}`}>{filtered.map((item,i)=><Card key={item.title} item={item} saved={saved.includes(item.title)} onSave={()=>toggleSave(item.title)}/>)}</div>{filtered.length===0 && <div className="empty"><Search size={25}/><h3>No discoveries found</h3><p>Try another search term.</p></div>}
      </section>
    </main><footer><span>© BTTF 2025</span><span>Made for the curious <span className="footer-mark">✳</span></span><span>Instagram&nbsp;&nbsp; Newsletter</span></footer>
  </div>
}
createRoot(document.getElementById('root')).render(<App/>);
