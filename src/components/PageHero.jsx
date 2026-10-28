export default function PageHero({ title, btnUrl, btnText, bgImg, bgAlt = '' }) {
  return (
    <section className="page-hero">
      {bgImg && (
        <div className="page-hero-bg">
          <img src={`/assets/images/${bgImg}`} alt={bgAlt} fetchPriority="high" />
        </div>
      )}
      <div className="page-hero-overlay"></div>
      <div className="container page-hero-inner">
        <h1>{title}</h1>
        <a href={btnUrl} className="btn btn-primary">{btnText}</a>
      </div>
    </section>
  );
}
