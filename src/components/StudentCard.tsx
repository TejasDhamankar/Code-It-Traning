export default function StudentCard({ name, company, lpa, role, img, index }: any) {
  return (
    <div className="group relative bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-sm transition-all hover:bg-white/10 max-w-sm mx-auto">
      {/* 1. Changed aspect ratio from 4/5 to 1/1 (Square) or 4/3 to make it shorter */}
      <div className="aspect-square relative bg-gray-800">
        <img 
          src={img} 
          alt={name} 
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        
        {/* 2. Reduced positioning and font sizes for the overlay */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-[8px] font-black uppercase tracking-widest mb-2 inline-block">
            Placed {lpa}
          </div>
          <h4 className="text-2xl font-black text-white uppercase tracking-tighter leading-none">{name}</h4>
        </div>
      </div>

      {/* 3. Reduced padding from p-10 to p-6 */}
      <div className="p-6 space-y-3">
        <div className="flex justify-between items-center text-white/50">
          <span className="text-[9px] font-black uppercase tracking-widest">Hired By</span>
          <span className="text-xs font-bold text-white italic">{company}</span>
        </div>
        <div className="flex justify-between items-center text-white/50">
          <span className="text-[9px] font-black uppercase tracking-widest">Role</span>
          <span className="text-xs font-bold text-white">{role}</span>
        </div>
      </div>
    </div>
  );
}