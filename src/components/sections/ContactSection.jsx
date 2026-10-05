import { profile } from '../../data/portfolioData'
import { Button } from '../ui/Button'
import './ContactSection.css'

export function ContactSection() {
  return (
    <section className="contact-banner" id="contact" aria-labelledby="contact-title">
      <p className="eyebrow">03 / What’s next?</p>
      <div className="contact-content"><div><h2 id="contact-title">Good things start<br/>with a conversation<span>.</span></h2><p>Have a project in mind or a role to share?<br/>I’d love to hear about it.</p></div><div className="contact-actions"><Button href={`mailto:${profile.email}`}>Let’s talk</Button><a href={`mailto:${profile.email}`}>{profile.email}</a></div></div>
    </section>
  )
}
