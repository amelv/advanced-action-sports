export default function Drawer({ path = '/' }) {
  const pagePath = path.split('/').filter(Boolean)[0] || '';
  const active = (p) => (pagePath === p ? 'active' : undefined);

  return (
    <>
      <div className="drawer-overlay" id="drawer-overlay"></div>
      <div className="drawer" id="drawer" aria-hidden="true" inert>
        <button className="drawer-close" id="drawer-close" aria-label="Close menu">&#x2715;</button>
        <nav className="drawer-nav" aria-label="Mobile navigation">
          <a href="https://advancedactionsports.square.site/s/appointments" target="_blank" rel="noreferrer noopener" className="drawer-book">Book a Party</a>
          <div className="drawer-section">Activities</div>
          <a href="/airsoft/" className={active('airsoft')}>Airsoft</a>
          <a href="/paintball/" className={active('paintball')}>Paintball</a>
          <a href="/gel-blaster/" className={active('gel-blaster')}>Gel-Blaster</a>
          <a href="/nerf-battles/" className={active('nerf-battles')}>Nerf</a>
          <a href="/milsim/" className={active('milsim')}>Advanced Action Milsim</a>
          <a href="/tickets/" className={active('tickets')}>Tickets</a>
          <div className="drawer-section">Visit</div>
          <a href="/memberships/" className={active('memberships')}>Memberships</a>
          <a href="https://advancedactionsports.square.site/s/appointments" target="_blank" rel="noreferrer noopener">Book a Party</a>
          <a href="https://waivermaster.com/sign.html?q=MQH6WTTY" target="_blank" rel="noreferrer noopener">Sign Waiver</a>
          <a href="https://advancedactionsports.square.site/" target="_blank" rel="noreferrer noopener" className="drawer-shop">Shop</a>
        </nav>
      </div>
    </>
  );
}
