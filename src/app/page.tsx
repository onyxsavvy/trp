import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { MapPin, Phone, Clock, Star } from "lucide-react";
import { StoryVideo } from "@/components/StoryVideo";
import { HeroSlider } from "@/components/HeroSlider";
import { ReservationForm } from "@/components/ReservationForm";

export default function Home() {
  const waReserveMsg = encodeURIComponent("Hi TRP - The Rooftop Project! I'd like to reserve a table.\nName:\nDate & Time:\nNumber of Guests:");
  const waEventMsg = encodeURIComponent("Hi TRP - The Rooftop Project! I'd like to enquire about hosting an event/celebration.\nOccasion:\nPreferred Date:\nApprox. Guest Count:");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "TRP - The Rooftop Project",
    "image": "https://trp-rooftop-project.vercel.app/images/hero.png",
    "description": "A breezy terrace by day, a live-music rooftop by night. Global & Indian dining, craft cocktails, and celebrations on MG Road, Pune.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tej House, 6th Floor, 5 MG Road, Next to Marzorin, Camp",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411001",
      "addressCountry": "IN"
    },
    "telephone": "+919607384000",
    "servesCuisine": ["Indian", "Global", "Fusion"],
    "priceRange": "₹800-2000"
  };

  return (
    <main className="min-h-screen bg-cream-50 overflow-hidden text-ink-900 selection:bg-terracotta/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      {/* 1. Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-start pt-20">
        <HeroSlider />

        <div className="relative z-10 px-6 max-w-7xl mx-auto w-full mt-10 md:mt-0">
          <Reveal className="max-w-3xl">
            <h1 className="text-[clamp(3.5rem,7vw,6.5rem)] leading-[1.05] mb-6 text-cream-50 font-display drop-shadow-xl tracking-tight">
              The Rooftop <span className="italic font-normal text-terracotta">Project</span>
            </h1>
            <p className="text-[clamp(1.125rem,1.5vw,1.25rem)] text-cream-100/90 mb-10 max-w-xl leading-relaxed font-sans drop-shadow-md">
              Where afternoon calm turns into rooftop nightlife — on a terrace built for both.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6">
              <Link
                href={`https://wa.me/919607384000?text=${waReserveMsg}`}
                target="_blank"
                className="inline-flex items-center justify-center px-10 py-4 bg-terracotta text-cream-50 font-medium rounded-full hover:bg-oxblood hover:scale-[1.02] transition-all duration-300 shadow-xl uppercase tracking-wider text-sm"
              >
                Reserve a Table
              </Link>
              <Link
                href="#menu"
                className="inline-flex items-center justify-center px-10 py-4 border border-cream-50/40 text-cream-50 font-medium rounded-full hover:bg-cream-50/10 hover:border-cream-50/80 transition-all duration-300 shadow-xl uppercase tracking-wider text-sm backdrop-blur-sm"
              >
                View Menu
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Our Story */}
      <section id="story" className="py-24 md:py-32 px-6 bg-cream-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <Reveal className="order-2 md:order-1 w-full flex justify-center">
            <StoryVideo />
          </Reveal>
          <div className="max-w-xl order-1 md:order-2">
            <RevealGroup>
              <RevealItem className="mb-6">
                <span className="inline-block text-xs font-bold tracking-[0.2em] text-terracotta mb-4 uppercase flex items-center gap-4">
                  <span className="w-8 h-px bg-terracotta/50"></span> Our Story
                </span>
                <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.1]">
                  A rooftop built to become two different <span className="italic text-oxblood">places</span>
                </h2>
              </RevealItem>
              <RevealItem className="text-ink-600 mb-6 leading-relaxed font-sans text-lg">
                TRP sits six floors above MG Road, Pune — a terrace that shifts through the day. Breezy and relaxed in the afternoon, then lit up after dark with live music, a full bar, and a skyline view that keeps people around long after dinner. The menu moves easily between Indian classics and global favorites, built for sharing.
              </RevealItem>
              <RevealItem className="text-ink-600 mb-10 leading-relaxed font-sans text-lg">
                We&apos;ve become one of MG Road&apos;s go-to spots for birthdays, family time, reunions, and after-work evenings that turn into late nights.
              </RevealItem>
              <RevealItem>
                <blockquote className="pl-6 border-l-2 border-tan text-ink-900 font-display text-xl md:text-2xl italic leading-snug">
                  &quot;Nice rooftop place at heart of city 💕. Nice place to have time for couples and family.&quot;
                </blockquote>
              </RevealItem>
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* 3. Signature Dishes */}
      <section id="signature-dishes" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-terracotta mb-4 uppercase flex items-center justify-center gap-4">
             <span className="w-8 h-px bg-terracotta/50"></span> Signature Dishes <span className="w-8 h-px bg-terracotta/50"></span>
          </span>
          <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.1]">
            What our guests keep <span className="italic text-terracotta">coming</span> back for
          </h2>
        </Reveal>
        
        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {[
            { name: "Tandoori Barrah Mutton Chops", desc: "Char-grilled and smoky, the dish reviewers name first.", img: "/images/tandoori_mutton.png" },
            { name: "Karari Roti", desc: "Crisp, built for scooping up everything else on the table.", img: "/images/karari_roti.png" },
            { name: "Egg Dum Biryani", desc: "Layered, slow-cooked, and consistently one of the most-ordered mains.", img: "/images/egg_biryani.png" },
            { name: "Loaded Cheesy Nachos with Chicken", desc: "The shareable start to a night that's about to get louder.", img: "/images/cheesy_nachos.png" },
            { name: "Dal Makhani", desc: "Slow-simmered comfort, the anchor on a menu full of fusion twists.", img: "/images/dal_makhani.png" }
          ].map((dish, i) => (
            <RevealItem key={i} className="bg-cream-100 rounded-xl overflow-hidden border border-cream-border hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="aspect-[4/3] bg-cream-border/30 relative overflow-hidden">
                <Image 
                  src={dish.img}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-display mb-3 text-ink-900 group-hover:text-terracotta transition-colors">{dish.name}</h3>
                <p className="text-ink-600 leading-relaxed font-sans">{dish.desc}</p>
                <div className="mt-auto pt-6 flex items-center text-tan">
                  <div className="h-px bg-cream-border flex-grow"></div>
                  <Star size={12} fill="currentColor" className="mx-2" />
                  <div className="h-px bg-cream-border flex-grow"></div>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
        
        <Reveal delay={0.4} className="mt-20 text-center text-ink-600 font-display italic text-lg md:text-xl">
          Every dish is plated for a table that&apos;s about to be here a while — starters early, mains unhurried, dessert whenever the music slows down.
        </Reveal>
      </section>

      {/* 4. The Mocktail Theatre */}
      <section id="mocktail-theatre" className="py-24 md:py-32 px-6 bg-oxblood text-cream-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <Reveal className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/images/mocktail.png" 
              alt="Live on the Rooftop"
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Subtle inner shadow/border for premium feel */}
            <div className="absolute inset-0 border border-cream-50/20 rounded-2xl pointer-events-none"></div>
          </Reveal>
          
          <div className="flex flex-col justify-center">
            <RevealGroup>
              <RevealItem className="mb-6">
                <span className="inline-block text-xs font-bold tracking-[0.2em] text-tan mb-6 uppercase flex items-center gap-4">
                  <span className="w-8 h-px bg-tan/50"></span> Live on the Rooftop
                </span>
                <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.1] font-light">
                  The night gets loud, right on <span className="italic text-tan">cue</span>
                </h2>
              </RevealItem>
              
              <RevealItem>
                <p className="text-cream-100/80 text-lg mb-10 leading-relaxed font-sans font-light">
                  As the sun drops, TRP shifts gears — string lights come on, the DJ takes over, and the dance floor fills, with the city skyline as the backdrop. Live music runs strong through the week, especially Sundays. Pair it with a craft cocktail off the bar and you&apos;ve got the reason most guests come back.
                </p>
              </RevealItem>
              
              <RevealItem className="mb-12">
                <div className="pl-6 border-l-2 border-tan/30">
                  <p className="text-tan italic font-display text-xl md:text-2xl mb-3">
                    &quot;Best rooftop view on MG Road — the live music on Sundays makes it worth the trip.&quot;
                  </p>
                  <p className="text-xs uppercase tracking-widest text-cream-100/50">Guest Review</p>
                </div>
              </RevealItem>
              
              <RevealItem>
                <Link
                  href="#menu"
                  className="inline-flex items-center justify-center px-10 py-4 border border-cream-50/30 text-cream-50 font-medium rounded-full hover:bg-cream-50 hover:text-oxblood transition-all duration-300 shadow-lg tracking-wide uppercase text-sm"
                >
                  See the Menu
                </Link>
              </RevealItem>
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* 5. Menu Categories */}
      <section id="menu" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-terracotta mb-4 uppercase flex items-center justify-center gap-4">
             <span className="w-8 h-px bg-terracotta/50"></span> The Menu <span className="w-8 h-px bg-terracotta/50"></span>
          </span>
          <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.1]">
            A little bit of everything, done <span className="italic text-terracotta">properly</span>
          </h2>
        </Reveal>
        
        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { title: "Starters", desc: "Small plates built for sharing, tandoor to table" },
            { title: "Mains — Indian", desc: "Curries, tandoor, and biryani done the TRP way" },
            { title: "Mains — Global & Fusion", desc: "International favorites with a modern rooftop twist" },
            { title: "Biryani & Rice", desc: "Slow-cooked, layered, and always in demand" },
            { title: "Craft Cocktails & Bar", desc: "Hand-crafted drinks, built for watching the skyline change" },
            { title: "Desserts", desc: "Sweet closers, from classic kulfi to a modern twist" },
          ].map((cat, i) => (
            <RevealItem key={i} className="p-8 md:p-10 bg-cream-50 rounded-xl border border-cream-border text-center hover:border-terracotta hover:bg-cream-100 transition-all duration-300 group shadow-sm hover:shadow-md cursor-default">
              <h3 className="text-2xl font-display mb-3 text-ink-900 group-hover:text-terracotta transition-colors">{cat.title}</h3>
              <p className="text-ink-600 font-sans">{cat.desc}</p>
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal delay={0.4} className="mt-16 text-center text-ink-600 max-w-lg mx-auto font-sans bg-cream-100 p-6 rounded-lg border border-cream-border/50">
          Full menu available in-house and updated seasonally — ask your server for today&apos;s specials.
        </Reveal>
      </section>

      {/* 6. Ambiance Gallery */}
      <section id="gallery" className="py-24 md:py-32 px-6 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-terracotta mb-4 uppercase flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-terracotta/50"></span> The Room <span className="w-8 h-px bg-terracotta/50"></span>
            </span>
            <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] mb-6 leading-[1.1]">
              Breezy by day, buzzing by night, unmistakably <span className="italic text-oxblood">TRP</span>
            </h2>
            <p className="text-ink-600 leading-relaxed font-sans text-lg">
              From the terrace furniture to the string lights, every corner of TRP is built for two different moods in one place — quiet enough for brunch, loud enough for a Saturday night.
            </p>
          </Reveal>

          <RevealGroup className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16">
            {[
              "/images/gallery-1.png", 
              "/images/gallery-2.png", 
              "/images/gallery-3.png", 
              "/images/gallery-4.png",
              "/images/gallery-5.png",
              "/images/gallery-6.png",
              "/images/gallery-7.png",
              "/images/gallery-8.png",
              "/images/gallery-9.png"
            ].map((img, i) => (
              <RevealItem key={i} className="relative aspect-square rounded-xl overflow-hidden bg-cream-border/30 shadow-md">
                <Image 
                  src={img}
                  alt={`TRP Ambiance ${i + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-1000"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.4} className="text-center">
            <a
              href="https://www.instagram.com/trppune"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-ink-900 font-medium hover:text-terracotta transition-colors border-b border-ink-900 hover:border-terracotta pb-1 uppercase tracking-wide text-sm"
            >
              See more of TRP on Instagram 
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
          </Reveal>
        </div>
      </section>

      {/* 7. Celebrations & Private Dining */}
      <section id="events" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          <div className="order-2 md:order-1">
            <RevealGroup>
              <RevealItem className="mb-6">
                <span className="inline-block text-xs font-bold tracking-[0.2em] text-terracotta mb-4 uppercase flex items-center gap-4">
                  <span className="w-8 h-px bg-terracotta/50"></span> Celebrations at TRP
                </span>
                <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.1]">
                  Built for the moments that <span className="italic text-terracotta">matter</span>
                </h2>
              </RevealItem>
              <RevealItem className="text-ink-600 mb-8 leading-relaxed font-sans text-lg">
                A wedding reception, a corporate evening, a birthday that needs a dance floor — TRP hosts 10 to 100 guests across the terrace, with in-house catering. Tell us the occasion and we&apos;ll help you plan a night that fits.
              </RevealItem>
              <RevealItem className="flex flex-wrap gap-3 mb-12">
                {['Weddings & Receptions', 'Corporate Events', 'Birthdays', 'Family Gatherings'].map((tag) => (
                  <span key={tag} className="text-sm font-medium px-5 py-2.5 bg-cream-100 border border-cream-border rounded-full text-ink-900 shadow-sm">
                    {tag}
                  </span>
                ))}
              </RevealItem>
              <RevealItem>
                <Link
                  href={`https://wa.me/919607384000?text=${waEventMsg}`}
                  target="_blank"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-terracotta text-terracotta font-medium rounded-full hover:bg-terracotta hover:text-cream-50 transition-all duration-300 uppercase tracking-wide text-sm"
                >
                  Enquire About Your Event
                </Link>
              </RevealItem>
            </RevealGroup>
          </div>
          <Reveal delay={0.2} className="relative aspect-square md:aspect-[4/5] w-full rounded-2xl overflow-hidden bg-cream-100 border border-cream-border shadow-xl order-1 md:order-2">
            <Image 
              src="/images/event.png"
              alt="Celebrations at TRP"
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </Reveal>
        </div>
      </section>

      {/* 8. Reservation */}
      <section id="reservation" className="py-24 md:py-32 px-6 bg-ink-900 text-cream-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-terracotta/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-tan/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-terracotta mb-4 uppercase flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-terracotta/50"></span> Book a Table <span className="w-8 h-px bg-terracotta/50"></span>
            </span>
            <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.1] mb-6">
              Reserve your <span className="italic text-tan">experience</span>
            </h2>
            <p className="text-cream-50/70 leading-relaxed font-sans text-lg">
              Secure your spot on the rooftop. We recommend booking at least 24 hours in advance for weekends and special occasions.
            </p>
          </Reveal>
          
          <Reveal delay={0.2}>
            <ReservationForm />
          </Reveal>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="py-24 md:py-32 px-6 bg-cream-100 border-t border-cream-border/50">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-terracotta mb-4 uppercase flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-terracotta/50"></span> In Our Guests&apos; Words <span className="w-8 h-px bg-terracotta/50"></span>
            </span>
            <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.1]">
              Loved by our <span className="italic text-oxblood">guests</span>
            </h2>
          </Reveal>

          <RevealGroup className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { text: "The rooftop view alone is worth the visit — the food and the music make it a full night out.", author: "Guest" },
              { text: "Best live music setup on MG Road. We've made this our regular Sunday spot.", author: "Guest" },
              { text: "Great for a big group — they handled our birthday booking without a hitch.", author: "Guest" }
            ].map((t, i) => (
              <RevealItem key={i} className="bg-cream-50 p-10 rounded-xl border border-cream-border flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative">
                {/* Decorative quote mark */}
                <div className="absolute top-6 right-8 text-6xl font-display text-tan/20 leading-none select-none">
                  &quot;
                </div>
                <div className="flex gap-1 text-tan mb-8 relative z-10">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-ink-600 leading-relaxed mb-8 font-sans relative z-10">&quot;{t.text}&quot;</p>
                <p className="font-display font-medium text-ink-900 text-lg relative z-10">— {t.author}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.3} className="text-center pt-10 border-t border-cream-border">
            <p className="text-sm font-medium text-ink-600 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 uppercase tracking-wide">
              <span>~4.1★ average rating </span>
              <span className="hidden sm:inline text-cream-border">·</span>
              <span>One of MG Road&apos;s most-loved rooftop nightspots</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* 9. Location, Hours & Contact */}
      <section id="location" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          <Reveal className="aspect-square md:aspect-[4/3] w-full bg-cream-border/20 rounded-2xl overflow-hidden border border-cream-border flex items-center justify-center text-ink-600 shadow-inner relative group">
            <div className="absolute inset-0 bg-cream-100 overflow-hidden group">
               <a href="https://www.google.com/maps/dir/?api=1&destination=MG+Road,+Pune+(TRP+-+The+Rooftop+Project)" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label="Get directions to TRP"></a>
               <iframe 
                 width="100%" 
                 height="100%" 
                 title="TRP Location"
                 src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=MG%20Road,%20Pune%20(TRP%20-%20The%20Rooftop%20Project)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
                 frameBorder="0" 
                 scrolling="no" 
                 marginHeight={0} 
                 marginWidth={0}
                 className="w-full h-full grayscale-[20%] sepia-[40%] contrast-90 opacity-90 group-hover:grayscale-0 group-hover:sepia-0 group-hover:contrast-100 group-hover:opacity-100 transition-all duration-500 ease-in-out pointer-events-none"
               ></iframe>
            </div>
          </Reveal>
          <div className="flex flex-col justify-center">
            <RevealGroup>
              <RevealItem className="mb-10">
                <span className="inline-block text-xs font-bold tracking-[0.2em] text-terracotta mb-4 uppercase flex items-center gap-4">
                  <span className="w-8 h-px bg-terracotta/50"></span> Visit Us
                </span>
                <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.1]">
                  Find your table, six floors <span className="italic text-terracotta">up</span>
                </h2>
              </RevealItem>

              <div className="space-y-10 mb-12">
                <RevealItem className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-cream-100 flex items-center justify-center shrink-0 border border-cream-border">
                    <MapPin className="text-terracotta" size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl mb-2">Address</h3>
                    <p className="text-ink-600 font-sans leading-relaxed">
                      Tej House, 6th Floor, 5 MG Road,<br />
                      Next to Marzorin, Camp, Pune, Maharashtra 411001
                    </p>
                  </div>
                </RevealItem>
                
                <RevealItem className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-cream-100 flex items-center justify-center shrink-0 border border-cream-border">
                    <Phone className="text-terracotta" size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl mb-2">Phone</h3>
                    <a href="tel:+919607384000" className="text-ink-600 font-sans text-lg hover:text-terracotta transition-colors border-b border-transparent hover:border-terracotta">
                     96073 84000
                    </a>
                  </div>
                </RevealItem>

                <RevealItem className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-cream-100 flex items-center justify-center shrink-0 border border-cream-border">
                    <Clock className="text-terracotta" size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl mb-2">Hours</h3>
                    <p className="text-ink-600 font-sans text-lg">
                      Opens 12 PM to 1 AM<br />
                      
                    </p>
                  </div>
                </RevealItem>
              </div>

              <RevealItem className="mb-10 pb-10 border-b border-cream-border">
                <p className="text-sm font-medium text-ink-600 uppercase tracking-wide flex flex-wrap gap-x-4 gap-y-2">
                  <span>Dine-in</span> 
                  <span className="text-cream-border">•</span> 
                  <span>Full Bar</span> 
                  <span className="text-cream-border">•</span> 
                  <span>Live Music</span>
                </p>
              </RevealItem>

              <RevealItem className="flex flex-wrap gap-4">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=MG+Road,+Pune+(TRP+-+The+Rooftop+Project)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-cream-100 border border-cream-border rounded-full text-ink-900 font-medium hover:border-terracotta hover:bg-cream-50 transition-colors uppercase tracking-wide text-sm"
                >
                  Get Directions
                </a>
                <a
                  href="tel:+919607384000"
                  className="px-8 py-4 bg-cream-100 border border-cream-border rounded-full text-ink-900 font-medium hover:border-terracotta hover:bg-cream-50 transition-colors uppercase tracking-wide text-sm"
                >
                  Call Now
                </a>
                <a
                  href={`https://wa.me/919607384000?text=${waReserveMsg}`}
                  target="_blank"
                  className="px-8 py-4 bg-terracotta text-cream-50 rounded-full font-medium hover:bg-oxblood transition-colors shadow-md uppercase tracking-wide text-sm"
                >
                  WhatsApp Us
                </a>
              </RevealItem>
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* 10. Final Reserve / Footer Band */}
      <footer className="bg-oxblood text-cream-50">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 text-center">
          <Reveal>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] mb-6 leading-[1.1] font-light">
              Your table is <span className="italic font-normal text-tan">waiting.</span>
            </h2>
            <p className="text-cream-100/80 mb-12 max-w-md mx-auto font-sans text-lg">
              Reserve now, or reach out on WhatsApp — we&apos;ll take care of the rest.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-24">
              <Link
                href={`https://wa.me/919607384000?text=${waReserveMsg}`}
                target="_blank"
                className="px-10 py-4 bg-terracotta text-cream-50 font-medium rounded-full hover:bg-cream-50 hover:text-oxblood transition-all duration-300 uppercase tracking-wide text-sm shadow-xl"
              >
                Reserve on WhatsApp
              </Link>
              <a
                href="tel:+919607384000"
                className="px-10 py-4 border border-cream-50/30 text-cream-50 font-medium rounded-full hover:bg-cream-50/10 transition-colors uppercase tracking-wide text-sm"
              >
                Call Now
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 items-start text-left pt-16 border-t border-cream-50/10">
            <div>
              <div className="relative w-16 h-16 mb-6 rounded-full overflow-hidden">
                <Image src="/images/logo.png" alt="TRP Logo" fill className="object-cover scale-[1.15]" />
              </div>
              <p className="text-sm text-cream-100/60 max-w-xs font-sans leading-relaxed">
                Rooftop Bar & Kitchen<br />
                MG Road, Pune
              </p>
            </div>
            
            <div className="text-sm text-cream-100/60 space-y-2 md:text-center font-sans">
              <p>Tej House, 6th Floor, 5 MG Road, near Marzorin</p>
              <p>96073 84000</p>
              <p>Opens 12 PM to 1 AM</p>
            </div>

            <div className="flex flex-col md:items-end gap-3 text-sm text-cream-100/60 font-sans">
              <a href="https://www.instagram.com/trppune" target="_blank" className="hover:text-tan transition-colors flex items-center gap-2 mb-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg> 
                @trppune
              </a>
              <p className="mt-4">Site by OnyxSavvy</p>
              <p>© {new Date().getFullYear()} TRP — The Rooftop Project. All rights reserved.</p>
            </div>
          </Reveal>
        </div>
      </footer>
    </main>
  );
}
