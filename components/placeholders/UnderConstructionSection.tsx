export default function UnderConstructionSection({ id, title }: { id: string; title: string }) {
  return (
    <section id={id} className="py-20 bg-white dark:bg-gray-900 w-full h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 text-xs font-medium mb-4 border border-yellow-100">
          <ConstructionIcon className="w-4 h-4 mr-2" />
          Under Construction
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
          {title}
        </h2>
        <p className="text-gray-500 dark:text-gray-300">Coming soon — stay tuned.</p>
      </div>
    </section>
  );
}

function ConstructionIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 2l7 12H5l7-12z" fill="#F59E0B" />
      <rect x="6" y="16" width="12" height="2" rx="1" fill="#111827" />
      <circle cx="9" cy="19" r="1" fill="#111827" />
      <circle cx="15" cy="19" r="1" fill="#111827" />
    </svg>
  );
}
