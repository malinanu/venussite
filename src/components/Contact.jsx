import { img } from '../data.js';

const roles = ['Artists', 'Venues', 'Sponsors', 'Broadcasters', 'Co-producers'];

export default function Contact() {
  return (
    <section id="contact" className="section section--clip section--rule contact">
      <img className="mandala" src={img('mandala.svg')} alt="" aria-hidden="true" style={{ left: -500, bottom: -380, width: 1000, height: 1000, opacity: 0.12 }} />
      <div className="wrap contact__inner">
        <div className="contact__text">
          <p className="eyebrow">Work with us</p>
          <h2 className="h2">Let’s make the next one together.</h2>
          <p style={{ color: '#D8CFBF' }}>We welcome enquiries from artists, venues, sponsors, broadcasters and co-producers.</p>
          <ul className="chips">
            {roles.map((r) => <li key={r}>{r}</li>)}
          </ul>
          <dl className="contact__details">
            <div><dt>Address</dt><dd>[Street address, Suburb VIC postcode]</dd></div>
            <div><dt>Email</dt><dd><a href="mailto:hello@venusproductions.com.au">[hello@venusproductions.com.au]</a></dd></div>
            <div><dt>Telephone</dt><dd>[+61 4XX XXX XXX]</dd></div>
          </dl>
        </div>
        <form className="contact__form bronze" onSubmit={(e) => e.preventDefault()}>
          <label>Your name<input type="text" name="name" autoComplete="name" /></label>
          <label>Email<input type="email" name="email" autoComplete="email" /></label>
          <label>I am a…
            <select name="role">
              <option>Artist</option><option>Venue</option><option>Sponsor</option>
              <option>Broadcaster</option><option>Co-producer</option><option>Other</option>
            </select>
          </label>
          <label>Organisation (optional)<input type="text" name="organisation" autoComplete="organization" /></label>
          <label className="full">Message<textarea name="message" rows={5} /></label>
          <button type="submit" className="btn btn--dark full" style={{ justifySelf: 'start' }}>Send enquiry</button>
        </form>
      </div>
    </section>
  );
}
