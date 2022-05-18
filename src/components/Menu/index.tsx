
interface MenuProps {
  setQuality: (quality: number) => void;
  setIsOnMenu: (isOnMenu: boolean) => void;
}

export function Menu({ setQuality, setIsOnMenu }: MenuProps) {
  function handleQuality(n: number) {
    
    setQuality(n);
    setIsOnMenu(false);
  }

  return (
    <div className="w-full !min-h-screen h-full flex justify-center items-center px-2
      text-white flex-col bg-[#060819]">
      <h1 className="text-6xl font-bold mb-4">{'Select the quality'.toUpperCase()}</h1>
      <p className="text-xl mb-8 text-zinc-300">*If you are on a mobile device, I recommend going on low*</p>

      <button 
        onClick={() => handleQuality(0)}
        className='py-4 w-80 font-bold text-xl border-[3px] rounded-2xl mb-4
        hover:bg-[#3d1991] hover:border-transparent transition-all 
        ease-in-out duration-500 border-[#3d1991] focus:bg-[#3d1991]'
      >
        LOW
      </button>

      <button 
        onClick={() => handleQuality(1)}
        className='py-4 w-80 font-bold text-xl border-[3px] rounded-2xl mb-4
        hover:bg-[#3d1991] hover:border-transparent transition-all 
        ease-in-out duration-500 border-[#3d1991] focus:bg-[#3d1991]'
      >
        MEDIUM
      </button>

      <button 
        onClick={() => handleQuality(2)}
        className='py-4 w-80 font-bold text-xl border-[3px] rounded-2xl mb-4
        hover:bg-[#3d1991] hover:border-transparent transition-all 
        ease-in-out duration-500 border-[#3d1991] focus:bg-[#3d1991]'
      >
        HIGH
      </button>
    </div>
  );
}