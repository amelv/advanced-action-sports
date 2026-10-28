import Weather from '../Weather.jsx';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-slideshow">
          <img src="/assets/images/airsoft-player-barricade-aiming.avif" alt="Airsoft player with tactical helmet aiming over a barricade at an opponent" className="active" fetchPriority="high" />
          <img src="/assets/images/airsoft-team-barricade-advance.avif" alt="Airsoft team behind a wall barricade prepping to advance" loading="lazy" />
          <img src="/assets/images/paintball-splatter-action.avif" alt="Bright colorful paintball action with paint splattering around a barricade" loading="lazy" />
          <img src="/assets/images/airsoft-arena-drone-overview.avif" alt="Drone aerial overview of an active airsoft match showing the full arena layout" loading="lazy" />
          <img src="/assets/images/paintball-player-running.avif" alt="Young paintball player running across the field in dynamic action shot" loading="lazy" />
        </div>
        <div className="hero-overlay"></div>
        <div className="container hero-inner">
          <h1>Leading Edge Gear and <span className="accent">Thrilling Experiences</span></h1>
          <p>Our industry-leading facilities in New England offer Virtual Reality gaming, Airsoft, Paintball, Retail, Parties and Outings. Become a member and save!</p>
          <div className="hero-ctas">
            <a href="https://advancedactionsports.square.site/s/appointments" className="btn btn-primary">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><polygon points="12 13 13.5 16 16.5 16.5 14.25 18.75 15 22 12 20.5 9 22 9.75 18.75 7.5 16.5 10.5 16" /></svg>Book a Party
            </a>
            <a href="/memberships/" className="btn btn-secondary">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" /></svg>Join the Fight Club
            </a>
            <a href="/tickets/" className="btn btn-secondary">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12a2 2 0 0 0 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 0 0-4V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 0-2 2Z" /><path d="M13 5v2M13 11v2M13 17v2" /></svg>Tickets
            </a>
            <a href="https://waivermaster.com/sign.html?q=MQH6WTTY" className="btn btn-secondary">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>Sign Our Waiver
            </a>
          </div>
        </div>
      </section>

      <section className="activities">
        <div className="container">
          <h2>Airsoft, paintball, VR and more</h2>
          <div className="activity-grid">
            <a href="/airsoft/" className="activity-card">
              <img src="/assets/images/airsoft-card.avif" alt="Airsoft" loading="lazy" />
              <div className="card-label"><span>Airsoft</span></div>
            </a>
            <a href="/paintball/" className="activity-card">
              <img src="/assets/images/paintball-card.avif" alt="Paintball" loading="lazy" />
              <div className="card-label"><span>Paintball</span></div>
            </a>
            <a href="/gel-blaster/" className="activity-card">
              <img src="/assets/images/gel-blaster-player-aiming.avif" alt="Gel Ball" loading="lazy" />
              <div className="card-label"><span>Gel Ball</span></div>
            </a>
            <a href="/nerf-battles/" className="activity-card">
              <img src="/assets/images/nerf-card.avif" alt="Nerf Battles" loading="lazy" />
              <div className="card-label"><span>Nerf Battles</span></div>
            </a>
            <a href="/virtual-reality/" className="activity-card">
              <img src="/assets/images/vr-card.avif" alt="Virtual Reality" loading="lazy" />
              <div className="card-label"><span>VR — Coming Soon</span></div>
            </a>
          </div>
        </div>
      </section>

      <section className="locations">
        <div className="container">
          <h2>Our Locations</h2>
          <div className="locations-grid">
            <div className="location-card location-card--webster">
              <span className="location-badge">Walk-in play</span>
              <h3>Webster, MA</h3>
              <p className="location-description">Our home for weekly walk-in airsoft and paintball, parties, retail, and indoor VR.</p>
              <p className="hours-label">Walk-in hours</p>
              <ul>
                <li><em>April 1 through the Wednesday before Thanksgiving</em></li>
                <li>Wednesday: 4 PM - 9 PM</li>
                <li>Saturday: 11 AM - 4 PM</li>
                <li>Sunday: 11 AM - 4 PM</li>
              </ul>
              <div className="address">
                109 Worcester Road, Webster, MA<br />
                Phone: 508-731-6300
              </div>
              <aside className="location-aside" aria-label="Webster weather and map">
                <Weather lat="42.0496" lon="-71.8803" />
                <div className="location-map">
                  <div className="location-map-frame">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2957!2d-71.8803!3d42.0496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s109%20Worcester%20Road%2C%20Webster%2C%20MA%2001570!5e0!3m2!1sen!2sus!4v1700000000000"
                      title="Map of Advanced Action Sports in Webster, MA"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <a className="location-map-link" href="https://www.google.com/maps/search/?api=1&query=109%20Worcester%20Road%2C%20Webster%2C%20MA%2001570" target="_blank" rel="noreferrer noopener">Open in Google Maps</a>
                </div>
              </aside>
              <div className="location-actions">
                <a className="btn btn-primary" href="https://advancedactionsports.square.site/shop/admission-for-webster-ma/9">Webster Tickets</a>
                <a className="btn btn-secondary" href="/airsoft/">Webster Airsoft</a>
              </div>
            </div>

            <div className="location-card location-card--granville">
              <span className="location-badge">Special events</span>
              <h3>Granville, MA</h3>
              <p className="location-description">A premium 400-acre destination built for easy navigation, immersive scenarios, and multi-day play at the biggest field in New England.</p>
              <p className="hours-label">Hours</p>
              <ul>
                <li>Special Events Only</li>
              </ul>
              <div className="address">
                553 West Hartland Rd, Granville, MA<br />
                Phone: 508-731-6300
              </div>
              <aside className="location-aside" aria-label="Granville weather and map">
                <Weather lat="42.0668" lon="-72.8626" />
                <div className="location-map">
                  <div className="location-map-frame">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12000!2d-72.8626!3d42.0668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s553%20West%20Hartland%20Road%2C%20Granville%2C%20MA%2001034!5e0!3m2!1sen!2sus!4v1700000000000"
                      title="Map of Advanced Action Sports in Granville, MA"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <a className="location-map-link" href="https://www.google.com/maps/search/?api=1&query=553%20West%20Hartland%20Road%2C%20Granville%2C%20MA%2001034" target="_blank" rel="noreferrer noopener">Open in Google Maps</a>
                </div>
              </aside>
              <div className="location-actions">
                <a className="btn btn-primary" href="https://advancedactionsports.square.site/shop/admissions-for-granville-ma/23">Granville Tickets</a>
                <a className="btn btn-secondary" href="/milsim/">Explore Granville</a>
              </div>
            </div>
          </div>
          <p className="locations-reviews"><a href="https://share.google/q4IDuravs8KJHpRfX" target="_blank" rel="noreferrer noopener">Read our Google reviews</a></p>
        </div>
      </section>

      <section className="featured-video">
        <div className="container featured-video-inner">
          <a className="video-thumbnail" href="https://www.youtube.com/watch?v=-lGMwWLTdgw" target="_blank" rel="noreferrer noopener" aria-label="Watch Flying into Advanced Action Sports - Webster on YouTube">
            <img src="/assets/images/airsoft-arena-drone-overview.avif" alt="Aerial view of the Advanced Action Sports Webster field" loading="lazy" />
            <span className="video-play" aria-hidden="true">▶</span>
          </a>
          <div>
            <h2>See Webster From Above</h2>
            <p>Fly over the Webster field and get a look at the terrain, structures, and play area before your next visit.</p>
            <a className="btn btn-primary" href="https://www.youtube.com/watch?v=-lGMwWLTdgw">Watch the Video</a>
            <a className="btn btn-secondary" href="https://www.youtube.com/@advancedactionsports6153/videos">More on YouTube</a>
          </div>
        </div>
      </section>

      <section className="social-preview">
        <div className="container social-preview-inner">
          <iframe className="facebook-preview" title="Recent posts from Advanced Action Sports on Facebook" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fadvancedactionsports%2F&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false" width="500" height="500" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" loading="lazy"></iframe>
          <div>
            <h2>Follow the Action</h2>
            <p>See recent field updates, event announcements, photos, and videos from Advanced Action Sports.</p>
            <div className="social-preview-actions">
              <a className="btn btn-primary" href="https://www.facebook.com/advancedactionsports/">Follow on Facebook</a>
              <a className="btn btn-secondary" href="https://www.instagram.com/advancedactionsports/">Follow on Instagram</a>
            </div>
          </div>
        </div>
      </section>

      <section className="email-section">
        <div className="container">
          <a href="mailto:contact@advancedactionsports.com?subject=Information Request" className="btn btn-primary">EMAIL US</a>
        </div>
      </section>
    </>
  );
}
