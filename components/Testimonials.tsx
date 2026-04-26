const testimonials = [
  {
    quote:
      "John and Joe just completed a full home remodel for us and it was the best experience we've had with a contractor. They have great communication, attention to detail, and cleanliness throughout the whole process. Their craftsmanship is meticulous and they made great recommendations for upgrades without being pushy. We couldn't be happier with their work and highly recommend them!",
    name: "Kristen Carter",
    project: "Full Home Remodel",
    location: "Las Vegas, NV",
    date: "Mar 25, 2025",
  },
  {
    quote:
      "John and Joe did an amazing job on a full home remodel for us. Our home was a fixer upper and had some mold and 30+ year old construction. They were thorough, adhered to our budget, and were very communicative throughout the entire process. They even came back THREE DAYS later to address a small touch up list — their work is top notch.",
    name: "Lisa Davis",
    project: "Full Home Remodel",
    location: "Las Vegas, NV",
    date: "2024",
  },
  {
    quote:
      "If you found this review, you need look no further….. just stop and call these gentlemen! John and Joe are the real deal! I hired John for two bathroom remodels. When I called, John answered! He was on time and gave me a detailed estimate with allowances. John and Joe did all the work themselves, which was important to me. Their attention to detail was impeccable. I could not be more pleased with the results. I would absolutely hire them again.",
    name: "Cindy Rippley",
    project: "Two Bathroom Remodels",
    location: "Las Vegas, NV",
    date: "Jan 5, 2025",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase font-medium mb-4">
            What Clients Say
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-white font-bold leading-tight mb-6">
            Trust Built, Project by Project.
          </h2>

          {/* Google Reviews badge */}
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2.5">
            {/* Google "G" icon */}
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            {/* Stars */}
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, s) => (
                <svg key={s} className="w-4 h-4 text-[#FBBC05]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white/60 text-xs tracking-wide">5.0 on Google</span>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <svg
                      key={s}
                      className="w-4 h-4 text-[#FBBC05]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {/* Google G on each card */}
                <svg className="w-3.5 h-3.5 ml-auto opacity-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>

              {/* Quote */}
              <blockquote className="text-white/70 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="border-t border-white/10 pt-5">
                <p className="text-white text-sm font-semibold">{t.name}</p>
                <p className="text-[#8B6F47] text-xs mt-1 tracking-wide">
                  {t.project}
                </p>
                <p className="text-white/35 text-xs mt-0.5">{t.location} · {t.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google reviews link */}
        <p className="text-center text-white/30 text-xs mt-10 tracking-wide">
          Real reviews from verified Google customers.
        </p>
      </div>
    </section>
  );
}
