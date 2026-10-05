const paths = {
  sun: <><circle cx="12" cy="12" r="3.5"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"/></>,
  moon: <path d="M20 15.2A8.5 8.5 0 0 1 8.8 4a8.5 8.5 0 1 0 11.2 11.2Z" />,
  github: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.37 6.8-1.62 6.8-7.4A5.8 5.8 0 0 0 19.25 3c.15-.4.65-1.9-.15-4 0 0-1.25-.4-4.1 1.55A14 14 0 0 0 7.5.55C4.65-1.4 3.4-1 3.4-1c-.8 2.1-.3 3.6-.15 4A5.8 5.8 0 0 0 1.7 7.1c0 5.78 3.5 7.03 6.8 7.4A4.8 4.8 0 0 0 7.5 18v4M7.5 19c-3 .92-3-1.5-4.2-2" />,
  linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><path d="M2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></>,
  mail: <><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m3 6 9 7 9-7"/></>,
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L9.1 10.9a16 16 0 0 0 4 4l1.27-1.24a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.9Z"/>,
  pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  send: <><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></>,
  code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/></>,
  cloud: <path d="M17.5 19H6a4 4 0 0 1-.5-7.97A7 7 0 0 1 19 9.5a4.75 4.75 0 0 1-1.5 9.5Z"/>,
  cpu: <><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></>,
  branch: <><circle cx="6" cy="5" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="19" r="2"/><path d="M6 7v10M8 13c6 0 8-2 8-5"/></>,
  up: <><path d="M12 19V5"/><path d="m7 10 5-5 5 5"/></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
  close: <path d="m6 6 12 12M18 6 6 18"/>,
}

export function Icon({ name, size = 16 }) {
  return (
    <svg className="line-icon" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}
