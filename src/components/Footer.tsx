const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
      <div>
        <p className="font-display text-lg font-bold">
          <span className="text-gradient-gold">KCK</span>
          <span className="text-foreground"> PRODUCTION</span>
        </p>
        <p className="font-body text-[10px] uppercase tracking-widest text-muted-foreground">
          Part of Maha Event
        </p>
      </div>
      <p className="font-body text-xs text-muted-foreground">
        © {new Date().getFullYear()} KCK Production — Kreativika Cipta Kreasi. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
