// Round light play button used over thumbnails; `youtube` renders the red rounded badge instead.
export default function PlayBadge({ size = 52, icon = 16, youtube = false }) {
  const style = youtube
    ? { width: size, height: Math.round(size * 0.715), borderRadius: Math.round(size / 5), background: '#C4302B' }
    : { width: size, height: size, borderRadius: 999, background: 'rgba(244,238,227,0.92)', boxShadow: size > 60 ? '0 10px 30px rgba(0,0,0,0.45)' : undefined };
  return (
    <span className="play-badge" style={style}>
      <svg width={icon} height={icon} viewBox="0 0 14 14" aria-hidden="true">
        <path d="M3.5 1.5v11l9-5.5z" fill={youtube ? '#FFFFFF' : '#0B0908'} />
      </svg>
    </span>
  );
}
