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
    <svg viewBox="-25 -10 60 120" {...props}>
      <path
        d="M12.45,39.2c1.76-1.5,3.3-3.3,4.6-5.4c1.3-2.1,2.3-4.3,3-6.8c0.7-2.5,1-5.1,1-7.8c0-8.9-3.2-16.3-9.5-22.3 C5.83,1,0.22-1.2-5.75-0.95c-5.97,0.25-11.2,2.8-15.7,7.7c-4.5,4.9-6.7,11.2-6.7,18.8c0,8.4,2.8,15.2,8.3,20.4 c5.6,5.2,12.8,7.8,21.8,7.8c3.9,0,7.6-0.6,11-1.8s6.3-2.9,8.5-4.9c2.3-2,3.9-4.4,5-7.1c1.1-2.7,1.6-5.8,1.6-9.1 c0-6.7-1.4-12.4-4.1-17.1c-2.8-4.7-6.9-8.1-12.3-10.1c-5.4-2-11.3-3-17.8-3c-4.4,0-8.4,0.5-12.1,1.5c-3.7,1-6.8,2.5-9.4,4.5 l-3.4,2.7c-2.3,1.9-4,3.8-5,5.6l-1.8,3.3l-0.9,1.7l10.8-6.5c1.8-1.1,3.7-1.9,5.7-2.5c2-0.6,4.1-0.9,6.1-0.9 c4.8,0,8.8,1.2,12.1,3.6c3.3,2.4,5.4,5.7,6.4,9.9c1,4.2,1.5,8.8,1.5,13.9c0,3.7-0.4,7-1.1,9.8c-0.7,2.8-1.9,5.2-3.4,7.1 c-1.5,1.9-3.4,3.4-5.5,4.4c-2.1,1-4.6,1.5-7.3,1.5c-3.6,0-7-0.8-10.2-2.3c-3.2-1.5-5.8-3.6-7.8-6.2c-2-2.6-3-5.7-3-9.1 c0-3.2,0.5-6.2,1.4-8.8c0.9-2.6,2.5-4.7,4.7-6.2c2.2-1.5,4.9-2.3,8.1-2.3c3.7,0,7.1,0.9,10.2,2.8c3.1,1.9,5.6,4.6,7.5,8.2 l10.8-6.5c-2.3-4.5-5.4-8.1-9.4-10.8c-4,-2.7-8.7-4.1-14.1-4.1c-10.3,0-18.4,3.2-24.4,9.6c-6,6.4-9,15.1-9,26.1v1.7 c2.9-2.6,6.3-4.6,10.1-6c3.8-1.4,7.8-2,12-2c5,0,9.3,1.2,12.9,3.6c3.6,2.4,6.4,5.7,8.3,9.9c1.9,4.2,2.9,8.8,2.9,13.9v35.2"
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
