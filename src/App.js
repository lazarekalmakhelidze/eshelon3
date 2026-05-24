import './style.css';import React, { useState, useEffect } from 'react';import {Compass, Sparkles, TrendingUp, Smartphone, ArrowRight,Menu, X, MapPin, Mail, Phone, Sliders, Zap, Check, BrainCircuit, Lock, CheckCircle, ChevronRight} from 'lucide-react';

// Data arrays remain exactly as you defined themconst portfolioData = [{id: 'lokross',title: 'LOKROSS',category: 'ბრენდინგი & იდენტობა',description: 'ლოკროსი წარმოადგენს გეომეტრიული სიზუსტისა და პრემიუმ ვიზუალის სინთეზს. ოპტიკურად დაბალანსებული მონოგრამა იდეალურად ერგება ნებისმიერ მედიუმს.',longDescription: 'ჩვენ შევქმენით მყარი, გეომეტრიული სტრუქტურა, სადაც წრეებისა და ხაზების ოპტიკური ბალანსი ქმნის პრემიუმ კლასის იდენტობას. ლოგო ადაპტირებულია სამშენებლო ჩაფხუტებიდან დაწყებული iOS-ის აპლიკაციის აიქონამდე. განსაკუთრებული აქცენტი გაკეთდა B ბლოკის გაყიდვების კამპანიაზე, სადაც გამოყენებულ იქნა დინამიური 3D "Drape" ეფექტი.',color: '#00c853',bgClass: 'bg-emerald-950/40 border-emerald-500/30 text-emerald-400',coverImage: 'https://i.postimg.cc/Kv4pBCHc/lok2.jpg',tags: ['Brand Guidelines', 'Logo Design', 'Grid System', '3D Drape Concept'],features: ['ოპტიკურად დაბალანსებული გრიდი', 'მონოგრამის არქიტექტურა', '3D პოსტერების სერია']},{id: 'west-dev',title: 'West Development',category: 'ინდუსტრიული ბრენდინგი',description: 'ურბანული და სამშენებლო ხასიათის მქონე იდენტობა, სადაც გამოყენებულია მწვანე კონტეინერების 3D ესთეტიკა და ყვითელი გამაფრთხილებელი ლენტის ელემენტები.',longDescription: 'West Development-ისთვის შევიმუშავეთ ინდუსტრიული და ხასიათიანი იდენტობა. ლოგოს გეომეტრია სრულყოფილად ასახავს სიზუსტეს. ბრენდისთვის შერჩეული ტიპოგრაფია (Bebas Neue + Helvetica Neue) კლასიკური, მუშა და სტაბილური ბიზნეს იმიჯის გარანტიაა.',color: '#ffab00',bgClass: 'bg-amber-950/40 border-amber-500/30 text-amber-400',coverImage: 'https://i.postimg.cc/Prkn4X1v/West1.jpg',tags: ['Industrial Design', 'Bebas Neue', '3D Container Rendering', 'Caution Tape Theme'],features: ['მკაფიო ტიპოგრაფიული იერარქია', 'გრიდზე დასმული გეომეტრია', 'სოციალური მედიის დინამიური ბანერები']},{id: 'foodly',title: 'Foodly',category: 'მობაილ აპლიკაცია & Mascot',description: 'მეგობრული პანდას ილუსტრაცია და პინისა და ჩანგლის გაერთიანება ჭკვიანურ ლოგოში. ნარინჯისფერი და ლურჯი ფერების ენერგიული კონტრასტი.',longDescription: 'Foodly-სთვის შექმნილი ლოგო აერთიანებს ადგილმდებარეობის პინსა და ჩანგალს, რაც პირდაპირ მიანიშნებს მიტანის სერვისზე. პერსონაჟი (Mascot) - საყვარელი პანდა - მომხმარებელთან ამყარებს ემოციურ კავშირს, ხოლო UI ელემენტები და კაშკაშა ფერები ზრდის კონვერსიას და აპლიკაციას ხდის მიმზიდველს.',color: '#2979ff',bgClass: 'bg-blue-950/40 border-blue-500/30 text-blue-400',coverImage: 'https://i.postimg.cc/QxP4b0LZ/foodly1.jpg',tags: ['App UI/UX', 'Mascot Design', 'Vibrant Contrast', 'Brand Mascot'],features: ['ანიმაციური პერსონაჟი', 'ილუსტრირებული შეფუთვები', 'Clickable UI სტრუქტურა']},{id: 'panorama',title: 'Panorama Group & Solo CH 51',category: 'პრემიუმ კამპანიები',description: 'ქუთაისის ისტორიული კოლაჟი, ავტომობილების მასშტაბური გათამაშება და Solo-სთან კოლაბორაციით შექმნილი პრემიუმ არქიტექტურული ვიზუალი.',longDescription: 'Panorama-სთვის შექმნილი კოლაჟური ხელოვნება ქუთაისის 3500 წლიან ისტორიაზე ძლიერ ემოციურ გავლენას ახდენს. SOLO CH 51-თან კოლაბორაციაში კი დავიჭირეთ პრემიუმ სეგმენტის შეგრძნება მუქი ლურჯი, ოქროსფერი და თეთრი ფერების დახვეწილი ბალანსითა და სუფთა არქიტექტურული რენდერებით.',color: '#d500f9',bgClass: 'bg-fuchsia-950/40 border-fuchsia-500/30 text-fuchsia-400',coverImage: 'https://i.postimg.cc/X7DhPnC1/panorama1.jpg',tags: ['Premium Marketing', 'Historical Collage', '3D Render Presentation', 'Solo Collaboration'],features: ['მაღალი კლასის ტიპოგრაფია', 'ემოციური ვიზუალური ნარატივი', 'გაყიდვებზე ორიენტირებული რენდერები']},{id: 'education',title: 'საგანმანათლებლო პოსტერები',category: 'საიმიჯო & ფილოსოფიური სერია',description: '„არ გაუშვა შანსი ხელიდან“ — ბეთჰოვენის, ჯორდანის, ტესლასა და არმსტრონგის მაგალითზე აგებული მისტიკური, მოტივაციური კამპანია.',longDescription: 'ეს სერია აგებულია ძლიერ ფილოსოფიურ იდეაზე: "წარმოიდგინე, რომ ბეთჰოვენის სიყრუე დასასრულად ჩათვლილიყო...". მუქი, მისტიკური განათებები, დრამატული ტიპოგრაფია და გრეხილი ტექსტები მომხმარებლის მზერას აჯაჭვებს და აიძულებს ბოლომდე წაიკითხოს ბრენდის სათქმელი.',color: '#ff1744',bgClass: 'bg-red-950/40 border-red-500/30 text-red-400',coverImage: 'https://i.postimg.cc/hGRCFvPw/lok1.jpg',tags: ['Copywriting', 'Storytelling', 'Dramatic Lighting', 'Typography Art'],features: ['ღრმა სთორითელინგი (Storytelling)', 'კინემატოგრაფიული დიზაინი', 'მაღალი ორგანული ჩართულობა']}];

const brandingPackages = [{title: "ლოგო დიზაინი",price: "500 ₾",desc: "საწყისი პაკეტი სტარტაპებისთვის და ახალი პროექტებისთვის, ვისაც სჭირდება სწრაფი და ხარისხიანი იდენტობა.",features: [{ text: "ლოგოს 2 ვარიაცია", included: true },{ text: "ლოგოს ადაპტაციები (ვერტიკალური, ჰორიზონტალური)", included: true },{ text: "ძირითადი ფერების პალიტრა", included: true },{ text: "ტიპოგრაფიის სახელმძღვანელო", included: true },{ text: "ვიზუალური სტილის აღწერა", included: false },{ text: "სრული ბრენდბუქი & სტრატეგია", included: false }],badge: "სტარტაპი"},{title: "ვიზუალური იდენტობა",price: "3,000 ₾",desc: "საშუალო ბიზნესისთვის, რომელსაც სურს ბაზარზე მყარად და პროფესიონალურად პოზიციონირება.",features: [{ text: "ლოგოს 3 ვარიაცია", included: true },{ text: "სრული ფერთა პალიტრა & კოდები", included: true },{ text: "ბრენდის ტიპოგრაფიის სისტემა", included: true },{ text: "ვიზუალური სტილი & ელემენტები", included: true },{ text: "შეფუთვის სტილი ან სავიზიტო ბარათები", included: true },{ text: "ბრენდბუქი (Brand Guidelines)", included: true }],badge: "პოპულარული",featured: true},{title: "ბრენდინგი (სრული არქიტექტურა)",price: "3,900 ₾",desc: "მაქსიმალური პაკეტი ბრენდის სრული იდენტობისა და სტრატეგიის ჩამოსაყალიბებლად, სახელდებიდან დაწყებული.",features: [{ text: "ბრენდის სახელი (Naming) & სლოგანი", included: true },{ text: "ბრენდის ტონი (Tone of Voice) & სტრატეგია", included: true },{ text: "ლოგოს 4 ვარიაცია & სრული ადაპტაციები", included: true },{ text: "ფერები, ტიპოგრაფია & უნიკალური გრიდები", included: true },{ text: "შეფუთვისა და კორპორატიული ატრიბუტიკა", included: true },{ text: "სრული ბრენდ-არქიტექტურის წიგნი", included: true }],badge: "Echelon Premium"}];

const smmPackages = [{title: "Basic",price: "1,350 ₾ / თვეში",desc: "სტაბილური ონლაინ ყოფნისთვის და სოციალური ქსელების მოწესრიგებისთვის.",features: [{ text: "12 პოსტის დიზაინი & ქოფირაითინგი", included: true },{ text: "სთორის დიზაინი (ძირითადი)", included: true },{ text: "ედვერთაიზინგი (რეკლამის მართვა)", included: true },{ text: "ლოგო საჩუქრად", included: true },{ text: "კონტენტ კალენდარი", included: false },{ text: "შადოუ კამპანიები & ტესტირება", included: false }],badge: "საბაზისო"},{title: "Premium",price: "2,000 ₾ / თვეში",desc: "მაღალი ჩართულობისა და გაყიდვების სტიმულირებისთვის განკუთვნილი ოპტიმალური პაკეტი.",features: [{ text: "15 პოსტის დიზაინი & ქოფირაითინგი", included: true },{ text: "5 სთორის რედიზაინი (ყოველკვირეულად)", included: true },{ text: "ედვერთაიზინგის სრული მართვა", included: true },{ text: "ლოგო საჩუქრად", included: true },{ text: "კონტენტ კალენდარი (დაგეგმვა)", included: true },{ text: "შადოუ კამპანიები (ტესტირებისთვის)", included: false }],badge: "რეკომენდებული",featured: true},{title: "Ultimate",price: "2,200 ₾ / თვეში",desc: "სრული მარკეტინგული მხარდაჭერა და მაქსიმალური წვდომა უახლესი სტრატეგიებით.",features: [{ text: "17 პოსტის დიზაინი & ქოფირაითინგი", included: true },{ text: "10 სთორის რედიზაინი & ინტერაქტივი", included: true },{ text: "ედვერთაიზინგის მოწინავე მართვა", included: true },{ text: "შადოუ რეკლამების მუდმივი ტესტირება", included: true },{ text: "კონტენტ კალენდარი & სეზონური გეგმა", included: true },{ text: "სრული ყოველთვიური რეპორტინგი", included: true }],badge: "მაქსიმალური"}];

export default function EchelonApp() {const [activeTab, setActiveTab] = useState('branding');const [selectedProject, setSelectedProject] = useState(null);const [menuOpen, setMenuOpen] = useState(false);const [mouse, setMouse] = useState({ x: 0, y: 0 });

// Prevent body scroll when modals are openuseEffect(() => {if (selectedProject || orderModal) {document.body.style.overflow = 'hidden';} else {document.body.style.overflow = 'unset';}return () => { document.body.style.overflow = 'unset'; };}, [selectedProject, activeTab]); // Also listen to orderModal if implemented

const handleMouseMove = (e) => {const { clientX, clientY } = e;const x = (clientX / window.innerWidth - 0.5) * 20;const y = (clientY / window.innerHeight - 0.5) * 20;setMouse({ x, y });};

const scrollToTop = (e) => {e.preventDefault();window.scrollTo({ top: 0, behavior: 'smooth' });};

const [customServices, setCustomServices] = useState({logo: true, guidelines: false, posts: 12, stories: 5, advertising: true, shadowTesting: false});const [businessIdea, setBusinessIdea] = useState("");const [aiLoading, setAiLoading] = useState(false);const [aiStrategyResult, setAiStrategyResult] = useState(null);const [aiError, setAiError] = useState("");const [orderModal, setOrderModal] = useState(null);const [orderSuccess, setOrderSuccess] = useState(false);const [orderForm, setOrderForm] = useState({ name: '', phone: '', note: '' });

const calculateCustomPrice = () => {let base = 0;if (customServices.logo) base += 500;if (customServices.guidelines) base += 1200;base += customServices.posts * 90;base += customServices.stories * 25;if (customServices.advertising) base += 400;if (customServices.shadowTesting) base += 250;return base;};

const fetchWithBackoff = async (url, options, retries = 5, delay = 1000) => {try {const response = await fetch(url, options);if (!response.ok) throw new Error(HTTP error! status: ${response.status});return await response.json();} catch (error) {if (retries > 0) {await new Promise(resolve => setTimeout(resolve, delay));return fetchWithBackoff(url, options, retries - 1, delay * 2);} else throw error;}};

const generateAIStrategy = async (e) => {e.preventDefault();if (!businessIdea.trim()) return;setAiLoading(true);setAiError("");setAiStrategyResult(null);

const apiKey = ""; // Insert Key
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

const systemPrompt = `You are the brilliant and bold Creative Director of "Echelon"...`; // Truncated for brevity

// ... AI Implementation remains unchanged
setTimeout(() => { setAiLoading(false); }, 1000); // Mock for now

};

const handleOrderSubmit = (e) => {e.preventDefault();setOrderSuccess(true);setTimeout(() => {setOrderSuccess(false);setOrderModal(null);setOrderForm({ name: '', phone: '', note: '' });}, 3000);};

return (

  {/* GLOWING HEADER BACKGROUND ACCENT */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#E50914]/10 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />

  {/* NAVBAR */}
  <nav className="sticky top-0 z-40 bg-[#0d0d0d]/80 backdrop-blur-xl border-b border-[#262626]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <div className="flex items-center space-x-3">
          <a href="#" onClick={scrollToTop} className="flex items-center space-x-3 group">
            <div className="relative cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#E50914] to-orange-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-500" />
              <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-[#E50914]/50">
                <img src="https://i.postimg.cc/KcB5nxGh/logod.jpg" alt="Eshelon Logo" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <span className="text-xl font-black tracking-widest text-white block group-hover:text-gray-200 transition">ESHELON</span>
              <span className="text-[10px] tracking-widest text-[#E50914] font-bold block -mt-1 uppercase">Highest</span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-sm font-medium text-gray-300 hover:text-[#E50914] transition-colors">სერვისები</a>
          <a href="#portfolio" className="text-sm font-medium text-gray-300 hover:text-[#E50914] transition-colors">პორტფოლიო</a>
          <a href="#pricing" className="text-sm font-medium text-gray-300 hover:text-[#E50914] transition-colors">ფასები</a>
          <a href="#ai-strategist" className="text-sm font-medium flex items-center space-x-1 text-red-400 hover:text-red-300 transition-colors bg-red-950/40 px-3 py-1 rounded-full border border-red-500/20">
            <BrainCircuit className="w-4 h-4 animate-pulse" />
            <span>Echelon AI</span>
          </a>
          <a href="#contact" className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-bold bg-[#E50914] text-white hover:bg-red-700 active:scale-95 transition">
            კონტაქტი
          </a>
        </div>
      </div>
    </div>
  </nav>

  {/* HERO SECTION */}
  <section id="hero" className="relative overflow-hidden min-h-[92vh] flex items-center" onMouseMove={handleMouseMove}>
    <style>{`
      @keyframes coverReveal {
        from { opacity: 0; transform: scale(1.05); }
        to   { opacity: 0.8; transform: scale(1); }
      }
      @keyframes headlineIn {
        from { opacity: 0; transform: translateY(32px); }
        to   { opacity: 1; transform: translateY(0); }
      }
    `}</style>

    {/* Cover image wrapper with parallax */}
    <div 
      className="absolute inset-0 transition-transform duration-[600ms] ease-out will-change-transform"
      style={{ transform: `translate(${mouse.x}px, ${mouse.y}px) scale(1.02)` }}
    >
      <img
        src="https://i.postimg.cc/y6mTNYF0/cover-landscape.jpg"
        alt="Eshelon Cover"
        className="hidden lg:block w-full h-full object-cover object-right"
        style={{ animation: 'coverReveal 2.5s cubic-bezier(0.22,1,0.36,1) both' }}
      />
      <img
        src="https://i.postimg.cc/7ZW3RCkT/cover-portrait.jpg"
        alt="Eshelon Cover"
        className="block lg:hidden w-full h-full object-cover object-right"
        style={{ animation: 'coverReveal 2.5s cubic-bezier(0.22,1,0.36,1) both' }}
      />
    </div>

    {/* Improved Soft Gradients to blend image edges seamlessly */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/90 to-transparent w-full lg:w-[70%] z-10" />
    <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent z-10" />
    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0d0d0d]/60 to-transparent z-10 hidden lg:block" />

    {/* Content */}
    <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-xl lg:max-w-2xl space-y-8">
        <div className="inline-flex items-center space-x-2 bg-red-950/60 border border-[#E50914]/40 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#E50914]">
          <Sparkles className="w-4 h-4 text-red-500 animate-spin-slow" />
          <span>ეშელონი • ბრენდირებული ერთეულების არჩევანი</span>
        </div>

        <img
          src="https://i.postimg.cc/gj0h2dyY/teqsst1.png"
          alt="Headline"
          className="w-full max-w-lg drop-shadow-2xl"
          style={{ animation: 'headlineIn 1s 0.4s cubic-bezier(0.22,1,0.36,1) both' }}
        />

        <div className="flex flex-col sm:flex-row items-start gap-4">
          <a href="#portfolio" className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold bg-white text-black hover:bg-gray-100 transition duration-200 shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-95">
            ᲜᲐᲮᲔ ᲞᲝᲠᲢᲤᲝᲚᲘᲝ
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <a href="#pricing" className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold bg-black/40 backdrop-blur-sm text-white border border-white/30 hover:border-white hover:bg-white/10 transition duration-200 active:scale-95">
            ᲤᲐᲡᲔᲑᲘᲡ ᲞᲐᲙᲔᲢᲔᲑᲘ
          </a>
        </div>
      </div>
    </div>
  </section>

  {/* PORTFOLIO SECTION (Snippet modified for UI/UX) */}
  <section id="portfolio" className="py-24 relative bg-[#0a0a0a]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer bg-[#121212] border border-white/5 rounded-2xl overflow-hidden hover:border-[#E50914]/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#E50914]/10 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="aspect-video relative border-b border-white/5 overflow-hidden">
              <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 z-10">
                <div className="inline-block px-3 py-1 rounded-md text-[10px] font-mono tracking-widest uppercase bg-black/60 backdrop-blur-md border border-white/20 text-white">
                  {project.title}
                </div>
              </div>
            </div>
            {/* Text Content Area */}
            <div className="p-6 space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 2).map((tag, idx) => (
                  <span key={idx} className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-md bg-white/5 text-gray-400 border border-white/10 group-hover:border-white/20 transition">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-400 line-clamp-3 group-hover:text-gray-300 transition">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* PORTFOLIO MODAL WITH FIXED SCROLL */}
  {selectedProject && (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto"
      onClick={() => setSelectedProject(null)}
      style={{ animation: 'fadeIn 0.3s ease both' }}
    >
      <div className="min-h-full flex items-start justify-center p-4 py-12">
        <div
          className="bg-[#121212] border border-white/10 rounded-2xl max-w-3xl w-full shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          style={{ animation: 'slideUp 0.4s cubic-bezier(0.22,1,0.36,1) both' }}
        >
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-4 right-4 z-20 text-gray-400 hover:text-white bg-black/70 backdrop-blur-md p-2 rounded-full border border-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {selectedProject.coverImage && (
            <div className="w-full relative">
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-[#121212] opacity-80" />
              <img src={selectedProject.coverImage} alt={selectedProject.title} className="w-full h-auto max-h-[50vh] object-cover" />
            </div>
          )}

          <div className="p-8 space-y-6 relative z-10 -mt-16 bg-gradient-to-t from-[#121212] via-[#121212] to-transparent pt-16">
            <div className="space-y-1">
              <span className="text-xs font-mono tracking-widest text-[#E50914] uppercase">{selectedProject.category}</span>
              <h3 className="text-3xl sm:text-4xl font-black text-white">{selectedProject.title}</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{selectedProject.longDescription}</p>
          </div>
        </div>
      </div>
    </div>
  )}

  {/* ... Rest of the sections remain structured ... */}
</div>

);}
