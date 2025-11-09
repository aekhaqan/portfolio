export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center space-y-6">
        {/* Name / Tagline */}
        <div>
          <h3 className="text-xl font-semibold text-black dark:text-white">
            Atif Khan
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Data Analyst · Power BI · Automation & AI
          </p>
        </div>

        {/* Contact */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="mailto:atifmkhan10@gmail.com"
            className="text-sm text-neutral-700 dark:text-neutral-300 hover:underline underline-offset-4"
          >
            atifmkhan10@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/atifmkhan9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-200 dark:border-neutral-800"></div>

       
      </div>
    </footer>
  );
}
