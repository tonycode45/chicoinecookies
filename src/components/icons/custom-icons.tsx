import { SVGProps } from "react"

export function CookieIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="8" cy="8" r="1.5" fill="currentColor" />
      <circle cx="15" cy="9" r="1.5" fill="currentColor" />
      <circle cx="10" cy="14" r="1.5" fill="currentColor" />
      <circle cx="16" cy="15" r="1.5" fill="currentColor" />
      <circle cx="12" cy="11" r="1" fill="currentColor" />
    </svg>
  )
}

export function FlameIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 2c-1.5 4.5-3 6-6 8.5-2 1.5-3 3.5-3 5.5 0 3.866 3.134 7 7 7 3.866 0 7-3.134 7-7 0-2-1-4-3-5.5-3-2.5-4.5-4-5-8.5z" />
      <path d="M12 7c-0.5 2.5-1.5 3.5-3 5-1 1-1.5 2-1.5 3 0 2.485 2.015 4.5 4.5 4.5s4.5-2.015 4.5-4.5c0-1-0.5-2-1.5-3-1.5-1.5-2.5-2.5-3-5z" fill="#FFB347" />
    </svg>
  )
}

export function OvenIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <circle cx="7" cy="6.5" r="0.5" fill="currentColor" />
      <circle cx="10" cy="6.5" r="0.5" fill="currentColor" />
      <circle cx="13" cy="6.5" r="0.5" fill="currentColor" />
      <rect x="6" y="12" width="12" height="6" rx="1" />
    </svg>
  )
}

export function WhiskIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 3l5 5" />
      <path d="M5 3l3 5" />
      <path d="M7 3l1 5" />
      <path d="M8 8l13 13" />
      <circle cx="18" cy="18" r="3" />
    </svg>
  )
}

export function BoxIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  )
}

export function HeartCookieIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      <circle cx="8" cy="9" r="1" fill="white" opacity="0.7" />
      <circle cx="12" cy="10" r="0.8" fill="white" opacity="0.7" />
      <circle cx="15" cy="11" r="1" fill="white" opacity="0.7" />
    </svg>
  )
}
