export default function RegistrationBanner() {
  return (
    <div className="bg-primary text-white relative z-50 w-full top-0">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 px-6 py-3 text-sm sm:px-8 sm:py-3.5">
        <p className="text-base font-medium">
          Registration is now open for IEEE AI Dev Hack 2025!
        </p>
        <a
          href="https://ieee-ai-dev-hack-2025.devpost.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm ring-1 ring-inset ring-white/20 hover:bg-gray-100 transition"
        >
          Register on Devpost →
        </a>
      </div>
    </div>
  )
}
