export interface ChipProps {
  children?: React.ReactNode;
}

export const Chip = ({ children }: ChipProps): React.ReactNode => {
  return (
    <span className="px-2 py-0.5 hover:scale-110 rounded-full shadow-md bg-linear-to-b from-[var(--background)] to-[var(--light-blue-transparent)]/20 text-xs text-[#7fb4ff] border border-[#3a4151] font-medium">
      {children}
    </span>
  );
};
