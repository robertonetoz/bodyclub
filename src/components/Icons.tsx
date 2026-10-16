type IconProps = { className?: string };

export function InstagramIcon({ className = "size-5" }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "size-5" }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.55-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.24-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

export function YoutubeIcon({ className = "size-5" }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.27 5 12 5 12 5s-6.27 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.73 19 12 19 12 19s6.27 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
    </svg>
  );
}

export function FacebookIcon({ className = "size-5" }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.86.25-1.45 1.48-1.45h1.57V4.47A21 21 0 0 0 14.27 4.3c-2.26 0-3.8 1.38-3.8 3.9v2.3H8v3h2.47V21h3.03Z" />
    </svg>
  );
}

export function MailIcon({ className = "size-5" }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function AppleIcon({ className = "size-5" }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31a4.05 4.05 0 0 0-3.18-1.72c-1.35-.14-2.64.8-3.33.8-.69 0-1.74-.78-2.87-.76a4.25 4.25 0 0 0-3.59 2.18c-1.54 2.66-.39 6.6 1.1 8.76.73 1.06 1.6 2.24 2.74 2.2 1.1-.05 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.13a9.4 9.4 0 0 0 1.2-2.47 3.83 3.83 0 0 1-2.3-3.53ZM14.2 6.13c.6-.74 1.01-1.75.9-2.77-.87.04-1.94.59-2.56 1.32-.56.64-1.05 1.68-.92 2.67.97.08 1.97-.49 2.58-1.22Z" />
    </svg>
  );
}

export function PlayStoreIcon({ className = "size-5" }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M4.2 2.6c-.25.26-.4.67-.4 1.2v16.4c0 .53.15.94.41 1.2l.06.05L13.5 12.3v-.2L4.27 2.55l-.07.05Zm12.38 12.8-3.08-3.08v-.21l3.08-3.08.07.04 3.65 2.07c1.04.6 1.04 1.56 0 2.15l-3.65 2.07-.07.04Zm.07-.04L13.5 12.2l-9.3 9.3c.35.36.91.4 1.55.05l10.9-6.19M16.65 9.04 5.75 2.85c-.64-.36-1.2-.32-1.55.05l9.3 9.3 3.15-3.16Z" />
    </svg>
  );
}

export function StarIcon({ className = "size-4" }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className={className} fill="currentColor">
      <path d="M10 1.5l2.6 5.3 5.9.86-4.25 4.14 1 5.86L10 14.9l-5.25 2.76 1-5.86L1.5 7.66l5.9-.86L10 1.5Z" />
    </svg>
  );
}

export function ArrowIcon({ className = "size-4" }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}
