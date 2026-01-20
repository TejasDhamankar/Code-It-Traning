import { motion } from 'framer-motion';

export default function CollegeCard({ name, logo, type, index }: any) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="p-10 bg-white border border-gray-100 rounded-[3rem] shadow-sm flex flex-col items-center text-center transition-all hover:border-purple-200 hover:shadow-xl"
    >
      {/* Removed 'grayscale' and 'group-hover:grayscale-0' from the line below */}
      <div className="w-24 h-24 relative mb-8 flex items-center justify-center transition-all">
        <img src={logo} alt={name} className="max-w-full max-h-full object-contain" />
      </div>
      <p className="text-[9px] font-black text-purple-400 uppercase tracking-widest mb-2">{type}</p>
      <h3 className="text-lg font-black text-gray-900 uppercase leading-tight">{name}</h3>
    </motion.div>
  );
}