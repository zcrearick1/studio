
export function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="24px"
        height="24px"
        {...props}
      >
        <path
          fill="#FFC107"
          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
        />
        <path
          fill="#FF3D00"
          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
        />
        <path
          fill="#4CAF50"
          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.657-3.467-11.303-8H6.306C9.656,39.663,16.318,44,24,44z"
        />
        <path
          fill="#1976D2"
          d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C39.99,34.545,44,28.616,44,24C44,22.659,43.862,21.35,43.611,20.083z"
        />
      </svg>
    );
  }

export function TrebleClefIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 150" {...props}>
      <path
        d="M37.45,84.67l-3.41-17.8c2.57-2.6,4.97-5.18,7.08-7.58C60.41,36.94,41.73-3.17,37.03,0.2,C20.91,11.94,22.74,31.02,24.58,40.21l2.73,14.32,C15.46,66.49,1.2,81.14,0.09,98.18c-1.62,24.55,19.27,39.49,42.36,35.63l4.69,24.58 c2.45,19.09-19.49,21.23-22.35,11.02c12.15,3.78,17.96-11.02,8.37-16.94c-7.65-4.59-17.04,1.43-16.23,11.74,c2.04,24.7,39.19,18.27,34.5-6.64l-4.73-24.66C79.19,123.77,69.5,76,37.45,84.67z M41.83,36.84c-1.7,4.09-5.83,8.77-10.88,13.94,l-1.56-8.14c-0.18-1.03-0.39-2.12-0.62-3.24C22.85,8.47,56.02,4.49,41.83,36.84z M8.86,103.18c1.6-11.3,11.72-22.31,21.54-32.44,l2.93,15.37c-20.56,8.65-14.83,34.65-0.29,36.77c1.43,0.2,2.14-1.33,0.61-2.14c-12.95-7.17-7.72-20.17,1.74-23.83l6.5,34.03,C19.9,134.11,7.05,117,8.86,103.18z M46.12,129.93l-6.51-33.94C59.89,93.58,61.74,124.26,46.12,129.93z"
        transform="translate(15, -3)"
        fill="currentColor"
      />
    </svg>
  );
}

export function BassClefIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
     <svg viewBox="0 0 50 70" width="50" height="50" {...props}>
        <path d="M15,5 C25,10 30,20 30,30 C30,45 20,55 10,50" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="38" cy="20" r="3" fill="currentColor" />
        <circle cx="38" cy="32" r="3" fill="currentColor" />
    </svg>
  );
}

export function AltoClefIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 200" width="25" height="50" {...props}>
      <path d="M 36.9,81.2 C 36.9,81.2 36.9,20.5 36.9,20.5 L 36.9,178.5 M 62.6,81.2 C 62.6,81.2 62.6,20.5 62.6,20.5 L 62.6,178.5 M 21.1,51.8 C 21.1,51.8 49.8,20.5 49.8,20.5 C 49.8,20.5 78.4,51.8 78.4,51.8 M 21.1,147.8 C 21.1,147.8 49.8,178.5 49.8,178.5 C 49.8,178.5 78.4,147.8 78.4,147.8" stroke="currentColor" strokeWidth="6" fill="none" />
    </svg>
  );
}


export function SharpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" width="18" height="40" {...props}>
        <path d="M 30 70 L 70 60 M 30 40 L 70 30 M 40 20 L 30 80 M 60 20 L 50 80" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function FlatIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 150" width="18" height="40" {...props}>
        <path d="M 35 10 L 35 120 M 35 60 C 35 90, 80 80, 80 50 C 80 20, 35 30, 35 60 Z" stroke="currentColor" strokeWidth="8" fill="none" />
    </svg>
  )
}

export function NaturalIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" width="18" height="40" {...props}>
      <path d="M 35 25 L 35 75 M 65 25 L 65 75 M 20 55 L 75 45 M 20 45 L 75 35" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function PercussionClefIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" width="25" height="50" {...props}>
        <path d="M 20 20 L 20 80 M 80 20 L 80 80 M 10 50 L 90 50" stroke="currentColor" strokeWidth="6" fill="none" />
    </svg>
  );
}
