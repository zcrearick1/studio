
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
    <svg viewBox="0 0 40 95" {...props}>
      <path
        d="M20.9,78.2c-2.4-2.8-5.8-4.4-9.3-4.4c-5.8-0.1-11.6,5.7-11.5,11.5c0.1,5.8,5.9,11.6,11.7,11.5 c5.8-0.1,11.6-5.9,11.5-11.7c-0.1-4-2.2-7.6-5.4-9.9V12.7c0-5.1-4.1-9.2-9.2-9.2S3.3,7.6,3.3,12.7v31.4"
        transform="translate(15, -5)"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
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
