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
    <svg viewBox="0 0 28 60" width="50" height="100" {...props}>
      <path
        d="M12.449,38.223 C12.449,38.223 11.232,35.945 10.045,34.027C8.859,32.11 7.545,30.316 7.545,27.811C7.545,25.305 8.945,23.533 10.424,22.385 C11.902,21.237 13.902,20.803 15.68,21.438C17.458,22.072 18.729,23.512 18.729,25.438C18.729,27.365 17.514,29.117 16.125,30.223 C14.736,31.328 12.449,32.658 12.449,34.936C12.449,37.213 13.977,38.223 15.623,38.223C17.268,38.223 18.729,37.213 18.729,34.936 C18.729,32.658 15.938,30.582 15.938,25.438C15.938,20.293 20.916,18.729 20.916,13.844C20.916,8.959 16.533,5.906 12.449,5.906 C8.365,5.906 3.732,8.959 3.732,13.844C3.732,18.729 9.123,21.289 9.123,27.811C9.123,34.332 3.844,36.529 3.844,42.928 C3.844,49.328 8.875,54.094 14.502,54.094C20.129,54.094 24.314,50.182 24.314,45.338"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function BassClefIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
     <svg viewBox="0 0 200 200" width="50" height="50" {...props}>
      <path d="M 82.5,123.3 C 82.5,123.3 97.4,111.1 114.5,111.1 C 131.6,111.1 142.2,122.3 142.2,137.4 C 142.2,152.5 130.6,164.7 114.5,164.7 C 98.4,164.7 82.5,152.5 82.5,137.4 C 82.5,122.3 97.4,111.1 114.5,111.1 C 131.6,111.1 142.2,122.3 142.2,137.4 C 142.2,152.5 130.6,164.7 114.5,164.7 L 114.5,35.0" stroke="currentColor" strokeWidth="6" fill="none" />
      <path d="M 152.8,111.1 C 152.8,111.1 156.2,109.4 158.8,111.1 C 161.4,112.8 159.7,116.2 157.9,117.9 C 156.2,119.6 152.8,119.6 151.1,117.9 C 149.4,116.2 149.4,112.8 151.1,111.1 C 152.8,109.4 155.3,109.4 156.2,110.3" stroke="none" fill="currentColor" />
      <path d="M 152.8,91.9 C 152.8,91.9 156.2,90.2 158.8,91.9 C 161.4,93.6 159.7,97.0 157.9,98.7 C 156.2,100.4 152.8,100.4 151.1,98.7 C 149.4,97.0 149.4,93.6 151.1,91.9 C 152.8,90.2 155.3,90.2 156.2,91.1" stroke="none" fill="currentColor" />
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
