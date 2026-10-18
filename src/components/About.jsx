import { img } from '../data.js';

export default function About() {
  return (
    <section id="about" className="section section--clip section--rule">
      <img className="mandala" src={img('mandala.svg')} alt="" aria-hidden="true" style={{ right: -470, top: -150, width: 1060, height: 1060, opacity: 0.16 }} />
      <div className="wrap about">
        <div className="about__head">
          <p className="eyebrow">About us</p>
          <h2 className="h2">One company, telling stories across two countries.</h2>
          <img className="about__mark" src={img('foil-full.png')} alt="" />
        </div>
        <div className="about__body">
          <p>Venus Productions is a film, television and live entertainment company working across Sri Lanka and Australia. We develop and produce our own screen productions — feature films and teledramas — from script to screen.</p>
          <p>On stage, we organise concerts and stage dramas featuring celebrated Sri Lankan artists, bringing award-winning theatre and much-loved music to audiences overseas.</p>
          <p>Whether on screen or in a theatre, our work has one purpose: connecting Sri Lankan stories and talent with audiences at home and around the world.</p>
          <div className="btn-row">
            <a href="#productions" className="btn btn--gold">Discover our work</a>
            <a href="#contact" className="btn btn--outline">Work with us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
