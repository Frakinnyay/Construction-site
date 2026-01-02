export default function Footer() {
  return (
    <footer className="bg-[#063B3B] text-white">

      
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          
          <div>
            <h3 className="text-xl font-bold mb-4">Vsion</h3>
            <p className="text-sm text-white/80 leading-relaxed mb-6">
              At Vision, we are dedicated to delivering exceptional
              construction services that stand the test of time.
            </p>

            <div className="flex gap-4 text-lg">
              <span><img src="/insta.avif" alt="insta" className="h-6 w-auto" /></span>
              <span><img src="/x logo.png" alt="t" className="h-6 w-auto" /></span>
              <span><img src="yt logo.avif" alt="yt"  className="h-6 w-auto"/></span>
              <span><img src="fb.png" alt="fb" className="h-7 w-auto"/></span>
            </div>
          </div>

          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><a href="/">Home</a></li>
              <li><a href="/about">about</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>Blog</li>
              <li>Careers</li>
              <li>Testimonials</li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li>📞 +088 (246) 642-27-10</li>
              <li>✉️ info@brikly.com</li>
              <li>📍 Chicago Heights, TX 60411</li>
            </ul>
          </div>

        </div>

        
        <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-white/60">
          © 2026 Brikly Construction. All rights reserved.
        </div>
      </div>

    </footer>
  );
}
