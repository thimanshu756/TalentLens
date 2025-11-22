import Image from 'next/image';
import Container from '../ui/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // const socialLinks = [
  //   {
  //     name: 'LinkedIn',
  //     href: '#',
  //     icon: (
  //       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //         <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: 'Twitter',
  //     href: '#',
  //     icon: (
  //       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //         <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  //       </svg>
  //     ),
  //   },
  // ];

  const pageLinks = [
    { name: 'Home', href: '/' },
    { name: 'Offering', href: '/offering' },
    { name: 'Contact', href: '/contact' },
    { name: 'Services', href: '/services' },
  ];

  const footerLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Sitemap', href: '/sitemap.xml' },
  ];

  return (
    <footer className="bg-[#060A14] border-t border-slate-gray/20">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
              <Image src="/assets/logo.png" alt="Rakri AI" 
          className="w-[50px] h-[50px] "
          width={100} height={100} />
                <div className="flex flex-col">
                  <span className="text-text-primary font-bold text-lg leading-tight">
                    Rakri AI
                  </span>
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                A Clearer View of Talent with Precision AI
              </p>
            </div>

            {/* Pages */}
            <div className="space-y-4">
              <h3 className="text-text-primary font-semibold">Pages</h3>
              <div className="flex flex-col space-y-2">
                {pageLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-text-secondary hover:text-electric-blue transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Legal & Sitemap */}
            <div className="space-y-4">
              <h3 className="text-text-primary font-semibold">Legal</h3>
              <div className="flex flex-col space-y-2">
                {footerLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-text-secondary hover:text-electric-blue transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Social & Contact - Commented out for now */}
            {/* <div className="space-y-4">
              <h3 className="text-text-primary font-semibold">Connect With Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-text-secondary hover:text-electric-blue transition-colors duration-200"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div> */}
          </div>

          <div className="mt-8 pt-8 border-t border-slate-gray/20">
            <p className="text-text-secondary text-sm text-center">
              {currentYear} Rakri AI. All rights reserved. GDPR Compliant.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
