import pcbImage from '../images/pcb-image.png';

export default function PcbVisual() {
  return (
    <div className="w-full overflow-hidden rounded-[22px] border border-[#DDE9ED] bg-[#EDF7FA]">
      <img
        src={pcbImage}
        alt="Circuit Design and Development"
        className="block h-auto w-full object-contain"
        loading="eager"
      />
    </div>
  );
}
