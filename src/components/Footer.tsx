import { Link } from 'react-router-dom';

interface FooterProps {
  theme?: 'dark' | 'light';
}

export default function Footer({ theme = 'light' }: FooterProps) {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-black';
  const borderColor = isDark ? 'border-white' : 'border-black';
  const dropShadow = isDark ? 'drop-shadow-[2px_2px_0_#000]' : '';
  const subtleDropShadow = isDark ? 'drop-shadow-[1px_1px_0_#000]' : '';

  return (
    <div className={`mt-12 pt-6 border-t-[4px] ${borderColor} opacity-80 pb-6`}>
      <div className="flex flex-col items-center gap-6">
        <p className={`font-black text-lg sm:text-2xl uppercase tracking-tighter italic text-center ${textColor} ${dropShadow}`}>
          Let's chaat about it
        </p>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
          <Link to="/legal/privacy" className={`font-bold text-[10px] sm:text-xs uppercase hover:underline ${textColor} ${subtleDropShadow}`}>Privacy Policy</Link>
          <Link to="/legal/terms" className={`font-bold text-[10px] sm:text-xs uppercase hover:underline ${textColor} ${subtleDropShadow}`}>Terms of Use</Link>
          <Link to="/legal/contact" className={`font-bold text-[10px] sm:text-xs uppercase hover:underline ${textColor} ${subtleDropShadow}`}>Contact Info</Link>
        </div>
        
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
          <a 
            href="https://reguluslabs.in" 
            target="_blank" 
            rel="noreferrer" 
            className={`bg-black text-white px-3 py-1 font-black uppercase text-[8px] sm:text-[9px] tracking-widest border ${theme === 'dark' ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-secondary hover:text-black'} transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 inline-block`}
          >
            made by reguluslabs.in
          </a>
          <div className={`font-black uppercase tracking-widest text-[8px] sm:text-[10px] text-center sm:text-right ${textColor} ${subtleDropShadow} opacity-60`}>
            © {new Date().getFullYear()} ONLY CHAATS
          </div>
        </div>
      </div>
    </div>
  );
}
