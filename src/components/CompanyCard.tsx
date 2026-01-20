export default function CompanyCard({ name, logo, sector, index }: any) {
  return (
    <div className="p-8 border border-gray-100 rounded-[2rem] flex flex-col items-center justify-center gap-4 hover:bg-purple-50/50 transition-colors group">
      <div className="h-12 flex items-center justify-center">
        {/* Removed 'grayscale', 'group-hover:grayscale-0', and 'opacity-40' */}
        <img src={logo} alt={name} className="max-h-full max-w-full object-contain transition-all" />
      </div>
      <span className="text-[8px] font-black text-gray-300 uppercase tracking-[0.3em] group-hover:text-purple-400">{sector}</span>
    </div>
  );
}