
import { Link } from 'react-router-dom';
import { Home, X, MessageCircle } from 'lucide-react';
import { logoImg, menuItems } from '../constants';

export default function Menu() {
  return (
    <div className="min-h-screen bg-[#618a5e] pb-20 selection:bg-secondary selection:text-black">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-[#618a5e] border-b-4 border-black px-4 sm:px-8 py-4 flex items-center justify-between shadow-[0_4px_0_0_#000]">
        <div className="flex items-center gap-3">
          <Link to="/" className="w-10 h-10 rounded-full border-[3px] border-black overflow-hidden bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <img alt="Logo" className="w-full h-full object-contain" src={logoImg} />
          </Link>
          <h1 className="font-black italic text-xl sm:text-2xl tracking-tighter text-white drop-shadow-[2px_2px_0_#ad1110]">
            ONLY CHAATS MENU
          </h1>
        </div>
        <Link
          to="/"
          className="w-10 h-10 bg-primary border-[3px] border-black flex items-center justify-center hover:bg-white hover:text-black text-white transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:translate-x-0.5 active:shadow-none rounded-full"
        >
          <X size={24} strokeWidth={3} />
        </Link>
      </div>

      <div className="max-w-[1400px] mx-auto p-4 sm:p-8">
        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {menuItems.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border-[4px] border-black relative transition-all hover:-translate-y-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group flex flex-col overflow-hidden h-full"
            >
              {item.image && (
                <div className="w-full aspect-[4/3] border-b-[4px] border-black bg-black overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100" 
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white font-black px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    #0{idx + 1}
                  </div>
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-black text-2xl mb-3 uppercase leading-tight tracking-tight">
                  {item.title}
                </h3>
                <p className="font-bold text-sm leading-relaxed text-gray-700 mb-6 flex-1">
                  {item.desc}
                </p>
                <div className="pt-4 border-t-2 border-black/10 flex justify-between items-center mt-auto">
                   <div className="flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-green-500 border border-black/20"></div>
                     <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Fresh Daily</span>
                   </div>
                   <div className="font-black text-xs uppercase bg-secondary px-2 py-1 border-2 border-black">Authentic</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Action Section for Menu */}
        <div className="mt-16 bg-black text-white p-8 sm:p-12 border-[4px] border-black shadow-[12px_12px_0px_0px_rgba(250,205,28,1)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-4">CRAVING THESE?</h2>
            <p className="text-gray-400 font-bold max-w-md">Order now via our delivery partners for the freshest experience delivered straight to your door.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a href="https://zomato.onelink.me/xqzv/v0d2ucg7" target="_blank" rel="noreferrer" className="bg-[#E23744] px-8 py-4 border-[3px] border-white font-black uppercase shadow-[4px_4px_0_0_#fff] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-center">Zomato</a>
            <a href="https://www.swiggy.com/menu/1199252?source=sharing" target="_blank" rel="noreferrer" className="bg-[#FC8019] px-8 py-4 border-[3px] border-white font-black uppercase shadow-[4px_4px_0_0_#fff] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-center">Swiggy</a>
            <a href="https://wa.me/917780956163" target="_blank" rel="noreferrer" className="bg-[#25D366] px-8 py-4 border-[3px] border-white font-black uppercase shadow-[4px_4px_0_0_#fff] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-center flex flex-col leading-none justify-center">
              WhatsApp
              <span className="text-[8px] mt-1 normal-case font-bold">Party Orders</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
