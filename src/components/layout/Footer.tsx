export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800/60 bg-zinc-950 py-8 text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand / Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Jannat. All rights reserved.
        </p>

        {/* Contact Links */}
        <div className="flex items-center space-x-6 text-sm">
          <a
            href="mailto:jannatjr648@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
          <a
            href="https://wa.me/8801516537025"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://github.com/jannat056"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}