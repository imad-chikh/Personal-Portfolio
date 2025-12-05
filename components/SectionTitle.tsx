export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      {subtitle && <p className="text-gray-500 mt-2">{subtitle}</p>}
    </div>
  );
}
