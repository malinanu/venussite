export default function RedSoil() {
  return (
    <section id="red-soil" className="red-soil section--rule">
      <div className="wrap red-soil__inner">
        <div className="red-soil__text">
          <span className="pill-red"><span className="dot" style={{ background: '#E2704A' }} />Feature film · In production</span>
          <h2 className="red-soil__title">Red Soil</h2>
          <p style={{ fontSize: 19, color: '#D8CFBF' }}>[Short film description — the premise in two sentences, without giving the ending away.]</p>
          <dl className="facts facts--red">
            <div><dt>Director</dt><dd>Prasanna Withanage</dd></div>
            <div><dt>Producer</dt><dd>Rochelle Hettiarachchi</dd></div>
            <div><dt>Release</dt><dd>To be confirmed</dd></div>
          </dl>
        </div>
        <div className="red-soil__media">
          <a href="#red-soil" className="red-soil__teaser" aria-label="Play the Red Soil teaser">
            <span className="red-soil__note">[Teaser · YouTube embed]</span>
            <span className="play-badge" style={{ width: 84, height: 84, borderRadius: 999, background: '#F4EEE3' }}>
              <svg width="26" height="26" viewBox="0 0 14 14" aria-hidden="true"><path d="M3.5 1.5v11l9-5.5z" fill="#0B0908" /></svg>
            </span>
          </a>
          <div className="red-soil__bts">
            <div>[Behind the scenes 1]</div>
            <div>[Behind the scenes 2]</div>
            <div>[Behind the scenes 3]</div>
          </div>
        </div>
      </div>
    </section>
  );
}
