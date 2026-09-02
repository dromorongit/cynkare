import Image from 'next/image';

export default function DeveloperCredits() {
  return (
    <a
      href="https://www.dromornarh.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Developed by Dromor Narh for DhroneTech Solutions"
      className="group flex flex-col items-center justify-center pt-6 sm:pt-8 text-text/50 hover:text-accent transition-colors duration-300"
    >
      <Image
        src="/dhronetechlogo.jpg"
        alt="DhroneTech Solutions"
        width={80}
        height={32}
        sizes="(max-width: 375px) 64px, 80px"
        className="h-7 sm:h-8 w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300"
      />
      <span className="mt-2 text-[11px] sm:text-[12px] tracking-[0.18em] uppercase font-medium">
        Developed by Dromor Narh for DhroneTech Solutions
      </span>
    </a>
  );
}