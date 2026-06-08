import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu as MenuIcon, 
  ArrowRight, 
  MessageCircle, 
  Utensils, 
  Clock, 
  Instagram,
  X
} from 'lucide-react';
import { logoImg } from '../constants';

import Footer from '../components/Footer';

export default function Home() {
  const [showHours, setShowHours] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const schedule = [
    { day: "Monday", hours: "11:00 AM - 11:00 PM" },
    { day: "Tuesday", hours: "11:00 AM - 11:00 PM" },
    { day: "Wednesday", hours: "Closed", closed: true },
    { day: "Thursday", hours: "11:00 AM - 11:00 PM" },
    { day: "Friday", hours: "11:00 AM - 11:00 PM" },
    { day: "Saturday", hours: "11:00 AM - 11:00 PM" },
    { day: "Sunday", hours: "11:00 AM - 11:00 PM" },
  ];

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 is Sunday, 1 is Monday...
      const hour = now.getHours();
      
      // Wednesday is index 3
      if (day === 3) {
        setIsOpen(false);
      } else {
        setIsOpen(hour >= 11 && hour < 23);
      }
    };

    checkStatus();
    const timer = setInterval(checkStatus, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-surface-bright p-4 sm:p-6 md:p-8 transition-all duration-500">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Top Navigation Row */}
        <div className="flex justify-between items-center mb-6 sm:mb-8 gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white border-[3px] border-black rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center overflow-hidden">
              <img src={logoImg} alt="logo" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="flex gap-2 sm:gap-3">
            <Link 
              to="/menu"
              className="bg-white border-[3px] border-black px-4 sm:px-6 py-1.5 sm:py-2 font-black uppercase text-xs sm:text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2"
            >
              <MenuIcon size={16} /> <span className="hidden xs:inline">MENU</span>
            </Link>
          </div>
        </div>

        {/* BENTO DASHBOARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          
          {/* FOUNDER STORY SECTION */}
          <div className="md:col-span-8 border-[4px] border-black relative shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-[#FAF9F6] flex min-h-[350px] sm:min-h-[400px]">
             
            {/* Grid Pattern Background */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.1] z-0" 
              style={{
                backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            ></div>

            {/* Circular Pink Stamp */}
            <div className="absolute top-2 left-6 sm:top-4 sm:left-12 md:left-20 z-10 w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] rounded-full bg-[#d2a3a3] overflow-hidden mix-blend-multiply drop-shadow-sm">
               <div className="w-full h-full opacity-40" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>
            </div>

            {/* Logo top right */}
            <div className="absolute top-2 right-2 md:top-4 md:right-6 z-30 w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28">
              <img src={logoImg} alt="Only Chaats Logo" className="w-full h-full object-contain filter drop-shadow-md bg-white border border-transparent rounded-full" />
            </div>

            {/* Left Note Content */}
            <div className="relative z-20 w-[60%] sm:w-[55%] md:w-[60%] p-3 sm:p-6 md:p-8 flex items-center justify-start pb-6">
               <div className="bg-[#FFFDF9] p-3 sm:p-6 md:p-8 shadow-[6px_6px_15px_rgba(0,0,0,0.06)] w-full">
                  <div className="space-y-1.5 sm:space-y-3 text-[9px] xs:text-[10px] sm:text-[14px] md:text-[16px] font-medium leading-[1.3] text-[#222] italic" style={{ fontFamily: 'Georgia, serif' }}>
                    <p>Hi, I'm Aman - chef, food nerd, and a Jammu boy on a mission.</p>
                    <p className="hidden xs:block">Since childhood, I have been obsessed with chaats—especially golgappas, bhelpuri, and the countless flavors found across India. That passion led me to study hospitality, work in professional kitchens, and set up chaat counters in hotels.</p>
                    <p className="hidden md:block">Along the way, I discovered something simple: great chaat doesn't need reinvention—it needs authenticity.</p>
                    <p>Only Chaats is my attempt to bring those traditional flavors, memories, and stories to every plate. Each dish on our menu comes from a real city. A real street. A real culinary tradition.</p>
                    <p>You just ate a piece of that story. Thank you for being part of it.</p>
                    <p className="pt-1 sm:pt-2 font-sans not-italic font-black text-[10px] xs:text-xs sm:text-base md:text-xl text-black uppercase tracking-tight">- Only Chaats</p>
                  </div>
               </div>
            </div>

            {/* Founder Cutout */}
            <div className="absolute bottom-0 right-[-10px] sm:right-0 w-[180px] xs:w-[210px] sm:w-[260px] md:w-[320px] lg:w-[350px] z-10 pointer-events-none drop-shadow-2xl">
               <img 
                 src="/aman_founder_nobg.png" 
                 alt="Founder Aman" 
                 className="w-full h-auto object-bottom object-contain pointer-events-auto filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.3)] origin-bottom hover:scale-105 transition-transform duration-500" 
               />
            </div>

          </div>

          {/* LIVE STATS (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-4 sm:gap-6">
            <a 
              href="https://wa.me/917780956163?text=Hey!%20I'm%20interested%20in%20bulk%20party%20orders%20for%20Only%20Chaats" 
              target="_blank"
              rel="noreferrer"
              className="bg-white border-[4px] border-black p-4 sm:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center gap-4 sm:gap-5 hover:-translate-y-1 transition-all group"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#25D366] border-[3px] border-black flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <MessageCircle size={24} sm:size={32} strokeWidth={3} fill="currentColor" />
              </div>
              <div className="min-w-0">
                <div className="font-black text-xl sm:text-3xl uppercase tracking-tighter leading-none truncate">WHATSAPP</div>
                <div className="font-bold text-[10px] sm:text-sm uppercase text-gray-500 truncate">ONLY BULK</div>
                <p className="text-[9px] font-black uppercase text-red-600 italic mt-1">only for bulk/ party orders</p>
              </div>
            </a>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2 sm:gap-3">
              <a 
                href="https://zomato.onelink.me/xqzv/v0d2ucg7" 
                target="_blank"
                rel="noreferrer"
                className="bg-white border-[4px] border-black p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center gap-4 sm:gap-5 hover:-translate-y-1 transition-all group"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#E23744] border-[3px] border-black flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Utensils size={24} sm:size={32} strokeWidth={3} />
                </div>
                <div className="min-w-0">
                  <div className="font-black text-xl sm:text-3xl uppercase tracking-tighter leading-none truncate">ORDER</div>
                  <div className="font-bold text-[10px] sm:text-sm uppercase text-gray-500 truncate">Zomato</div>
                </div>
              </a>

              <a 
                href="https://www.swiggy.com/menu/1199252?source=sharing" 
                target="_blank"
                rel="noreferrer"
                className="bg-black border-[4px] border-black p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center gap-4 sm:gap-5 text-white hover:-translate-y-1 transition-all group"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FC8019] border-[3px] border-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Utensils size={24} sm:size={32} strokeWidth={3} />
                </div>
                <div className="min-w-0">
                  <div className="font-black text-xl sm:text-3xl uppercase tracking-tighter leading-none truncate">ORDER</div>
                  <div className="font-bold text-[10px] sm:text-sm uppercase text-gray-400 truncate">Swiggy</div>
                </div>
              </a>
            </div>

            {/* TASKS WIDGET */}
            <Link 
              to="/tasks"
              className="bg-primary border-[4px] border-black p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#e52e2e] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="bg-white border-[3px] border-black px-4 py-1 text-xs font-black uppercase tracking-widest inline-block shadow-[2px_2px_0_0_#000] rotate-[-2deg] group-hover:rotate-0 transition-all">
                  Chatpata Reward
                </div>
                <h3 className="font-black text-white text-2xl sm:text-3xl uppercase tracking-tighter leading-tight mt-2">
                  Complete Tasks
                </h3>
                <p className="font-bold text-white/90 text-[10px] sm:text-xs">
                  Get a free item worth ₹149!
                </p>
                <div className="mt-2 bg-black text-white px-4 py-2 text-xs sm:text-sm font-black border-[2px] border-white uppercase flex items-center gap-2 group-hover:bg-white group-hover:text-black group-hover:border-black transition-colors w-fit mx-auto">
                  Start Now <ArrowRight size={16} strokeWidth={3} />
                </div>
              </div>
            </Link>

          </div>

          {/* QUICK LINKS GRID */}
          <div className="md:col-span-12 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Menu Card */}
            <Link 
              to="/menu"
              className="bg-white border-[4px] border-black p-4 sm:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-left hover:bg-surface-hover transition-colors group flex flex-col justify-between h-36 sm:h-48"
            >
              <MenuIcon size={32} sm:size={40} className="text-primary group-hover:rotate-12 transition-transform" strokeWidth={3} />
              <div>
                <div className="font-black text-lg sm:text-2xl uppercase tracking-tight truncate">Menu</div>
                <div className="text-[10px] sm:text-sm font-bold text-gray-500 truncate">All Flavors</div>
              </div>
            </Link>

            {/* Tracking/Stats Card */}
            <button 
              onClick={() => setShowHours(true)}
              className="bg-white border-[4px] border-black p-4 sm:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between h-36 sm:h-48 text-left hover:bg-surface-hover transition-colors group relative"
            >
              <div className="flex justify-between items-start">
                <Clock size={32} sm:size={40} className="text-tertiary group-hover:scale-110 transition-transform" strokeWidth={3} />
                <div className={`px-2 py-0.5 sm:px-3 sm:py-1 font-black text-[8px] sm:text-xs uppercase border-2 border-black ${isOpen ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                  {isOpen ? 'Open' : 'Closed'}
                </div>
              </div>
              <div>
                <div className="font-black text-lg sm:text-2xl uppercase tracking-tight truncate">Hours</div>
                <div className="text-[10px] sm:text-sm font-bold text-gray-500 truncate">View Timing</div>
              </div>
            </button>

            {/* Social Card */}
            <a 
              href="https://www.instagram.com/onlychaats/" 
              target="_blank" 
              rel="noreferrer"
              className="bg-black text-white border-[4px] border-black p-4 sm:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-left hover:-translate-y-1 transition-transform group flex flex-col justify-between h-36 sm:h-48 col-span-2 sm:col-span-1"
            >
              <Instagram size={32} sm:size={40} className="text-secondary group-hover:rotate-12 transition-transform" strokeWidth={3} />
              <div>
                <div className="font-black text-lg sm:text-2xl uppercase tracking-tight truncate">Instagram</div>
                <div className="text-[10px] sm:text-sm font-bold text-gray-400 truncate">Join us @onlychaats</div>
              </div>
            </a>
          </div>

        </div>

        {/* TIMING MODAL */}
        {showHours && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
             <div className="bg-white border-[4px] border-black w-full max-w-lg p-8 sm:p-12 shadow-[12px_12px_0px_0px_rgba(250,205,28,1)] relative">
                <button 
                  onClick={() => setShowHours(false)}
                  className="absolute top-4 right-4 w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <X />
                </button>
                
                <h3 className="font-black text-4xl uppercase tracking-tighter mb-8 italic">OUR HOURS</h3>
                <div className="space-y-4">
                  {schedule.map((row, i) => (
                    <div key={i} className={`flex justify-between items-center py-3 border-b-2 border-black/10 last:border-0 ${row.closed ? 'opacity-50' : ''}`}>
                      <span className="font-black text-lg uppercase tracking-tight">{row.day}</span>
                      <span className={`font-bold ${row.closed ? 'text-red-500 italic' : 'text-gray-700'}`}>
                        {row.hours}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 bg-black text-white p-6 border-[3px] border-black">
                   <div className="font-black uppercase tracking-widest text-xs mb-2 text-secondary">Pro Tip</div>
                   <p className="text-sm font-bold italic leading-none">We strictly prepare fresh batches daily. Once we're out, we're out!</p>
                </div>
             </div>
          </div>
        )}

        {/* Footer */}
        <Footer theme="light" />

      </div>
    </div>
  );
}
