
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, X, MessageCircle, Plus, Minus, ShoppingCart } from 'lucide-react';
import { logoImg, menuItems } from '../constants';
import Footer from '../components/Footer';

export default function Menu() {
  const [cart, setCart] = useState<{ [key: string]: number }>({});

  const updateCart = (title: string, delta: number) => {
    setCart(prev => {
       const current = prev[title] || 0;
       const next = Math.max(0, current + delta);
       if (next === 0) {
          const copy = { ...prev };
          delete copy[title];
          return copy;
       }
       return { ...prev, [title]: next };
    });
  };

  let totalItems = 0;
  for (const key in cart) {
      totalItems += cart[key];
  }

  const handleWhatsAppOrder = () => {
      let text = "Hello OnlyChaats! I'd like to place an order:\n\n";
      Object.entries(cart).forEach(([title, qty]) => {
        text += `${qty}x ${title}\n`;
      });
      
      const waUrl = `https://wa.me/917780956163?text=${encodeURIComponent(text)}`;
      window.open(waUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#618a5e] pb-32 selection:bg-secondary selection:text-black">
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
                   <div className="flex gap-2 items-center">
                     <div className="w-2 h-2 rounded-full bg-green-500 border border-black/20"></div>
                     <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Fresh Daily</span>
                   </div>
                   <div className="flex items-center gap-2">
                      {cart[item.title] ? (
                         <div className="flex items-center border-[3px] border-black bg-white rounded-full overflow-hidden shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            <button 
                              onClick={() => updateCart(item.title, -1)}
                              className="px-2 py-1 bg-white hover:bg-gray-100 font-bold active:bg-gray-200"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-2 font-black text-sm">{cart[item.title]}</span>
                            <button 
                              onClick={() => updateCart(item.title, 1)}
                              className="px-2 py-1 bg-white hover:bg-gray-100 font-bold active:bg-gray-200"
                            >
                              <Plus size={14} />
                            </button>
                         </div>
                      ) : (
                         <button 
                            onClick={() => updateCart(item.title, 1)}
                            className="flex items-center gap-1 font-black text-xs uppercase bg-secondary px-3 py-1 border-[3px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all rounded-full"
                         >
                            <Plus size={14} strokeWidth={3} /> ADD
                         </button>
                      )}
                   </div>
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
          </div>
        </div>

        <Footer theme="dark" />
      </div>

      {/* Cart Bottom Bar */}
      {totalItems > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t-[4px] border-black p-4 sm:p-6 z-[60] shadow-[0_-4px_0_0_#000]">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
             <div className="font-black text-lg sm:text-xl flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span className="bg-secondary px-3 py-1 border-2 border-black inline-block whitespace-nowrap">{totalItems} ITEMS</span>
                <span className="text-gray-500 uppercase tracking-tight text-sm sm:text-base hidden sm:inline-block">In Your Cart</span>
             </div>
             <button 
                onClick={handleWhatsAppOrder}
                className="bg-[#25D366] text-white px-4 sm:px-8 py-3 sm:py-4 border-[3px] border-black font-black uppercase flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all w-full sm:w-auto"
             >
                <ShoppingCart size={20} strokeWidth={3} />
                <span>Order on <span className="hidden sm:inline">WhatsApp</span><span className="sm:hidden">WA</span></span>
             </button>
          </div>
        </div>
      )}
    </div>
  );
}
