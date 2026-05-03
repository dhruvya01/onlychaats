import {
  ArrowRight,
  Bell,
  Check,
  ClipboardCheck,
  Home,
  Instagram,
  ListChecks,
  Medal,
  Menu as MenuIcon,
  MessageCircle,
  Send,
  Star,
  User,
  Utensils,
  X,
  Plus,
  Minus,
  Trash2,
  Gift,
  MapPin,
  TrendingUp,
  Clock,
  ShoppingCart,
} from 'lucide-react';
import * as confettiModule from 'canvas-confetti';
const confetti = (confettiModule as any).default || confettiModule;
import { useEffect, useState } from 'react';

// Import logo as a bundled asset
import logoImg from './images/logo.png';

// For menu images, we're using Unsplash placeholders. 
// To use local images, move them to src/images/ and use:
// import img1 from './images/img1.jpeg';
const img1 = "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=800&auto=format&fit=crop"; // Bhelpuri
const img3 = "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800&auto=format&fit=crop"; // Bun Tikki
const img4 = "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop"; // Aloo Tikki Chole
const img5 = "https://images.unsplash.com/photo-1601050690597-df056fb01793?q=80&w=800&auto=format&fit=crop"; // Jhalmuri
const img6 = "https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=800&auto=format&fit=crop"; // Aloo Tikki Dahi
const img7 = "https://images.unsplash.com/photo-1599307767316-776533da941c?q=80&w=800&auto=format&fit=crop"; // Kalari Kulcha
const img8 = "https://images.unsplash.com/photo-1546539782-6fc531453083?q=80&w=800&auto=format&fit=crop"; // Tamatar Chaat
const img12 = "https://images.unsplash.com/photo-1601050690597-df056fb01793?q=80&w=800&auto=format&fit=crop"; // Papdi Chaat
const img13 = "https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=800&auto=format&fit=crop"; // Dahi Bhalla

const menuItems = [
  {
    title: "Lucknow Papdi Chaat",
    desc: "Crispy papdi layered with creamy yogurt, tangy tamarind chutney, refreshing coriander chutney, crunchy beetroot, juicy anar, a hint of ginger, and finished with chaat masala for a perfect balance of sweet, spicy, and tangy flavors.",
    bgColor: "bg-white",
    textColor: "text-black",
    image: img12
  },
  {
    title: "Delhi Dahi Bhalla",
    desc: "Soft Urad Fritters Soaked in Sweet Creamy Curd, Topped with Tamarind Chutney, Coriander Chutney, Pomegranate Seeds, Beetroot Julienne, and Tangy Spice Blend.",
    bgColor: "bg-secondary",
    textColor: "text-black",
    image: img13
  },
  {
    title: "Dehradun Bun Tikki",
    desc: "Soft bun stuffed with a crispy aloo tikki, sliced Onion and a generous spread of tangy tamarind and refreshing coriander chutney-simple, hearty, and full of flavours.",
    bgColor: "bg-tertiary",
    textColor: "text-white",
    image: img3
  },
  {
    title: "Ambala Aloo Tikki Chole Chaat",
    desc: "Crispy golden aloo tikki topped with slow cooked rustic spiced chole, creamy curd, tangy tamarind chutney, fresh coriander chutney and chaat masala. A perfect balance of spice, crunch and comfort, perfection for winters.",
    bgColor: "bg-primary",
    textColor: "text-white",
    image: img4
  },
  {
    title: "Purani Delhi Aloo Tikki Dahi Chaat",
    desc: "Crispy fried aloo tikki topped with curd, tangy tamarind saunth chutney, coriander chutney and chatpata spice blend.",
    bgColor: "bg-white",
    textColor: "text-black",
    image: img6
  },
  {
    title: "Kolkata Jhalmuri",
    desc: "Puffed rice tossed with boiled potato, kala chana, tomato, onion and cucumber, spiked with green chillies, lemon juice, a drizzle of mustard oil, crunchy Indian namkeen and fresh coriander for a fiery, tangy crunch.",
    bgColor: "bg-secondary",
    textColor: "text-black",
    image: img5
  },
  {
    title: "Bombay Chi Bhelpuri",
    desc: "Crispy golden aloo tikki topped with slow cooked rustic spiced chole, creamy curd, tangy tamarind chutney, fresh coriander chutney and chaat masala. A perfect balance of spice, crunch and comfort, perfection for winters.",
    bgColor: "bg-tertiary",
    textColor: "text-white",
    image: img1
  },
  {
    title: "Jammu Kalari Kulcha",
    desc: "Authentic Kalari cheese from Ramnagar Udhampur, Jammu, pan seared to perfection, with Onion Slices sandwiched in sesame buns with flavourful chutneys and a tangy chatpata masala.",
    bgColor: "bg-primary",
    textColor: "text-white",
    image: img7
  },
  {
    title: "Banarasi Tamatar Chaat",
    desc: "Slow cooked mushy red tomatoes, ginger, green chillies and aromatic spices, balanced with tangy tamarind and jaggery syrup, topped with crispy crushed papdi and fresh coriander warm, bold and deeply comforting in every bite.",
    bgColor: "bg-white",
    textColor: "text-black",
    image: img8
  }
];

export default function App() {
  const [view, setView] = useState<'home' | 'quest'>('home');
  const [couponCode, setCouponCode] = useState('CHAAT15');
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([false, false, false]);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [showCoupon, setShowCoupon] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const startQuest = () => {
    setView('quest');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuestClick = (index: number) => {
    setCompletedSteps((prev) => {
      const next = [...prev];
      next[index] = true;
      return next;
    });
    
    if (index < 2) {
      setTimeout(() => {
        setCurrentStep((prev) => (prev === index ? index + 1 : prev));
      }, 1000);
    } else if (index === 2) {
      setTimeout(() => {
        setCountdown(10);
      }, 500);
    }
  };

  useEffect(() => {
    if (countdown === null) return;
    
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowCoupon(true);
    }
  }, [countdown]);

  useEffect(() => {
    // Generate a random coupon code on component mount
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = 'CHAAT-';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCouponCode(result);
  }, []);

  useEffect(() => {
    if (completedSteps.every(Boolean)) {
      // Fire confetti on load for the reward vibe
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          colors: ['#ad1110', '#facd1c', '#009669'], // Brand colors
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          colors: ['#ad1110', '#facd1c', '#009669'], // Brand colors
        });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [completedSteps]);

  return (
    <div className="bg-surface-bright text-on-surface min-h-screen font-epilogue selection:bg-secondary selection:text-black">
      {view === 'home' ? (
        /* COOL DASHBOARD-STYLE HOME PAGE */
        <div className="min-h-screen bg-surface-bright p-4 sm:p-6 md:p-8 transition-all duration-500">
          <div className="max-w-[1200px] mx-auto">
            
            {/* Top Navigation Row */}
            <div className="flex justify-between items-center mb-8 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
                  <img src={logoImg} alt="logo" className="w-8 h-8 object-contain" />
                </div>
                <h1 className="font-black text-2xl uppercase tracking-tighter hidden sm:block">ONLY CHAATS</h1>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => setIsMenuOpen(true)}
                  className="bg-white border-[3px] border-black px-6 py-2 font-black uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2"
                >
                  <MenuIcon size={18} /> MENU
                </button>
              </div>
            </div>

            {/* BENTO DASHBOARD GRID */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* HERO SECTION (6 cols) */}
              <div className="md:col-span-8 bg-primary border-[4px] border-black p-8 sm:p-12 relative overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] min-h-[400px] flex flex-col justify-end">
                <div className="absolute top-8 right-8 w-40 h-40 sm:w-64 sm:h-64 opacity-20 pointer-events-none">
                   <img src={logoImg} alt="watermark" className="w-full h-full object-contain filter invert" />
                </div>
                <div className="relative z-10">
                  <span className="bg-black text-white px-3 py-1 font-bold uppercase text-xs tracking-widest mb-4 inline-block">ESTD 2024</span>
                  <h2 className="text-white font-black text-5xl sm:text-7xl uppercase leading-[0.85] tracking-tighter mb-6">
                    FLAVOR <br />DASHBOARD
                  </h2>
                  <p className="text-white/90 font-bold text-lg max-w-md mb-8">
                    Your central hub for the boldest, tangiest, and most authentic chaat experience in town.
                  </p>
                  <button 
                    onClick={startQuest}
                    className="bg-secondary text-black border-[4px] border-black px-8 py-4 font-black uppercase text-xl sm:text-2xl flex items-center gap-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group"
                  >
                    START REWARD QUEST <ArrowRight size={28} strokeWidth={4} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>

              {/* LIVE STATS (4 cols) */}
              <div className="md:col-span-4 grid grid-cols-1 gap-6">
                <div className="bg-white border-[4px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center gap-5">
                  <div className="w-16 h-16 bg-tertiary border-[3px] border-black flex items-center justify-center text-white">
                    <TrendingUp size={32} strokeWidth={3} />
                  </div>
                  <div>
                    <div className="font-black text-3xl uppercase tracking-tighter leading-none">10K+</div>
                    <div className="font-bold text-sm uppercase text-gray-500">Plates Served</div>
                  </div>
                </div>
                
                <div className="bg-white border-[4px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center gap-5">
                  <div className="w-16 h-16 bg-secondary border-[3px] border-black flex items-center justify-center text-black">
                    <Star size={32} strokeWidth={3} />
                  </div>
                  <div>
                    <div className="font-black text-3xl uppercase tracking-tighter leading-none">4.9/5</div>
                    <div className="font-bold text-sm uppercase text-gray-500">Customer Rating</div>
                  </div>
                </div>

                <div className="bg-black border-[4px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center gap-5 text-white">
                  <div className="w-16 h-16 bg-primary border-[3px] border-white flex items-center justify-center">
                    <Gift size={32} strokeWidth={3} />
                  </div>
                  <div>
                    <div className="font-black text-2xl uppercase tracking-tighter leading-none">ACTIVE</div>
                    <div className="font-bold text-sm uppercase text-gray-400">Reward Vouchers</div>
                  </div>
                </div>
              </div>

              {/* QUICK LINKS GRID */}
              <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Menu Card */}
                <button 
                  onClick={() => setIsMenuOpen(true)}
                  className="bg-white border-[4px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-left hover:bg-surface-hover transition-colors group flex flex-col justify-between h-48"
                >
                  <MenuIcon size={40} className="text-primary group-hover:rotate-12 transition-transform" strokeWidth={3} />
                  <div>
                    <div className="font-black text-2xl uppercase tracking-tight">Full Menu</div>
                    <div className="text-sm font-bold text-gray-500">Discover authentic flavors</div>
                  </div>
                </button>

                {/* Tracking/Stats Card */}
                <div className="bg-white border-[4px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between h-48 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
                  <Clock size={40} className="text-tertiary" strokeWidth={3} />
                  <div>
                    <div className="font-black text-2xl uppercase tracking-tight">Open Now</div>
                    <div className="text-sm font-bold text-gray-500">12:00 PM - 10:00 PM</div>
                  </div>
                </div>

                {/* Location Card */}
                <a 
                  href="https://www.google.com/maps/search/Only+Chaats" 
                  target="_blank" 
                  className="bg-secondary border-[4px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-left hover:-translate-y-1 hover:bg-surface-hover transition-all group flex flex-col justify-between h-48"
                >
                  <MapPin size={40} className="text-black group-hover:scale-125 transition-transform" strokeWidth={3} />
                  <div>
                    <div className="font-black text-2xl uppercase tracking-tight">Locate Us</div>
                    <div className="text-sm font-bold text-black/60">Find the nearest outlet</div>
                  </div>
                </a>

                {/* Social Card */}
                <a 
                  href="https://www.instagram.com/onlychaats/" 
                  target="_blank" 
                  className="bg-black text-white border-[4px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-left hover:-translate-y-1 transition-transform group flex flex-col justify-between h-48"
                >
                  <Instagram size={40} className="text-secondary group-hover:rotate-12 transition-transform" strokeWidth={3} />
                  <div>
                    <div className="font-black text-2xl uppercase tracking-tight">Instagram</div>
                    <div className="text-sm font-bold text-gray-400">Join the community</div>
                  </div>
                </a>
              </div>

            </div>

            {/* Footer Badge Row */}
            <div className="mt-12 pt-8 border-t-[4px] border-black flex flex-col sm:flex-row justify-between items-center gap-4 opacity-70">
              <div className="font-black uppercase tracking-widest text-sm">© 2025 ONLY CHAATS • BOLD FLAVORS ONLY</div>
              <div className="flex gap-4">
                 <div className="font-bold uppercase text-xs px-2 py-1 bg-white border-2 border-black">HYGIENIC</div>
                 <div className="font-bold uppercase text-xs px-2 py-1 bg-white border-2 border-black">AUTHENTIC</div>
                 <div className="font-bold uppercase text-xs px-2 py-1 bg-white border-2 border-black">CHATPATA</div>
              </div>
            </div>

          </div>
        </div>
      ) : (
        /* QUEST CONTENT (EXISTING) */
        <div className="min-h-screen bg-surface-bright transition-all duration-500 relative">
          <main className="max-w-[540px] mx-auto px-4 py-12 relative">
            <button 
              onClick={() => setView('home')}
              className="absolute top-4 left-4 z-50 w-10 h-10 bg-white border-[3px] border-black flex items-center justify-center hover:bg-secondary transition-colors neo-brutalist-button shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]"
              aria-label="Back to Home"
            >
              <Home size={20} strokeWidth={3} className="text-black" />
            </button>
            
            {/* Menu Button Top Right */}
            <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
              <div className="hidden min-[380px]:flex pointer-events-none animate-[bounce_2s_infinite]">
                <div className="bg-[#facd1c] text-black px-2 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-[-4deg] flex items-center gap-1">
                  <span className="font-black text-[11px] uppercase tracking-widest whitespace-nowrap">Menu Here</span>
                  <ArrowRight size={14} strokeWidth={4} className="text-black" />
                </div>
              </div>
              
              <button 
                onClick={() => setIsMenuOpen(true)} 
                className="w-10 h-10 bg-white border-[3px] border-black flex items-center justify-center hover:bg-[#a3e635] transition-colors neo-brutalist-button shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] relative z-20 cursor-pointer" 
                aria-label="Menu"
              >
                <MenuIcon className="text-black" size={20} strokeWidth={3} />
              </button>
            </div>

        {/* Hero & Logo Section */}
        <section className="text-center mb-10">
          <div className="flex justify-center mb-6 group cursor-pointer hover:-translate-y-1 hover:scale-105 transition-transform duration-300">
            <div className="w-32 h-32 rounded-full border-4 border-black overflow-hidden bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300 group-hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <img
                alt="ONLY CHAATS Logo"
                className="w-full h-full object-contain"
                src={logoImg}
              />
            </div>
          </div>
          <h1 className="font-black text-3xl text-white uppercase tracking-tighter leading-none mb-3 bg-primary border-4 border-black p-4 inline-block transform rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] selection:bg-black selection:text-white">
            WE HAVE GOT A
            <br />
            CHATPATA REWARD
            <br />
            FOR YOU!!!!!!
          </h1>
          <p className="font-medium text-sm text-black max-w-sm mx-auto leading-tight mt-6 bg-secondary border-2 border-black p-4 -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Just complete three simple task and get a free item <span className="block text-3xl font-black mt-2 uppercase">worth 149</span>
          </p>
        </section>

        {/* The Quest Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-black border-[3px] border-black flex items-center justify-center -rotate-3 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <ListChecks size={16} strokeWidth={3} />
            </div>
            <h2 className="font-black text-xl uppercase tracking-tight text-black drop-shadow-[1px_1px_0px_rgba(250,205,28,1)]">
              Tasks
            </h2>
          </div>

          {/* Progress Slider Menu Vertical */}
          <div className="flex flex-row gap-4 h-[300px]">
            <div className="relative w-8 flex-shrink-0 flex flex-col py-1">
              <div className="absolute top-0 left-1/2 w-1.5 h-full bg-surface-container border-x-2 border-black -translate-x-1/2"></div>
              <div 
                className="absolute top-0 left-1/2 w-1.5 bg-black border-x-2 border-black -translate-x-1/2 transition-all duration-300"
                style={{ height: `${(currentStep / 2) * 100}%` }}
              ></div>
              <div className="relative flex flex-col justify-between h-full">
                {[0, 1, 2].map((step) => (
                  <button
                    key={step}
                    onClick={() => setCurrentStep(step)}
                    className={`w-8 h-8 rounded-full border-[3px] border-black flex items-center justify-center transition-all duration-300 shrink-0 ${
                      completedSteps[step]
                        ? 'bg-tertiary text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                        : currentStep === step
                        ? 'bg-secondary text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] scale-110'
                        : 'bg-white text-black/50'
                    }`}
                  >
                    {completedSteps[step] ? (
                      <Check size={16} strokeWidth={4} />
                    ) : (
                      <span className="font-black text-xs">{step + 1}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="relative flex-1">
              {/* Task 1: Yellow */}
              <div className={`absolute top-0 left-0 w-full h-full transition-all duration-300 ${currentStep === 0 ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 -translate-x-4 pointer-events-none'}`}>
                <div className="neo-brutalist-card bg-gradient-to-br from-[#007b55] to-[#004d35] textured-card border-[3px] border-black p-5 flex flex-col items-center justify-center text-center overflow-hidden h-full">
                  <div className="w-16 h-16 bg-white border-[3px] border-black flex items-center justify-center mb-6 transform -rotate-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative z-10">
                    <Instagram className="text-black" size={28} strokeWidth={3} />
                  </div>
                  <h3 className="font-extrabold text-2xl mb-2 text-white uppercase leading-tight tracking-tight drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] relative z-10">
                    Join our Insta gang 📸
                  </h3>
                  <p className="mb-6 text-white/90 font-semibold drop-shadow-[1px_1px_0px_rgba(0,0,0,0.5)] relative z-10">@onlychaats</p>
                  <a onClick={() => handleQuestClick(0)} href="https://www.instagram.com/onlychaats/" target="_blank" rel="noopener noreferrer" className="mt-auto neo-brutalist-button w-full py-3 bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors duration-200 inline-block relative z-10">
                    {completedSteps[0] ? 'Followed ✓' : 'Follow Now'}
                  </a>
                </div>
              </div>

              {/* Task 2: Green */}
              <div className={`absolute top-0 left-0 w-full h-full transition-all duration-300 ${currentStep === 1 ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
                <div className="neo-brutalist-card bg-gradient-to-br from-[#007b55] to-[#004d35] textured-card border-[3px] border-black p-5 flex flex-col items-center justify-center text-center overflow-hidden h-full">
                  <div className="w-16 h-16 bg-white border-[3px] border-black flex items-center justify-center mb-6 transform rotate-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative z-10">
                    <Utensils className="text-black" size={28} strokeWidth={3} />
                  </div>
                  <h3 className="font-extrabold text-2xl mb-2 text-white uppercase leading-tight tracking-tight drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] relative z-10">
                    Food this good deserves a spotlight 😋
                  </h3>
                  <p className="mb-6 text-white/90 font-semibold drop-shadow-[1px_1px_0px_rgba(0,0,0,0.5)] relative z-10">Post a story and tag @onlychaats</p>
                  <a onClick={() => handleQuestClick(1)} href="https://www.instagram.com/onlychaats/" target="_blank" rel="noopener noreferrer" className="mt-auto neo-brutalist-button w-full py-3 bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors duration-200 inline-block relative z-10">
                    {completedSteps[1] ? 'Opened ✓' : 'Open Instagram'}
                  </a>
                </div>
              </div>

              {/* Task 3: Red */}
              <div className={`absolute top-0 left-0 w-full h-full transition-all duration-300 ${currentStep === 2 ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
                <div className="neo-brutalist-card bg-gradient-to-br from-[#007b55] to-[#004d35] textured-card border-[3px] border-black p-5 flex flex-col items-center justify-center text-center overflow-hidden h-full">
                  <div className="w-16 h-16 bg-white border-[3px] border-black flex items-center justify-center mb-6 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative z-10">
                    <Send className="text-black ml-2 mt-1" size={28} strokeWidth={3} />
                  </div>
                  <h3 className="font-extrabold text-2xl mb-2 text-white uppercase leading-tight tracking-tight drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] relative z-10">
                    Claim your reward
                  </h3>
                  <p className="mb-6 text-white/90 font-semibold drop-shadow-[1px_1px_0px_rgba(0,0,0,0.5)] relative z-10">Send screenshot of task one and two on WhatsApp</p>
                  <a onClick={() => handleQuestClick(2)} href="https://wa.me/917780956163?text=Hey!%20I've%20completed%20all%203%20steps%20for%20my%20Only%20Chaats%20reward%20%F0%9F%8C%9F" target="_blank" rel="noopener noreferrer" className="mt-auto neo-brutalist-button w-full py-3 bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors duration-200 inline-block relative z-10">
                    {completedSteps[2] ? 'Messaged ✓' : 'WhatsApp Us'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reward Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-secondary border-[3px] border-black flex items-center justify-center rotate-3">
              <Star className="text-black" size={16} strokeWidth={3} fill="currentColor" />
            </div>
            <h2 className="font-black text-xl uppercase tracking-tight text-black drop-shadow-[1px_1px_0px_rgba(173,17,16,1)]">COLLECT YOUR REWARD HERE</h2>
          </div>

          <div className="neo-brutalist-card bg-secondary p-1 relative overflow-hidden group cursor-pointer hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300">
            {/* Ticket UI */}
            <div className="bg-white border-[3px] border-black p-3 relative">
              {/* Punch holes */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-[3px] border-black bg-surface-bright"></div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-[3px] border-black bg-surface-bright"></div>

              <div className="border-[3px] border-dashed border-black/30 p-8 flex flex-col items-center justify-center min-h-[160px] relative">
                {showCoupon ? (
                  <div className="text-center">
                    <div className="bg-primary text-white text-xs font-black uppercase tracking-widest py-1 px-3 mb-3 inline-block -rotate-2 border-2 border-black">
                      VOUCHER UNLOCKED
                    </div>
                    <div className="text-4xl font-black tracking-tight font-mono bg-secondary px-4 py-2 border-[3px] border-black inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      {couponCode}
                    </div>
                    <p className="font-bold text-sm text-black mt-6 leading-tight">
                      Add this code in the Zomato/Swiggy instructions of your next order to get a free item worth ₹149!
                      <br />
                      <span className="text-[10px] opacity-75">(Minimum order ₹299 after discounts)</span>
                    </p>
                  </div>
                ) : countdown !== null && countdown > 0 ? (
                  <div className="text-center flex flex-col items-center">
                    <div className="bg-primary font-black text-white border-2 border-black px-3 py-1 text-xs uppercase tracking-widest mb-4 inline-block transform rotate-1">
                      VERIFYING SUBMISSION
                    </div>
                    <div className="text-4xl font-black tracking-tight font-mono text-black bg-secondary px-6 py-3 border-[3px] border-black inline-block transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      {countdown}s
                    </div>
                  </div>
                ) : (
                  <div className="text-center flex flex-col items-center">
                    <div className="bg-white font-black text-primary border-2 border-primary px-3 py-1 text-xs uppercase tracking-widest mb-4 inline-block transform rotate-1">
                      COUPON LOCKED
                    </div>
                    <div className="text-3xl font-black text-black/20 tracking-widest bg-black/5 px-6 py-3 border-[3px] border-black/10 inline-block transform -rotate-1">
                      ?????
                    </div>
                    <p className="font-bold text-sm text-black mt-6 leading-tight max-w-[200px]">
                      Complete all 3 steps in the quest above to reveal your secret code!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Meta Data Cards */}
          <div className="flex flex-col gap-3 mt-4">
            <div className="neo-brutalist-card bg-tertiary p-3 flex flex-col justify-center items-center hover:-translate-y-1 transition-transform border-[3px]">
              <p className="font-black text-xs uppercase text-white/90 mb-1 tracking-wider border-b-2 border-transparent w-max">Validity</p>
              <p className="font-black text-2xl text-white drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">30 DAYS</p>
            </div>
          </div>
          {/* Order Now Section */}
          <div className="mt-12 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-black border-[3px] border-black flex items-center justify-center -rotate-3 shadow-[2px_2px_0px_0px_rgba(252,128,25,1)]">
                <Utensils className="text-white" size={16} strokeWidth={3} />
              </div>
              <h2 className="font-black text-2xl uppercase tracking-tight text-black">Order Now</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a 
                href="https://www.swiggy.com/menu/1199252?source=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="neo-brutalist-card bg-[#FC8019] p-4 flex items-center justify-center text-center group transition-all"
              >
                <span className="font-black text-white text-lg uppercase tracking-tighter shadow-black drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Swiggy</span>
              </a>

              <a 
                href="https://zomato.onelink.me/xqzv/v0d2ucg7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="neo-brutalist-card bg-[#E23744] p-4 flex items-center justify-center text-center group transition-all"
              >
                <span className="font-black text-white text-lg uppercase tracking-tighter shadow-black drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Zomato</span>
              </a>

              <a 
                href="https://wa.me/917780956163?text=Hey!%20I'm%20interested%20in%20bulk%20party%20orders%20for%20Only%20Chaats%20%F0%9F%8E%89" 
                target="_blank" 
                rel="noopener noreferrer"
                className="neo-brutalist-card bg-[#25D366] p-4 flex flex-col items-center justify-center text-center group transition-all"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle size={18} className="text-white fill-current" />
                  <span className="font-black text-white text-lg uppercase tracking-tighter shadow-black drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">WhatsApp</span>
                </div>
                <span className="text-[9px] font-bold text-white uppercase mt-1 leading-tight">only for bulk party orders</span>
              </a>
            </div>
            

          </div>
        </section>
          </main>

          {/* Footer */}
          <footer className="w-full py-10 px-4 flex flex-col justify-center items-center gap-4 bg-black text-white mt-12 border-t-[6px] border-primary">
            <div className="mt-2">
              <a 
                href="https://reguluslabs.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-black uppercase text-[10px] tracking-[0.2em] bg-white text-black px-3 py-1 border-2 border-black shadow-[3px_3px_0px_0px_rgba(173,17,16,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                made by Reguluslabs.in
              </a>
            </div>
            <div className="font-bold uppercase text-[10px] opacity-50 mt-4">
              © 2025 ONLY CHAATS.
            </div>
          </footer>
        </div>
      )}

  {/* Menu Full-Screen Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm overflow-y-auto font-epilogue selection:bg-secondary selection:text-black">
          <div className="min-h-screen bg-[#618a5e] max-w-[540px] mx-auto relative shadow-[0_0_40px_rgba(0,0,0,0.5)] border-x-4 border-black pb-20">
            {/* Overlay Header */}
            <div className="sticky top-0 z-20 bg-[#618a5e] border-b-4 border-black px-6 py-4 flex items-center justify-between shadow-[0_4px_0_0_#000]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-[3px] border-black overflow-hidden bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <img
                    alt="ONLY CHAATS Logo"
                    className="w-full h-full object-contain"
                    src={logoImg}
                  />
                </div>
                <h1 className="font-black italic text-2xl tracking-tighter text-white drop-shadow-[2px_2px_0_#ad1110] transition-transform hover:scale-105">
                  ONLY CHAATS
                </h1>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-10 h-10 bg-primary border-[3px] border-black flex items-center justify-center hover:bg-white hover:text-black text-white transition-colors neo-brutalist-button shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:translate-x-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] rounded-full"
              >
                <X size={24} strokeWidth={3} />
              </button>
            </div>

            {/* Menu Items */}
            <div className="p-4 space-y-6 mt-6">
              {menuItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`neo-brutalist-card bg-[#fffdf0] border-[4px] border-black relative transition-transform hover:-translate-y-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group flex flex-col overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-black/5 rounded-bl-full pointer-events-none z-10" />
                  
                  {item.image && (
                    <div className="w-full aspect-[4/3] sm:aspect-video border-b-[4px] border-black bg-black overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" 
                      />
                    </div>
                  )}

                  <div className="p-5 flex gap-4 items-start relative z-10">
                    <div className={`mt-1 font-black text-2xl w-8 h-8 flex items-center justify-center border-b-4 border-black text-black drop-shadow-[1px_1px_0_rgba(0,0,0,0.2)] shrink-0`}>
                      {idx + 1}.
                    </div>
                    <div>
                      <h3 className={`font-black text-2xl mb-2 uppercase leading-tight text-black drop-shadow-[1px_1px_0px_rgba(0,0,0,0.1)]`}>
                        {item.title}
                      </h3>
                      <p className={`font-bold text-sm leading-relaxed text-black/80`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Order Buttons in Menu */}
            <div className="px-4 mt-8">
              <div className="bg-black/20 p-4 border-l-4 border-black mb-4">
                <p className="font-black text-[10px] uppercase tracking-[0.2em] mb-3 text-white">Order Online</p>
                <div className="grid grid-cols-1 gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    <a 
                      href="https://www.swiggy.com/menu/1199252?source=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center bg-[#FC8019] text-white p-4 border-[3px] border-black font-black text-xs uppercase tracking-widest hover:translate-x-1 hover:-translate-y-1 transition-transform shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-0 active:translate-y-0"
                    >
                      <span className="text-sm">Swiggy</span>
                    </a>
                    <a 
                      href="https://zomato.onelink.me/xqzv/v0d2ucg7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center bg-[#E23744] text-white p-4 border-[3px] border-black font-black text-xs uppercase tracking-widest hover:translate-x-1 hover:-translate-y-1 transition-transform shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-0 active:translate-y-0"
                    >
                      <span className="text-sm">Zomato</span>
                    </a>
                  </div>
                  <a 
                    href="https://wa.me/917780956163?text=Hey!%20I'm%20interested%20in%20bulk%20party%20orders%20for%20Only%20Chaats%20%F0%9F%8E%89" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center bg-[#25D366] text-white p-3 border-[3px] border-black font-black text-xs uppercase tracking-widest hover:translate-x-1 hover:-translate-y-1 transition-transform shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-0 active:translate-y-0"
                  >
                    <div className="flex items-center gap-2">
                      <MessageCircle size={16} className="text-white fill-current" />
                      <span className="text-sm">WhatsApp</span>
                    </div>
                    <span className="text-[8px] mt-1 opacity-90">(only for bulk party orders)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Footer decoration */}
            <div className="mt-8 mx-4 text-center pb-8 opacity-80">
              <p className="font-black text-xl text-white tracking-widest uppercase drop-shadow-[2px_2px_0_#000]">
                Let's chaat about it
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
