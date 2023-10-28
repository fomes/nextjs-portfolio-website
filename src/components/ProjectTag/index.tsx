interface ProjectTagProps {
  name: string;
  isSelected: boolean;
  onClick: (name: string) => void;
}

export function ProjectTag({ name, onClick, isSelected }: ProjectTagProps) {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white transition-all duration-300";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
}
