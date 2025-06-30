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
    <svg viewBox="0 0 45 80" width="50" height="100" {...props}>
      <path
        d="M23.6,56.54 C23.6,56.54 21.72,52.92 20,50.04 C18.28,47.16 16.32,44.52 16.32,40.92 C16.32,37.32 18.28,34.78 20.32,33.24 C22.36,31.7 25.48,31.14 28.28,32.04 C31.08,32.94 33.32,35.4 33.32,38.52 C33.32,41.64 31.18,44.34 28.92,46.02 C26.66,47.7 22.36,49.98 22.36,53.82 C22.36,57.66 25.6,59.22 28.16,59.22 C30.72,59.22 33.32,57.66 33.32,53.82 C33.32,49.98 28.64,46.62 28.64,38.52 C28.64,30.42 36.8,27.72 36.8,20.22 C36.8,12.72 29.56,7.86 22.36,7.86 C15.16,7.86 6.8,12.72 6.8,20.22 C6.8,27.72 18.2,31.86 18.2,40.92 C18.2,47.94 7.28,50.7 7.28,59.94 C7.28,69.18 15.32,77.34 25.16,77.34 C35,77.34 40.88,70.86 40.88,64.38"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
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
