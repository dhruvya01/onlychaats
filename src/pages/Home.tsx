
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
          
          {/* HERO SECTION (6 cols) */}
          <div className="md:col-span-8 bg-primary border-[4px] border-black p-6 sm:p-12 relative overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] min-h-[350px] sm:min-h-[400px] flex flex-col justify-end">
            <div className="relative z-10">
              <h2 className="text-white font-black text-3xl sm:text-6xl uppercase leading-[1] tracking-tighter mb-4 sm:mb-6">
                WE HAVE GOT A <br className="hidden sm:block" />CHATPATA REWARD <br className="hidden sm:block" />FOR YOU!!!!!!
                <span className="sm:hidden ml-1">REWARD FOR YOU!!!!!!</span>
              </h2>
              <p className="text-white/90 font-bold text-base sm:text-lg max-w-md mb-6 sm:mb-8 leading-tight sm:leading-normal">
                Just complete three simple task and get a free item worth ₹149
              </p>
              <Link 
                to="/tasks"
                className="bg-secondary text-black border-[4px] border-black px-6 py-3 sm:px-8 sm:py-4 font-black uppercase text-lg sm:text-2xl flex items-center gap-3 sm:gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group w-full sm:w-fit justify-center sm:justify-start"
              >
                START TASKS <ArrowRight size={24} sm:size={28} strokeWidth={4} className="group-hover:translate-x-2 transition-transform" />
              </Link>
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

        {/* Footer Badge Row */}
        <div className="mt-12 pt-6 border-t-[4px] border-black opacity-80 pb-6">
          <div className="flex flex-col items-center gap-6">
            <p className="font-black text-lg sm:text-2xl uppercase tracking-tighter italic text-center">Let's chaat about it</p>
            
            <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
              <a 
                href="https://reguluslabs.in" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-black text-white px-3 py-1 font-black uppercase text-[8px] sm:text-[9px] tracking-widest border border-black hover:bg-secondary hover:text-black transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 inline-block"
              >
                made by reguluslabs.in
              </a>
              <div className="font-black uppercase tracking-widest text-[8px] sm:text-[10px] text-center sm:text-right opacity-60">© 2025 ONLY CHAATS</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

