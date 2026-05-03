
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Menu as MenuIcon, 
  ArrowRight, 
  ListChecks, 
  Check, 
  Instagram, 
  Utensils, 
  Send, 
  Star, 
  MessageCircle 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { logoImg } from '../constants';

export default function Quest() {
  const [couponCode, setCouponCode] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([false, false, false]);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [showCoupon, setShowCoupon] = useState(false);

  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = 'CHAAT-';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCouponCode(result);
  }, []);

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
    if (completedSteps.every(Boolean)) {
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function () {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);

        const particleCount = 50 * (timeLeft / duration);
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          colors: ['#ad1110', '#facd1c', '#009669'],
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          colors: ['#ad1110', '#facd1c', '#009669'],
        });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [completedSteps]);

  return (
    <div className="min-h-screen bg-surface-bright pb-20">
      {/* Dynamic Header */}
      <div className="max-w-[1200px] mx-auto p-4 flex justify-between items-center sm:mb-8">
        <Link 
          to="/"
          className="w-12 h-12 bg-white border-[3px] border-black flex items-center justify-center hover:bg-secondary transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 active:shadow-none"
        >
          <Home size={24} strokeWidth={3} className="text-black" />
        </Link>
        <Link 
          to="/menu"
          className="bg-white border-[3px] border-black px-6 py-2 font-black uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2"
        >
          <MenuIcon size={18} /> MENU
        </Link>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: HERO & TASKS */}
        <div className="lg:col-span-8">
          <section className="text-left mb-12 lg:mb-16">
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 mb-8">
              <div className="w-40 h-40 rounded-full border-4 border-black overflow-hidden bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <img src={logoImg} alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <h1 className="font-black text-4xl sm:text-6xl text-white uppercase tracking-tighter leading-[0.9] bg-primary border-4 border-black p-6 transform -rotate-1 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] mb-4">
                  CHATPATA <br />REWARD QUEST
                </h1>
                <p className="font-bold text-lg bg-secondary border-3 border-black p-4 rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-block">
                  Complete 3 tasks to get a free item <span className="text-red-600">worth ₹149</span>
                </p>
              </div>
            </div>
          </section>

          {/* TASKS GRID for PC / Slider for Mobile */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-black border-[3px] border-black flex items-center justify-center -rotate-3 text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <ListChecks size={24} strokeWidth={3} />
              </div>
              <h2 className="font-black text-3xl uppercase tracking-tighter">Your Journey</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Task 1 */}
              <div className={`p-6 border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all ${completedSteps[0] ? 'bg-tertiary/10 border-tertiary shadow-none translate-x-1 translate-y-1' : 'bg-white'}`}>
                <div className={`w-12 h-12 flex items-center justify-center border-3 border-black mb-6 transform -rotate-3 ${completedSteps[0] ? 'bg-tertiary text-white' : 'bg-secondary'}`}>
                  {completedSteps[0] ? <Check strokeWidth={4} /> : <Instagram strokeWidth={3} />}
                </div>
                <h3 className="font-black text-xl uppercase mb-2">Step 1: Follow</h3>
                <p className="font-bold text-gray-500 text-sm mb-6">Join our Insta gang @onlychaats for daily doses of heat.</p>
                <a 
                  onClick={() => handleQuestClick(0)} 
                  href="https://www.instagram.com/onlychaats/" 
                  target="_blank" 
                  rel="noreferrer"
                  className={`block w-full py-3 text-center font-black uppercase text-sm border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${completedSteps[0] ? 'bg-gray-100 text-gray-400 shadow-none' : 'bg-white hover:bg-black hover:text-white'}`}
                >
                  {completedSteps[0] ? 'Done ✓' : 'Follow Now'}
                </a>
              </div>

              {/* Task 2 */}
              <div className={`p-6 border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all ${completedSteps[1] ? 'bg-tertiary/10 border-tertiary shadow-none translate-x-1 translate-y-1' : 'bg-white'}`}>
                <div className={`w-12 h-12 flex items-center justify-center border-3 border-black mb-6 transform rotate-3 ${completedSteps[1] ? 'bg-tertiary text-white' : 'bg-secondary'}`}>
                  {completedSteps[1] ? <Check strokeWidth={4} /> : <Star strokeWidth={3} />}
                </div>
                <h3 className="font-black text-xl uppercase mb-2">Step 2: Spotlight</h3>
                <p className="font-bold text-gray-500 text-sm mb-6">Post a story of your food and tag @onlychaats.</p>
                <a 
                  onClick={() => handleQuestClick(1)} 
                  href="https://www.instagram.com/onlychaats/" 
                  target="_blank" 
                  rel="noreferrer"
                  className={`block w-full py-3 text-center font-black uppercase text-sm border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${completedSteps[1] ? 'bg-gray-100 text-gray-400 shadow-none' : 'bg-white hover:bg-black hover:text-white'}`}
                >
                  {completedSteps[1] ? 'Done ✓' : 'Open Instagram'}
                </a>
              </div>

              {/* Task 3 */}
              <div className={`p-6 border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all ${completedSteps[2] ? 'bg-tertiary/10 border-tertiary shadow-none translate-x-1 translate-y-1' : 'bg-white'}`}>
                <div className={`w-12 h-12 flex items-center justify-center border-3 border-black mb-6 transform -rotate-2 ${completedSteps[2] ? 'bg-tertiary text-white' : 'bg-secondary'}`}>
                  {completedSteps[2] ? <Check strokeWidth={4} /> : <Send strokeWidth={3} className="ml-1" />}
                </div>
                <h3 className="font-black text-xl uppercase mb-2">Step 3: Verification</h3>
                <p className="font-bold text-gray-500 text-sm mb-6">WhatsApp us the screenshots of step 1 and 2.</p>
                <a 
                  onClick={() => handleQuestClick(2)} 
                  href="https://wa.me/917780956163?text=Hey!%20I've%20completed%20all%203%20steps%20for%20my%20Only%20Chaats%20reward%20%F0%9F%8C%9F" 
                  target="_blank" 
                  rel="noreferrer"
                  className={`block w-full py-3 text-center font-black uppercase text-sm border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${completedSteps[2] ? 'bg-gray-100 text-gray-400 shadow-none' : 'bg-white hover:bg-black hover:text-white'}`}
                >
                  {completedSteps[2] ? 'Done ✓' : 'WhatsApp Us'}
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: REWARD & ORDERING */}
        <div className="lg:col-span-4 lg:sticky lg:top-8">
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-secondary border-[3px] border-black flex items-center justify-center rotate-3">
                <Star className="text-black" size={16} strokeWidth={3} fill="currentColor" />
              </div>
              <h2 className="font-black text-xl uppercase tracking-tight">Reward Hub</h2>
            </div>

            <div className="bg-secondary p-1 border-[4px] border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
              <div className="bg-white border-[3px] border-black p-8 text-center relative overflow-hidden">
                 {/* Punch holes styling */}
                 <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-3 border-black bg-surface-bright"></div>
                 <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-3 border-black bg-surface-bright"></div>

                 {showCoupon ? (
                    <div className="animate-in fade-in zoom-in duration-500">
                      <div className="bg-primary text-white text-xs font-black uppercase tracking-widest py-1 px-3 mb-4 inline-block -rotate-2 border-2 border-black">VOUCHER UNLOCKED</div>
                      <div className="text-4xl font-black font-mono bg-secondary px-6 py-4 border-[4px] border-black inline-block shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-6">
                        {couponCode}
                      </div>
                      <p className="font-bold text-sm leading-tight text-gray-600">
                        Add this code in Zomato/Swiggy instructions of your next order!
                      </p>
                    </div>
                 ) : countdown !== null ? (
                    <div className="py-8">
                      <div className="text-6xl font-black font-mono animate-pulse">{countdown}s</div>
                      <p className="font-black uppercase text-xs tracking-widest mt-4">Verifying...</p>
                    </div>
                 ) : (
                    <div className="py-8 opacity-40">
                      <div className="text-4xl font-black font-mono tracking-widest">?????</div>
                      <p className="font-bold text-xs mt-4">Complete all steps to unlock</p>
                    </div>
                 )}
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="font-black text-xl uppercase tracking-tight">Direct Ordering</h2>
            </div>
            <div className="space-y-4">
              <a href="https://www.swiggy.com/menu/1199252?source=sharing" target="_blank" rel="noreferrer" className="flex items-center justify-between bg-[#FC8019] text-white p-4 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase hover:shadow-none translate-y-0 hover:translate-y-1 hover:translate-x-1 transition-all">
                SWIGGY <ArrowRight />
              </a>
              <a href="https://zomato.onelink.me/xqzv/v0d2ucg7" target="_blank" rel="noreferrer" className="flex items-center justify-between bg-[#E23744] text-white p-4 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase hover:shadow-none translate-y-0 hover:translate-y-1 hover:translate-x-1 transition-all">
                ZOMATO <ArrowRight />
              </a>
              <a href="https://wa.me/917780956163" target="_blank" rel="noreferrer" className="flex flex-col bg-[#25D366] text-white p-4 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase hover:shadow-none translate-y-0 hover:translate-y-1 hover:translate-x-1 transition-all">
                <div className="flex justify-between items-center w-full">
                  WHATSAPP <MessageCircle fill="currentColor" />
                </div>
                <span className="text-[10px] lowercase normal-case opacity-90 mt-1">only for bulk party orders</span>
              </a>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
