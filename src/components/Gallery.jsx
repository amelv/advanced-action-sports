export default function Gallery({ images = [] }) {
  if (!images.length) return null;
  const src = (file) => `/assets/images/${file}`;

  return (
    <div className="photo-gallery">
      <div className="gallery-main">
        <button className="gallery-arrow gallery-prev" aria-label="Previous">‹</button>
        <a href={src(images[0].src)}>
          <img src={src(images[0].src)} alt={images[0].alt} loading="lazy" />
        </a>
        <button className="gallery-arrow gallery-next" aria-label="Next">›</button>
      </div>
      <div className="gallery-thumbs">
        {images.map((img, i) => (
          <a key={img.src} href={src(img.src)} className={i === 0 ? 'active' : undefined}>
            <img src={src(img.src)} alt={img.alt} width="80" height="60" loading="lazy" />
          </a>
        ))}
      </div>
    </div>
  );
}
