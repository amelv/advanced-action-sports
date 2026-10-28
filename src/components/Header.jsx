export default function Header({ path = '/' }) {
  const pagePath = path.split('/').filter(Boolean)[0] || '';
  const active = (p) => (pagePath === p ? 'active' : undefined);

  return (
    <header>
      <div className="noise-overlay"></div>
      <div className="header-inner">
        <nav className="nav-left" aria-label="Activities">
          <a href="/airsoft/" className={active('airsoft')}>Airsoft</a>
          <a href="/paintball/" className={active('paintball')}>Paintball</a>
          <a href="/gel-blaster/" className={active('gel-blaster')}>Gel-Blaster</a>
          <a href="/nerf-battles/" className={active('nerf-battles')}>Nerf</a>
        </nav>
        <a href="/" className="logo">
          <img src="/assets/images/logo-aas.webp" alt="Advanced Action Sports" width="180" height="180" />
        </a>
        <nav className="nav-right" aria-label="Visitor links">
          <a href="/milsim/" className={active('milsim')}>Milsim</a>
          <a href="/tickets/" className={active('tickets')}>Tickets</a>
          <div className="nav-dropdown">
            <button type="button" className="nav-dropdown-toggle" aria-expanded="false" aria-haspopup="true">Visit</button>
            <div className="nav-dropdown-menu">
              <a href="/memberships/" className={active('memberships')}>Memberships</a>
              <a href="https://advancedactionsports.square.site/s/appointments" target="_blank" rel="noreferrer noopener">Book a Party</a>
              <a href="https://waivermaster.com/sign.html?q=MQH6WTTY" target="_blank" rel="noreferrer noopener">Sign Waiver</a>
              <a href="/partners/" className={active('partners')}>Partners &amp; Supporters</a>
            </div>
          </div>
          <a href="https://advancedactionsports.square.site/" target="_blank" rel="noreferrer noopener" className="nav-shop">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" /></svg>Shop
          </a>
        </nav>
        <button className="menu-toggle" aria-label="Open menu" aria-controls="drawer" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
