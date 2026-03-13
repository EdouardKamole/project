"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Search, Globe, GraduationCap, TrendingUp, ChevronDown,
  MapPin, Award, Users, BookOpen, Star, ArrowRight,
  Linkedin, Twitter, Instagram, Menu, X, Mail, Phone,
  Calendar, CheckCircle
} from "lucide-react";

function Navbar() {
  const [studyOpen, setStudyOpen] = useState(false);
  const [uniOpen, setUniOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-black text-blue-700 tracking-tight">Scholarvia</span>
          </Link>
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-gray-700 font-medium hover:text-blue-700 transition-colors text-sm">Home</Link>
            <Link href="/scholarships" className="text-gray-700 font-medium hover:text-blue-700 transition-colors text-sm">Scholarships</Link>
            <div className="relative" onMouseEnter={() => setStudyOpen(true)} onMouseLeave={() => setStudyOpen(false)}>
              <button className="flex items-center gap-1 text-gray-700 font-medium hover:text-blue-700 transition-colors text-sm">
                Study Abroad <ChevronDown className="w-3 h-3" />
              </button>
              {studyOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  {["Canada","United States","United Kingdom","Germany","China","Australia"].map((c) => (
                    <Link key={c} href={`/scholarships?country=${c}`} className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                      <MapPin className="w-3 h-3" />{c}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="relative" onMouseEnter={() => setUniOpen(true)} onMouseLeave={() => setUniOpen(false)}>
              <button className="flex items-center gap-1 text-gray-700 font-medium hover:text-blue-700 transition-colors text-sm">
                Popular Universities <ChevronDown className="w-3 h-3" />
              </button>
              {uniOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  {["University of Toronto","Harvard University","University of Oxford","Tsinghua University","MIT"].map((u) => (
                    <Link key={u} href="/universities" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                      <BookOpen className="w-3 h-3" />{u}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/login" className="text-sm font-semibold text-gray-700 hover:text-blue-700 px-3 py-2">Login</Link>
            <Link href="/register" className="text-sm font-semibold text-gray-700 border border-gray-300 px-4 py-2 rounded-lg hover:border-blue-700 hover:text-blue-700 transition-colors">Register</Link>
            <Link href="/register" className="text-sm font-bold bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition-colors">Apply Now</Link>
          </div>
          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {["Home","Scholarships","About","Contact"].map((item) => (
            <Link key={item} href={item==="Home"?"/":`/${item.toLowerCase()}`} className="block py-2 text-gray-700 font-medium">{item}</Link>
          ))}
          <div className="flex gap-3 pt-2">
            <Link href="/login" className="flex-1 text-center border border-gray-300 py-2 rounded-lg text-sm font-semibold">Login</Link>
            <Link href="/register" className="flex-1 text-center bg-blue-700 text-white py-2 rounded-lg text-sm font-bold">Apply Now</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function TopSearchBar() {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 z-40 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3">
        <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5">
          <Search className="w-4 h-4 text-gray-400 shrink-0" />
          <input type="text" placeholder="Search by country, city, university or course..."
            className="flex-1 bg-transparent text-sm text-gray-700 outline-none placeholder-gray-400" />
          <button className="bg-blue-700 text-white text-xs font-bold px-4 py-1.5 rounded-lg hover:bg-blue-800 transition-colors">Search</button>
        </div>
      </div>
    </div>
  );
}

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const slides = [
    { bg: "from-blue-900 via-blue-800 to-blue-700", emoji: "🎓" },
    { bg: "from-indigo-900 via-indigo-800 to-blue-700", emoji: "🌍" },
    { bg: "from-blue-800 via-blue-700 to-cyan-600", emoji: "📚" },
    { bg: "from-slate-900 via-blue-900 to-blue-800", emoji: "🏛️" },
    { bg: "from-blue-700 via-blue-800 to-indigo-900", emoji: "✈️" },
  ];
  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className={`relative min-h-[600px] bg-gradient-to-br ${slides[current].bg} text-white flex items-center transition-all duration-1000 pt-16`}>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="relative max-w-5xl mx-auto px-4 py-24 text-center w-full">
        <div className="text-6xl mb-6">{slides[current].emoji}</div>
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          Give your dreams wings<br /><span className="text-yellow-300">and watch them take off!</span>
        </h1>
        <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Explore from a range of hundreds of scholarships that you won&apos;t find anywhere else.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/scholarships" className="bg-white text-blue-700 font-bold px-8 py-3.5 rounded-xl hover:bg-yellow-300 hover:text-blue-900 transition-all shadow-lg">Explore Scholarships</Link>
          <Link href="/register" className="border-2 border-white text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white hover:text-blue-700 transition-all">Apply Now →</Link>
        </div>
        <div className="flex justify-center gap-2 mt-10">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all ${i===current?"bg-white w-6":"bg-white/40 w-2"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="bg-blue-700 text-white py-12 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { value:"5,000+", label:"Students Assisted", icon:<Users className="w-5 h-5"/> },
          { value:"$684K+", label:"Scholarships Available", icon:<Award className="w-5 h-5"/> },
          { value:"3,000+", label:"Colleges Listed", icon:<BookOpen className="w-5 h-5"/> },
          { value:"100+", label:"Countries Listed", icon:<Globe className="w-5 h-5"/> },
        ].map((s) => (
          <div key={s.label}>
            <div className="flex justify-center mb-2 text-blue-200">{s.icon}</div>
            <div className="text-3xl md:text-4xl font-black">{s.value}</div>
            <div className="text-blue-200 text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ScholarshipSearch() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">Find Scholarships</h2>
        <p className="text-gray-500 mb-10">Filter by your target country, degree level and course</p>
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 text-left">For Application To:</p>
          <div className="grid md:grid-cols-3 gap-4 mb-5">
            <select className="border border-gray-200 rounded-xl px-4 py-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50">
              <option>Target Country</option>
              {["Canada","United States","United Kingdom","Germany","China","Australia"].map((c)=><option key={c}>{c}</option>)}
            </select>
            <select className="border border-gray-200 rounded-xl px-4 py-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50">
              <option>Degree Level</option>
              {["Undergraduate","Masters","PhD","High School"].map((d)=><option key={d}>{d}</option>)}
            </select>
            <select className="border border-gray-200 rounded-xl px-4 py-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50">
              <option>Field of Study</option>
              {["Engineering","Medicine","Business","Arts","Law","Sciences"].map((f)=><option key={f}>{f}</option>)}
            </select>
          </div>
          <Link href="/scholarships" className="w-full bg-blue-700 text-white font-bold py-3.5 rounded-xl hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 text-sm">
            <Search className="w-4 h-4" />Search Scholarships
          </Link>
        </div>
      </div>
    </section>
  );
}

function ScholarshipCategories() {
  const cats = [
    { title:"Merit-Based Scholarship", emoji:"🏆", bg:"from-yellow-50 to-orange-50 border-yellow-200", desc:"For students with excellence in academics, sports, or extracurricular activities." },
    { title:"Need-Based Scholarship", emoji:"💙", bg:"from-blue-50 to-cyan-50 border-blue-200", desc:"Supporting students from financially disadvantaged backgrounds." },
    { title:"Country-Specific Scholarship", emoji:"🌍", bg:"from-green-50 to-emerald-50 border-green-200", desc:"Exclusive scholarships for students from specific countries." },
    { title:"College-Specific Scholarship", emoji:"🏛️", bg:"from-purple-50 to-violet-50 border-purple-200", desc:"Scholarships offered directly by specific universities." },
    { title:"Student-Specific Scholarship", emoji:"👤", bg:"from-pink-50 to-rose-50 border-pink-200", desc:"Based on gender, ethnicity, or personal background." },
    { title:"Not Sure? Get Help", emoji:"💬", bg:"from-gray-50 to-slate-50 border-gray-200", desc:"Our scholarship consultants will help you find the best fit for your profile." },
  ];
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Apply For Scholarships</h2>
          <p className="text-gray-500">Choose the scholarship type that fits your profile</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cats.map((cat) => (
            <div key={cat.title} className={`border bg-gradient-to-br ${cat.bg} rounded-2xl p-6 hover:shadow-lg transition-all group`}>
              <div className="text-4xl mb-4">{cat.emoji}</div>
              <h3 className="font-black text-gray-900 mb-2 text-lg">{cat.title}</h3>
              <p className="text-gray-500 text-sm mb-5">{cat.desc}</p>
              <Link href="/register" className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 hover:gap-3 transition-all">
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlyHighProgram() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-5xl mb-6">✈️</div>
        <h2 className="text-3xl md:text-4xl font-black mb-4">Scholarvia Fly High Scholarship Program</h2>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
          This scholarship program rewards dedicated students studying abroad and helps reduce the financial burden of international education.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">
          {[
            { icon:"🎯", title:"Merit-Based Selection", desc:"Selected based on academic excellence and extracurricular achievements." },
            { icon:"💰", title:"Up to $10,000", desc:"Covering tuition, accommodation, and living expenses abroad." },
            { icon:"🌐", title:"Global Opportunities", desc:"Study in Canada, USA, UK, Germany, China and more." },
          ].map((item) => (
            <div key={item.title} className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/20">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-blue-200 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <Link href="/register" className="inline-block mt-10 bg-yellow-400 text-blue-900 font-black px-8 py-3.5 rounded-xl hover:bg-yellow-300 transition-colors">
          Apply for Fly High Program
        </Link>
      </div>
    </section>
  );
}

function PopularScholarships() {
  const scholarships = [
    { country:"🇬🇧 UK", amount:"£2,000", title:"Responsible Leader Scholarship", desc:"For students working to improve the environment or support social causes.", deadline:"Mar 31, 2025" },
    { country:"🇬🇧 UK", amount:"£2,000", title:"Passionate Scholar Award", desc:"For students demonstrating outstanding academic excellence.", deadline:"Apr 15, 2025" },
    { country:"🇨🇦 Canada", amount:"$5,000", title:"Global Future Leaders", desc:"For international students with leadership potential.", deadline:"May 1, 2025" },
    { country:"🇺🇸 USA", amount:"$8,000", title:"Innovation Excellence Grant", desc:"Supporting students in STEM fields with innovative ideas.", deadline:"Apr 30, 2025" },
    { country:"🇩🇪 Germany", amount:"€3,500", title:"European Scholar Program", desc:"For outstanding students from developing countries.", deadline:"Jun 1, 2025" },
    { country:"🇨🇳 China", amount:"¥50,000", title:"Silk Road Scholarship", desc:"Promoting international cultural exchange through education.", deadline:"Mar 20, 2025" },
  ];
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Popular Scholarships</h2>
          <p className="text-gray-500">Handpicked opportunities with the highest acceptance rates</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {scholarships.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-gray-500">{s.country}</span>
                <span className="text-lg font-black text-blue-700">{s.amount}</span>
              </div>
              <h3 className="font-black text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{s.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{s.desc}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-400 flex items-center gap-1"><Calendar className="w-3 h-3"/>{s.deadline}</span>
                <Link href="/register" className="text-xs font-bold text-blue-700 hover:underline flex items-center gap-1">Apply Now <ArrowRight className="w-3 h-3"/></Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/scholarships" className="inline-flex items-center gap-2 border-2 border-blue-700 text-blue-700 font-bold px-8 py-3 rounded-xl hover:bg-blue-700 hover:text-white transition-all">
            View All Scholarships <ArrowRight className="w-4 h-4"/>
          </Link>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { step:"01", icon:<Users className="w-7 h-7 text-blue-700"/>, title:"Tell Us About You", points:["Your name & email","Level of study","Target country","Field of study"] },
    { step:"02", icon:<Search className="w-7 h-7 text-blue-700"/>, title:"Explore Scholarships", points:["Get personalized matches","Filter by your criteria","Compare opportunities","Save your favorites"] },
    { step:"03", icon:<CheckCircle className="w-7 h-7 text-blue-700"/>, title:"Get Selected", points:["AI-powered matching","University review","Track your applications","Receive your offer"] },
  ];
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">How Scholarvia Works</h2>
          <p className="text-gray-500">Three simple steps to your dream scholarship</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item) => (
            <div key={item.step} className="relative text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 border-2 border-blue-100 rounded-2xl mb-4">{item.icon}</div>
              <div className="text-5xl font-black text-blue-100 absolute -top-2 right-0 select-none">{item.step}</div>
              <h3 className="font-black text-gray-900 text-xl mb-4">{item.title}</h3>
              <ul className="space-y-2">
                {item.points.map((p) => (
                  <li key={p} className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-700"/>{p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">About Us</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-5">Making Global Education Accessible to Everyone</h2>
            <p className="text-gray-600 mb-5 leading-relaxed">Scholarvia was created to make international education accessible to students worldwide by connecting them with scholarships and funding opportunities from top universities across the globe.</p>
            <p className="text-gray-600 mb-8 leading-relaxed">We bridge the gap between ambitious students and world-class universities, simplifying the study abroad scholarship process with smart matching, seamless applications, and dedicated support.</p>
            <Link href="/about" className="inline-flex items-center gap-2 text-blue-700 font-bold hover:underline">Learn More About Us <ArrowRight className="w-4 h-4"/></Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon:"🎓", title:"Expert Guidance", desc:"Scholarship consultants available 24/7" },
              { icon:"🔒", title:"Secure & Trusted", desc:"Your data is safe with us" },
              { icon:"⚡", title:"Fast Applications", desc:"Apply to multiple scholarships at once" },
              { icon:"🤖", title:"AI Matching", desc:"Smart recommendations for your profile" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Need Scholarship Assistance?</h2>
          <p className="text-gray-500">Fill in your details and our consultants will reach out to you</p>
        </div>
        <div className="bg-gradient-to-br from-blue-700 to-indigo-800 rounded-2xl p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label:"Full Name", type:"text", placeholder:"John Doe" },
              { label:"Email Address", type:"email", placeholder:"john@email.com" },
              { label:"Phone Number", type:"tel", placeholder:"+1 234 567 890" },
              { label:"Nationality", type:"text", placeholder:"e.g. Nigerian" },
            ].map((field) => (
              <div key={field.label}>
                <label className="block text-xs font-bold text-blue-200 mb-1.5">{field.label}</label>
                <input type={field.type} placeholder={field.placeholder}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-blue-300 text-sm focus:outline-none focus:ring-2 focus:ring-white/40" />
              </div>
            ))}
            {[
              { label:"Target Country", options:["Canada","USA","UK","Germany","China","Australia"] },
              { label:"Admission Status", options:["Not Applied Yet","Applied","Waiting for Response","Admitted"] },
            ].map((field) => (
              <div key={field.label}>
                <label className="block text-xs font-bold text-blue-200 mb-1.5">{field.label}</label>
                <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/40">
                  <option value="">Select...</option>
                  {field.options.map((o)=><option key={o} className="text-gray-900">{o}</option>)}
                </select>
              </div>
            ))}
            <div>
              <label className="block text-xs font-bold text-blue-200 mb-1.5">Target University</label>
              <input type="text" placeholder="e.g. University of Toronto"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-blue-300 text-sm focus:outline-none focus:ring-2 focus:ring-white/40" />
            </div>
            <div>
              <label className="block text-xs font-bold text-blue-200 mb-1.5">Target Course</label>
              <input type="text" placeholder="e.g. Computer Science"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-blue-300 text-sm focus:outline-none focus:ring-2 focus:ring-white/40" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-blue-200 mb-1.5">Expected Admission Date</label>
              <input type="date" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/40" />
            </div>
          </div>
          <button className="w-full mt-6 bg-yellow-400 text-blue-900 font-black py-3.5 rounded-xl hover:bg-yellow-300 transition-colors text-sm">Submit Request</button>
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  const posts = [
    { title:"International Scholarships for Students 2025", desc:"A complete guide to finding and applying for international scholarships this year.", date:"Jan 15, 2025", tag:"Guide" },
    { title:"Scholarships for Students in Australia", desc:"Top scholarship opportunities available for international students in Australian universities.", date:"Feb 2, 2025", tag:"Australia" },
    { title:"Scholarships for International Students in the UK", desc:"Discover fully-funded and partial scholarships at UK universities.", date:"Feb 18, 2025", tag:"UK" },
    { title:"How to Study Abroad on a Scholarship", desc:"Step-by-step advice from students who successfully secured scholarships.", date:"Mar 5, 2025", tag:"Tips" },
  ];
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Our Blog</h2>
            <p className="text-gray-500 mt-1">Tips, guides and scholarship news</p>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-2 text-sm font-bold text-blue-700 hover:underline">View All <ArrowRight className="w-4 h-4"/></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div key={post.title} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all group">
              <div className="h-40 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-5xl">📰</div>
              <div className="p-5">
                <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{post.tag}</span>
                <h3 className="font-black text-gray-900 mt-2 mb-2 text-sm leading-snug group-hover:text-blue-700 transition-colors">{post.title}</h3>
                <p className="text-gray-500 text-xs mb-4 line-clamp-2">{post.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{post.date}</span>
                  <Link href="/blog" className="text-xs font-bold text-blue-700 hover:underline">Read more</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { name:"Amara K.", country:"🇳🇬 Nigeria", text:"Scholarvia helped me find a scholarship in Canada and start my master's degree. The process was smooth and the team was incredibly supportive." },
    { name:"Chen Wei", country:"🇨🇳 China", text:"I found a full scholarship to study in Germany through Scholarvia. I couldn't believe how easy the application process was!" },
    { name:"Fatima A.", country:"🇪🇬 Egypt", text:"Thanks to Scholarvia, I'm now studying at the University of Oxford. The AI matching found scholarships I never knew existed." },
    { name:"James O.", country:"🇰🇪 Kenya", text:"The consultants guided me through every step. I secured a $15,000 scholarship to study in the USA!" },
  ];
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">What Students Say</h2>
          <p className="text-gray-500">Real stories from students who achieved their dreams</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_,i)=><Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400"/>)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold text-sm">{r.name[0]}</div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{r.name}</div>
                  <div className="text-xs text-gray-400">{r.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedIn() {
  const partners = ["Forbes","BBC","CNN","Reuters","Al Jazeera","TechCrunch","Guardian","Bloomberg"];
  return (
    <section className="py-12 px-4 bg-gray-50 border-y border-gray-200 overflow-hidden">
      <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Featured In & Trusted By</p>
      <div className="flex gap-10" style={{ animation:"scroll 20s linear infinite" }}>
        {[...partners,...partners].map((p,i)=>(
          <div key={i} className="shrink-0 font-black text-xl text-gray-300 hover:text-blue-700 transition-colors cursor-pointer whitespace-nowrap">{p}</div>
        ))}
      </div>
      <style>{`@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center"><GraduationCap className="w-5 h-5 text-white"/></div>
              <span className="text-xl font-black">Scholarvia</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">Connecting Students to Scholarships Worldwide 🌍</p>
            <div className="flex gap-3">
              {[Linkedin,Twitter,Instagram].map((Icon,i)=>(
                <a key={i} href="#" className="w-8 h-8 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4"/>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-300">Explore</h4>
            <ul className="space-y-2.5">
              {["Scholarships","Universities","Countries","Blog"].map((item)=>(
                <li key={item}><Link href={`/${item.toLowerCase()}`} className="text-gray-400 text-sm hover:text-white transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-300">Company</h4>
            <ul className="space-y-2.5">
              {["About","Contact","Careers","Press"].map((item)=>(
                <li key={item}><Link href={`/${item.toLowerCase()}`} className="text-gray-400 text-sm hover:text-white transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-300">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm"><Mail className="w-4 h-4"/>hello@scholarvia.com</li>
              <li className="flex items-center gap-2 text-gray-400 text-sm"><Phone className="w-4 h-4"/>+1 (800) SCH-OLAR</li>
              <li className="flex items-center gap-2 text-gray-400 text-sm"><Globe className="w-4 h-4"/>www.scholarvia.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Scholarvia. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-500 text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 text-sm hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <TopSearchBar />
      <main>
        <HeroSlider />
        <StatsSection />
        <ScholarshipSearch />
        <ScholarshipCategories />
        <FlyHighProgram />
        <PopularScholarships />
        <HowItWorks />
        <AboutSection />
        <ContactForm />
        <BlogSection />
        <Testimonials />
        <FeaturedIn />
      </main>
      <Footer />
    </>
  );
}
