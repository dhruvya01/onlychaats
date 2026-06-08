import { useParams, Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';

export default function Legal() {
  const { page } = useParams<{ page: string }>();

  let title = '';
  let content = null;

  switch (page) {
    case 'privacy':
      title = 'Privacy Policy';
      content = (
        <div className="space-y-6 text-sm sm:text-base font-bold">
          <section>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-2">Introduction</h2>
            <p>Welcome to OnlyChaats. We value your privacy and are committed to protecting your information.</p>
          </section>
          
          <section>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-2">Information We Collect</h2>
            <p>We may collect:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Name</li>
              <li>Phone Number</li>
              <li>Email Address</li>
              <li>Contact Form Information</li>
              <li>WhatsApp Messages</li>
              <li>Feedback and Reviews</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-2">How We Use Information</h2>
            <p>We use information to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Respond to inquiries</li>
              <li>Share offers and promotions</li>
              <li>Improve customer experience</li>
              <li>Process customer requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-2">Third-Party Services</h2>
            <p>OnlyChaats may redirect users to:</p>
            <ul className="list-disc pl-5 mt-2 mb-2 space-y-1">
              <li>Zomato</li>
              <li>Swiggy</li>
              <li>Instagram</li>
              <li>WhatsApp</li>
              <li>Google Maps</li>
            </ul>
            <p>Users are subject to the privacy policies of those platforms.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-2">Data Security</h2>
            <p>We take reasonable steps to protect customer information and do not sell customer data to third parties.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-2">Contact</h2>
            <p>For privacy-related questions:</p>
            <p className="mt-2 text-black bg-primary/20 p-4 border-[3px] border-black inline-block">
              <strong>OnlyChaats</strong><br />
              Email: Onlychaatsind@gmail.com<br />
              Phone: +917780956163
            </p>
          </section>
        </div>
      );
      break;

    case 'terms':
      title = 'Terms of Use';
      content = (
        <div className="space-y-6 text-sm sm:text-base font-bold">
          <section>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-2">Welcome</h2>
            <p>By using OnlyChaats.in, you agree to these terms.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-2">Website Purpose</h2>
            <p>This website is intended to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Showcase our menu</li>
              <li>Display offers and coupons</li>
              <li>Provide ordering links</li>
              <li>Share brand information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-2">Pricing & Menu Information</h2>
            <p>Prices, menu items, offers, and availability may change without prior notice.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-2">Third-Party Ordering</h2>
            <p>Orders placed through:</p>
            <ul className="list-disc pl-5 mt-2 mb-2 space-y-1">
              <li>Zomato</li>
              <li>Swiggy</li>
              <li>Other delivery partners</li>
            </ul>
            <p>are governed by the policies of those platforms.</p>
            <p className="mt-2">OnlyChaats is not responsible for platform outages, delays, or technical issues beyond its control.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-2">Promotional Offers</h2>
            <p>Coupons and promotions:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>May have expiry dates</li>
              <li>May be withdrawn without notice</li>
              <li>Cannot be exchanged for cash</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-2">Intellectual Property</h2>
            <p>All content, logos, branding, images, menus, and designs on this website belong to OnlyChaats.</p>
            <p className="mt-2 text-red-600 italic">Unauthorized use is prohibited.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-2">Limitation of Liability</h2>
            <p>OnlyChaats is not responsible for:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Third-party delivery delays</li>
              <li>Platform outages</li>
              <li>Incorrect information submitted by customers</li>
              <li>Temporary website downtime</li>
            </ul>
          </section>
        </div>
      );
      break;

    case 'contact':
      title = 'Contact & Business Information';
      content = (
        <div className="space-y-6 text-sm sm:text-base font-bold">
          <section className="bg-white border-[4px] border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-6 border-b-[3px] border-black pb-2">Business Information</h2>
            
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <span className="font-black uppercase tracking-widest text-xs text-gray-500 w-32">Business Name</span>
                <span className="text-lg">OnlyChaats</span>
              </div>
              <div className="h-px bg-black/10 w-full"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <span className="font-black uppercase tracking-widest text-xs text-gray-500 w-32">Website</span>
                <span className="text-lg">OnlyChaats.in</span>
              </div>
              <div className="h-px bg-black/10 w-full"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                <span className="font-black uppercase tracking-widest text-xs text-gray-500 w-32 mt-1">Location</span>
                <span className="text-lg leading-tight">Lower Roop Nagar, Muthi<br/><span className="text-sm font-bold text-gray-500">(Cloud kitchen operating from home)</span></span>
              </div>
              <div className="h-px bg-black/10 w-full"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <span className="font-black uppercase tracking-widest text-xs text-gray-500 w-32">Phone</span>
                <span className="text-lg px-2">+917780956163</span>
              </div>
              <div className="h-px bg-black/10 w-full"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <span className="font-black uppercase tracking-widest text-xs text-gray-500 w-32">WhatsApp</span>
                <span className="text-lg px-2">+917780956163</span>
              </div>
              <div className="h-px bg-black/10 w-full"></div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <span className="font-black uppercase tracking-widest text-xs text-gray-500 w-32">Instagram</span>
                <a href="https://www.instagram.com/onlychaats/" target="_blank" rel="noreferrer" className="text-lg text-primary underline decoration-[3px] underline-offset-4">@onlychaats</a>
              </div>
              <div className="h-px bg-black/10 w-full"></div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 pt-2">
                <span className="font-black uppercase tracking-widest text-xs text-gray-500 w-32 mt-1">Business Hours</span>
                <div className="text-base space-y-1">
                  <div>Mon-Tue: 11:00 AM - 11:00 PM</div>
                  <div className="text-red-500 italic">Wednesday: Closed</div>
                  <div>Thu-Sun: 11:00 AM - 11:00 PM</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
      break;

    default:
      title = 'Page Not Found';
      content = <p>The document you are looking for does not exist.</p>;
  }

  return (
    <div className="min-h-screen bg-surface-bright text-on-surface">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-primary border-b-[4px] border-black px-4 py-4 flex flex-col shadow-[0_4px_0_0_#000]">
        <div className="max-w-[800px] w-full mx-auto flex justify-between items-center">
            <Link 
              to="/"
              className="w-10 h-10 bg-white border-[3px] border-black flex items-center justify-center hover:bg-secondary transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 active:shadow-none"
            >
              <ArrowLeft size={20} strokeWidth={3} className="text-black" />
            </Link>
            <Link to="/" className="font-black italic text-xl tracking-tighter text-white drop-shadow-[2px_2px_0_#000]">
              ONLY CHAATS
            </Link>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-4 py-8 sm:py-12">
        <h1 className="font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tighter mb-4 inline-block bg-secondary border-[4px] border-black p-3 sm:p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
          {title}
        </h1>
        <div className="mt-2 mb-8 font-black uppercase text-xs tracking-widest text-gray-500">
           Last Updated: {new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
        </div>
        
        <div className="mt-8 space-y-6 max-w-none">
          {content}
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-4">
         <Footer theme="light" />
      </div>
    </div>
  );
}
