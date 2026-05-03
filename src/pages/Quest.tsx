
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
  MessageCircle,
  X,
  Copy
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { logoImg } from '../constants';

export default function Tasks() {
  const [couponCode, setCouponCode] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([false, false, false]);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [showCoupon, setShowCoupon] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = 'CHAAT-';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCouponCode(result);
  }, []);

  const handleTaskClick = (index: number) => {
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
        setCountdown(3); 
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
      triggerConfetti();
    }
  }, [countdown]);

  const triggerConfetti = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 200 };

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
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-surface-bright pb-20 overflow-x-hidden">
      {/* Dynamic Header */}
      <div className="max-w-[1200px] mx-auto p-4 flex justify-between items-center sm:mb-8">
        <Link 
          to="/"
          className="w-10 h-10 sm:w-12 sm:h-12 bg-white border-[3px] border-black flex items-center justify-center hover:bg-secondary transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 active:shadow-none"
        >
          <Home size={20} sm:size={24} strokeWidth={3} className="text-black" />
        </Link>
        <Link 
          to="/menu"
          className="bg-white border-[3px] border-black px-4 sm:px-6 py-1.5 sm:py-2 font-black uppercase text-xs sm:text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2"
        >
          <MenuIcon size={16} /> MENU
        </Link>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: HERO & TASKS */}
        <div className="lg:col-span-8">
          <section className="text-left mb-8 lg:mb-16">
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-6 mb-6">
              <div className="w-24 h-24 sm:w-40 sm:h-40 rounded-full border-4 border-black overflow-hidden bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <img src={logoImg} alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div className="text-center sm:text-left flex-1 min-w-0">
                <h1 className="font-black text-2xl sm:text-4xl lg:text-6xl text-white uppercase tracking-tighter leading-[1] bg-primary border-[3px] sm:border-4 border-black p-4 sm:p-6 transform -rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] mb-3 inline-block">
                  WE HAVE GOT A <br className="hidden sm:block" />CHATPATA REWARD <br className="hidden sm:block" />FOR YOU!!!!!!
                  <span className="sm:hidden ml-1">REWARD FOR YOU!!!!!!</span>
                </h1>
                <div>
                  <p className="font-bold text-sm sm:text-lg bg-secondary border-[3px] border-black p-3 sm:p-4 rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block">
                    Just complete three simple task and get a free item worth ₹149
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* TASKS SLIDER / STEP-BY-STEP */}
          <section className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black border-[3px] border-black flex items-center justify-center -rotate-3 text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <ListChecks size={20} sm:size={24} strokeWidth={3} />
                </div>
                <h2 className="font-black text-xl sm:text-3xl uppercase tracking-tighter">Tasks</h2>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                {[0, 1, 2].map((idx) => (
                  <div 
                    key={idx} 
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 border-2 border-black rounded-full transition-colors ${currentStep === idx ? 'bg-secondary' : 'bg-white'}`}
                  />
                ))}
              </div>
            </div>

            <div className="relative min-h-[250px] sm:min-h-[300px]">
              <AnimatePresence mode="wait">
                {/* Task 1 */}
                {currentStep === 0 && (
                  <motion.div 
                    key="step0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-6 sm:p-8 border-[4px] border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center border-4 border-black mb-4 sm:mb-6 transform -rotate-3 ${completedSteps[0] ? 'bg-tertiary text-white' : 'bg-secondary'}`}>
                      {completedSteps[0] ? <Check size={28} sm:size={32} strokeWidth={4} /> : <Instagram size={28} sm:size={32} strokeWidth={3} />}
                    </div>
                    <h3 className="font-black text-2xl sm:text-3xl uppercase mb-2">Step 1: Follow</h3>
                    <p className="font-bold text-gray-500 text-base sm:text-lg mb-6 sm:mb-8 italic">join our insta @onlychaats</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        onClick={() => handleTaskClick(0)} 
                        href="https://www.instagram.com/onlychaats/" 
                        target="_blank" 
                        rel="noreferrer"
                        className={`flex-1 py-3 sm:py-4 text-center font-black uppercase text-base sm:text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${completedSteps[0] ? 'bg-gray-100 text-gray-400 shadow-none translate-x-1 translate-y-1' : 'bg-white hover:bg-black hover:text-white active:shadow-none'}`}
                      >
                        {completedSteps[0] ? 'Following ✓' : 'Follow @onlychaats'}
                      </a>
                    </div>
                  </motion.div>
                )}

                {/* Task 2 */}
                {currentStep === 1 && (
                  <motion.div 
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-6 sm:p-8 border-[4px] border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center border-4 border-black mb-4 sm:mb-6 transform rotate-3 ${completedSteps[1] ? 'bg-tertiary text-white' : 'bg-secondary'}`}>
                      {completedSteps[1] ? <Check size={28} sm:size={32} strokeWidth={4} /> : <Star size={28} sm:size={32} strokeWidth={3} />}
                    </div>
                    <h3 className="font-black text-2xl sm:text-3xl uppercase mb-2">Step 2: Spotlight</h3>
                    <p className="font-bold text-gray-500 text-base sm:text-lg mb-6 sm:mb-8 italic leading-tight">Food this good deserves a spotlight 😋<br/>Post a story and tag @onlychaats</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        onClick={() => handleTaskClick(1)} 
                        href="https://www.instagram.com/onlychaats/" 
                        target="_blank" 
                        rel="noreferrer"
                        className={`flex-1 py-3 sm:py-4 text-center font-black uppercase text-base sm:text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${completedSteps[1] ? 'bg-gray-100 text-gray-400 shadow-none translate-x-1 translate-y-1' : 'bg-white hover:bg-black hover:text-white active:shadow-none'}`}
                      >
                        {completedSteps[1] ? 'Tagged ✓' : 'Share Story'}
                      </a>
                      <button 
                        onClick={() => setCurrentStep(0)}
                        className="px-6 py-3 sm:py-4 border-4 border-black font-black uppercase text-sm hover:bg-gray-100 transition-colors"
                      >
                        Back
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Task 3 */}
                {currentStep === 2 && (
                  <motion.div 
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-6 sm:p-8 border-[4px] border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center border-4 border-black mb-4 sm:mb-6 transform -rotate-2 ${completedSteps[2] ? 'bg-tertiary text-white' : 'bg-secondary'}`}>
                      {completedSteps[2] ? <Check size={28} sm:size={32} strokeWidth={4} /> : <Send size={28} sm:size={32} strokeWidth={3} className="ml-1" />}
                    </div>
                    <h3 className="font-black text-2xl sm:text-3xl uppercase mb-2">Step 3: Verification</h3>
                    <p className="font-bold text-gray-500 text-base sm:text-lg mb-6 sm:mb-8 italic text-red-500">WhatsApp us the screenshots of step 1 and 2.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        onClick={() => handleTaskClick(2)} 
                        href="https://wa.me/917780956163?text=Hey!%20I've%20completed%20all%203%20steps%20for%20my%20Only%20Chaats%20reward%20%F0%9F%8C%9F" 
                        target="_blank" 
                        rel="noreferrer"
                        className={`flex-1 py-3 sm:py-4 text-center font-black uppercase text-base sm:text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${completedSteps[2] ? 'bg-gray-100 text-gray-400 shadow-none translate-x-1 translate-y-1' : 'bg-white hover:bg-black hover:text-white active:shadow-none'}`}
                      >
                        {completedSteps[2] ? 'Sent ✓' : 'Send Screenshot'}
                      </a>
                      <button 
                        onClick={() => setCurrentStep(1)}
                        className="px-6 py-3 sm:py-4 border-4 border-black font-black uppercase text-sm hover:bg-gray-100 transition-colors"
                      >
                        Back
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: REWARD & ORDERING */}
        <div className="lg:col-span-4 lg:sticky lg:top-8">
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-secondary border-[3px] border-black flex items-center justify-center rotate-3">
                <Star className="text-black" size={16} strokeWidth={3} fill="currentColor" />
              </div>
              <h2 className="font-black text-lg sm:text-xl uppercase tracking-tight">Collect Your Reward Here</h2>
            </div>

            <div className="bg-secondary p-1 border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="bg-white border-[3px] border-black p-6 text-center relative overflow-hidden">
                 {/* Punch holes styling */}
                 <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-3 border-black bg-surface-bright"></div>
                 <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-3 border-black bg-surface-bright"></div>

                 {showCoupon ? (
                    <div className="py-2">
                                          <div className="bg-primary text-white text-[10px] font-black uppercase tracking-widest py-1 px-3 mb-3 inline-block -rotate-2 border-2 border-black">VOUCHER UNLOCKED</div>
                      <div className="text-2xl font-black font-mono bg-secondary px-4 py-2 border-[3px] border-black inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4">
                        {couponCode}
                      </div>
                      <button 
                        onClick={() => setShowCoupon(true)}
                        className="block w-full text-center font-black uppercase text-[10px] underline decoration-2 underline-offset-4 hover:text-primary transition-colors mt-2"
                      >
                        View Full Details
                      </button>
                    </div>
                 ) : countdown !== null ? (
                    <div className="py-6">
                      <div className="text-5xl font-black font-mono animate-pulse">{countdown}s</div>
                      <p className="font-black uppercase text-[10px] tracking-widest mt-3">Verifying...</p>
                    </div>
                 ) : (
                    <div className="py-6 opacity-40">
                      <div className="text-3xl font-black font-mono tracking-widest">?????</div>
                      <p className="font-bold text-[10px] mt-3 uppercase">Complete tasks to unlock</p>
                    </div>
                 )}
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="font-black text-lg sm:text-xl uppercase tracking-tight">Quick Links</h2>
            </div>
            <div className="space-y-3">
              <div className="space-y-1">
                <a href="https://wa.me/917780956163?text=Hey!%20I'm%20interested%20in%20bulk%20party%20orders" target="_blank" rel="noreferrer" className="flex items-center justify-between bg-[#25D366] text-white p-3.5 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase text-xs hover:shadow-none translate-y-0 hover:translate-y-1 hover:translate-x-1 transition-all">
                  ONLY BULK WHATSAPP <MessageCircle size={16} strokeWidth={3} fill="currentColor" />
                </a>
                <p className="text-[9px] font-black uppercase text-red-600 italic text-left px-1">only for bulk/ party orders</p>
              </div>
              <a href="https://www.swiggy.com/menu/1199252?source=sharing" target="_blank" rel="noreferrer" className="flex items-center justify-between bg-[#FC8019] text-white p-3.5 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase text-xs hover:shadow-none translate-y-0 hover:translate-y-1 hover:translate-x-1 transition-all">
                SWIGGY <ArrowRight size={16} />
              </a>
              <a href="https://zomato.onelink.me/xqzv/v0d2ucg7" target="_blank" rel="noreferrer" className="flex items-center justify-between bg-[#E23744] text-white p-3.5 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase text-xs hover:shadow-none translate-y-0 hover:translate-y-1 hover:translate-x-1 transition-all">
                ZOMATO <ArrowRight size={16} />
              </a>
            </div>
          </section>
        </div>

      </div>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {showCoupon && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white border-[4px] border-black w-full max-w-md p-6 sm:p-10 shadow-[10px_10px_0px_0px_rgba(250,205,28,1)] relative"
            >
              <button 
                onClick={() => setShowCoupon(false)}
                className="absolute top-4 right-4 w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"
              >
                <X />
              </button>

              <div className="text-center">
                <div className="bg-primary text-white text-xs font-black uppercase tracking-widest py-1.5 px-4 mb-6 inline-block -rotate-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  WINNER REWARDED!
                </div>
                
                <h3 className="font-black text-3xl sm:text-4xl uppercase tracking-tighter mb-4 italic">COLLECT YOUR REWARD HERE</h3>
                <p className="font-bold text-gray-500 mb-8 italic">Show this at the counter or use it online!</p>

                <div className="relative mb-8 group">
                  <div className="text-3xl sm:text-5xl font-black font-mono bg-secondary px-6 py-5 border-[4px] border-black inline-block shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] w-full">
                    {couponCode}
                  </div>
                  <button 
                    onClick={copyToClipboard}
                    className="absolute -bottom-4 right-4 bg-black text-white px-4 py-2 text-xs font-black flex items-center gap-2 border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform"
                  >
                    {copied ? 'COPIED!' : <><Copy size={14} /> COPY CODE</>}
                  </button>
                </div>

                <div className="bg-gray-100 border-2 border-black p-4 text-left">
                  <p className="font-bold text-xs sm:text-sm leading-tight text-gray-600 mb-3">
                    Add this code in the Zomato/Swiggy instructions of your next order to get a free item worth ₹149!
                  </p>
                  <div className="h-px bg-black/10 w-full mb-3"></div>
                  <p className="font-black text-[10px] uppercase text-red-500 italic">
                    (Minimum order ₹299 after discounts)
                  </p>
                </div>

                <button 
                  onClick={() => setShowCoupon(false)}
                  className="w-full bg-black text-white py-4 mt-8 font-black uppercase tracking-widest text-sm border-2 border-white hover:bg-secondary hover:text-black transition-colors"
                >
                  AWESOME!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1200px] mx-auto px-4 mt-12 pt-6 border-t-[4px] border-black opacity-80 pb-6">
        <div className="flex flex-col items-center gap-6">
          <p className="font-black text-lg sm:text-2xl uppercase tracking-tighter italic text-center text-black">Let's chaat about it</p>
          
          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
            <a 
              href="https://reguluslabs.in" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-black text-white px-3 py-1 font-black uppercase text-[8px] sm:text-[9px] tracking-widest border border-black hover:bg-secondary hover:text-black transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 inline-block"
            >
              made by reguluslabs.in
            </a>
            <div className="font-black uppercase tracking-widest text-[8px] sm:text-[10px] text-center sm:text-right text-black opacity-60">© 2025 ONLY CHAATS</div>
          </div>
        </div>
      </div>
    </div>
  );
}

