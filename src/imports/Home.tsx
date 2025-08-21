import svgPaths from "./svg-at6tr2e9rq";
import imgDepth4Frame1 from "figma:asset/e16cfc13bdb04fd4b469a0b16aa95b864f4618c6.png";
import imgDepth4Frame2 from "figma:asset/afe10d0099501cf4d33b3f83822aff517e815e5f.png";

function Depth3Frame0() {
  return (
    <div className="basis-0 grow h-[23px] min-h-px min-w-px relative shrink-0" data-name="Depth 3, Frame 0">
      <div className="flex flex-col items-center relative size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[23px] items-center justify-start pl-12 pr-0 py-0 relative w-full">
          <div className="css-bmp2lc font-['Manrope:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#1c140d] text-[18px] text-center w-full">
            <p className="leading-[23px]">Painel de Controle</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Depth6Frame0() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Depth 6, Frame 0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border overflow-clip relative size-full">
        <div className="absolute left-0 size-6 top-0" data-name="Vector - 0">
          <div className="absolute inset-[9.12%_9.11%_9.11%_9.12%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path clipRule="evenodd" d={svgPaths.pd5800} fill="var(--fill-0, #1C140D)" fillRule="evenodd" id="Vector - 0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Depth5Frame0() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Depth 5, Frame 0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-center justify-start relative w-full">
        <Depth6Frame0 />
      </div>
    </div>
  );
}

function Depth4Frame0() {
  return (
    <div className="h-12 max-w-[480px] relative rounded-lg shrink-0" data-name="Depth 4, Frame 0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-2 h-12 items-center justify-center max-w-inherit overflow-clip relative">
        <Depth5Frame0 />
      </div>
    </div>
  );
}

function Depth3Frame1() {
  return (
    <div className="relative shrink-0 w-12" data-name="Depth 3, Frame 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-end relative w-12">
        <Depth4Frame0 />
      </div>
    </div>
  );
}

function Depth2Frame0() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Depth 2, Frame 0">
      <div className="flex flex-row items-center relative size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-between pb-2 pt-4 px-4 relative w-full">
          <Depth3Frame0 />
          <Depth3Frame1 />
        </div>
      </div>
    </div>
  );
}

function Depth5Frame2() {
  return (
    <div className="h-5 relative shrink-0 w-full" data-name="Depth 5, Frame 0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-5 items-start justify-start relative w-full">
        <div className="css-bmp2lc font-['Manrope:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#1c140d] text-[16px] w-full">
          <p className="leading-[20px]">Receber Amostra</p>
        </div>
      </div>
    </div>
  );
}

function Depth5Frame1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Depth 5, Frame 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-start relative w-full">
        <div className="css-6bvmrk font-['Manrope:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#94734f] text-[14px] w-full">
          <p className="leading-[21px]">Adicionar novas amostras ao seu inventário.</p>
        </div>
      </div>
    </div>
  );
}

function Depth4Frame2() {
  return (
    <div className="relative shrink-0 w-[207px]" data-name="Depth 4, Frame 0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-1 items-start justify-start relative w-[207px]">
        <Depth5Frame2 />
        <Depth5Frame1 />
      </div>
    </div>
  );
}

function Depth4Frame1() {
  return (
    <div className="basis-0 bg-center bg-cover bg-no-repeat grow h-[66px] min-h-px min-w-px relative rounded-lg shrink-0" data-name="Depth 4, Frame 1" style={{ backgroundImage: `url('${imgDepth4Frame1}')` }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[66px] w-full" />
    </div>
  );
}

function Depth3Frame3() {
  return (
    <div className="bg-[#ffffff] relative rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Depth 3, Frame 0">
      <div className="overflow-clip relative size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start justify-between p-[16px] relative w-full">
          <Depth4Frame2 />
          <Depth4Frame1 />
        </div>
      </div>
    </div>
  );
}

function Depth2Frame1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Depth 2, Frame 1">
      <div className="relative size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-start p-[16px] relative w-full">
          <Depth3Frame3 />
        </div>
      </div>
    </div>
  );
}

function Depth5Frame3() {
  return (
    <div className="h-5 relative shrink-0 w-full" data-name="Depth 5, Frame 0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-5 items-start justify-start relative w-full">
        <div className="css-bmp2lc font-['Manrope:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#1c140d] text-[16px] w-full">
          <p className="leading-[20px]">Entregar Amostra</p>
        </div>
      </div>
    </div>
  );
}

function Depth5Frame4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Depth 5, Frame 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-start relative w-full">
        <div className="css-6bvmrk font-['Manrope:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#94734f] text-[14px] w-[199px]">
          <p className="leading-[21px]">Registrar a entrega de amostras aos pacientes.</p>
        </div>
      </div>
    </div>
  );
}

function Depth4Frame3() {
  return (
    <div className="relative shrink-0 w-[207px]" data-name="Depth 4, Frame 0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-1 items-start justify-start relative w-[207px]">
        <Depth5Frame3 />
        <Depth5Frame4 />
      </div>
    </div>
  );
}

function Depth4Frame4() {
  return (
    <div className="basis-0 bg-center bg-cover bg-no-repeat grow h-[66px] min-h-px min-w-px relative rounded-lg shrink-0" data-name="Depth 4, Frame 1" style={{ backgroundImage: `url('${imgDepth4Frame2}')` }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[66px] w-full" />
    </div>
  );
}

function Depth3Frame4() {
  return (
    <div className="bg-[#ffffff] relative rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Depth 3, Frame 0">
      <div className="overflow-clip relative size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start justify-between p-[16px] relative w-full">
          <Depth4Frame3 />
          <Depth4Frame4 />
        </div>
      </div>
    </div>
  );
}

function Depth2Frame2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Depth 2, Frame 2">
      <div className="relative size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-start p-[16px] relative w-full">
          <Depth3Frame4 />
        </div>
      </div>
    </div>
  );
}

function Depth2Frame3() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Depth 2, Frame 3">
      <div className="relative size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[60px] items-start justify-start pb-3 pt-5 px-4 relative w-full">
          <div className="css-bmp2lc font-['Manrope:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#1c140d] text-[22px] w-full">
            <p className="leading-[28px]">Próximos Lembretes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Depth4Frame5() {
  return (
    <div className="relative shrink-0 size-6" data-name="Depth 4, Frame 0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_2118)" id="Depth 4, Frame 0">
          <path clipRule="evenodd" d={svgPaths.p25254100} fill="var(--fill-0, #1C140D)" fillRule="evenodd" id="Vector - 0" />
          <g id="Depth 5, Frame 0"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_2118">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Depth3Frame5() {
  return (
    <div className="bg-[#f2ede8] relative rounded-lg shrink-0 size-12" data-name="Depth 3, Frame 0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-12">
        <Depth4Frame5 />
      </div>
    </div>
  );
}

function Depth4Frame6() {
  return (
    <div className="relative shrink-0" data-name="Depth 4, Frame 0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-start overflow-clip relative">
        <div className="css-bmp2lc font-['Manrope:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#1c140d] text-[16px] text-nowrap w-full">
          <p className="leading-[24px] whitespace-pre">Amostra de creme para eczema</p>
        </div>
      </div>
    </div>
  );
}

function Depth4Frame7() {
  return (
    <div className="relative shrink-0 w-[234px]" data-name="Depth 4, Frame 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-start overflow-clip relative w-[234px]">
        <div className="css-6bvmrk font-['Manrope:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#94734f] text-[14px] w-full">
          <p className="leading-[21px]">20 de julho</p>
        </div>
      </div>
    </div>
  );
}

function Depth3Frame6() {
  return (
    <div className="relative shrink-0" data-name="Depth 3, Frame 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-center relative">
        <Depth4Frame6 />
        <Depth4Frame7 />
      </div>
    </div>
  );
}

function Depth2Frame4() {
  return (
    <div className="bg-[#ffffff] h-[72px] min-h-[72px] relative shrink-0 w-full" data-name="Depth 2, Frame 4">
      <div className="flex flex-row items-center min-h-inherit relative size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-4 h-[72px] items-center justify-start min-h-inherit px-4 py-2 relative w-full">
          <Depth3Frame5 />
          <Depth3Frame6 />
        </div>
      </div>
    </div>
  );
}

function Depth4Frame8() {
  return (
    <div className="relative shrink-0 size-6" data-name="Depth 4, Frame 0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_2118)" id="Depth 4, Frame 0">
          <path clipRule="evenodd" d={svgPaths.p25254100} fill="var(--fill-0, #1C140D)" fillRule="evenodd" id="Vector - 0" />
          <g id="Depth 5, Frame 0"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_2118">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Depth3Frame7() {
  return (
    <div className="bg-[#f2ede8] relative rounded-lg shrink-0 size-12" data-name="Depth 3, Frame 0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-12">
        <Depth4Frame8 />
      </div>
    </div>
  );
}

function Depth4Frame9() {
  return (
    <div className="relative shrink-0" data-name="Depth 4, Frame 0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-start overflow-clip relative">
        <div className="css-bmp2lc font-['Manrope:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#1c140d] text-[16px] text-nowrap w-full">
          <p className="leading-[24px] whitespace-pre">Amostra de loção para pele seca</p>
        </div>
      </div>
    </div>
  );
}

function Depth4Frame10() {
  return (
    <div className="relative shrink-0 w-[241px]" data-name="Depth 4, Frame 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-start overflow-clip relative w-[241px]">
        <div className="css-6bvmrk font-['Manrope:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#94734f] text-[14px] w-full">
          <p className="leading-[21px]">25 de julho</p>
        </div>
      </div>
    </div>
  );
}

function Depth3Frame8() {
  return (
    <div className="relative shrink-0" data-name="Depth 3, Frame 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-center relative">
        <Depth4Frame9 />
        <Depth4Frame10 />
      </div>
    </div>
  );
}

function Depth2Frame5() {
  return (
    <div className="bg-[#ffffff] h-[72px] min-h-[72px] relative shrink-0 w-full" data-name="Depth 2, Frame 5">
      <div className="flex flex-row items-center min-h-inherit relative size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-4 h-[72px] items-center justify-start min-h-inherit px-4 py-2 relative w-full">
          <Depth3Frame7 />
          <Depth3Frame8 />
        </div>
      </div>
    </div>
  );
}

function Depth2Frame6() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Depth 2, Frame 6">
      <div className="relative size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[60px] items-start justify-start pb-3 pt-5 px-4 relative w-full">
          <div className="css-bmp2lc font-['Manrope:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#1c140d] text-[22px] w-full">
            <p className="leading-[28px]">Vencimentos Próximos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Depth4Frame11() {
  return (
    <div className="relative shrink-0 size-6" data-name="Depth 4, Frame 0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_2118)" id="Depth 4, Frame 0">
          <path clipRule="evenodd" d={svgPaths.p25254100} fill="var(--fill-0, #1C140D)" fillRule="evenodd" id="Vector - 0" />
          <g id="Depth 5, Frame 0"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_2118">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Depth3Frame9() {
  return (
    <div className="bg-[#f2ede8] relative rounded-lg shrink-0 size-12" data-name="Depth 3, Frame 0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-12">
        <Depth4Frame11 />
      </div>
    </div>
  );
}

function Depth4Frame12() {
  return (
    <div className="relative shrink-0" data-name="Depth 4, Frame 0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-start overflow-clip relative">
        <div className="css-bmp2lc font-['Manrope:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#1c140d] text-[16px] text-nowrap w-full">
          <p className="leading-[24px] whitespace-pre">Amostra de protetor solar</p>
        </div>
      </div>
    </div>
  );
}

function Depth4Frame13() {
  return (
    <div className="relative shrink-0 w-48" data-name="Depth 4, Frame 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-start overflow-clip relative w-48">
        <div className="css-6bvmrk font-['Manrope:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#94734f] text-[14px] w-full">
          <p className="leading-[21px]">15 de agosto</p>
        </div>
      </div>
    </div>
  );
}

function Depth3Frame10() {
  return (
    <div className="relative shrink-0" data-name="Depth 3, Frame 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-center relative">
        <Depth4Frame12 />
        <Depth4Frame13 />
      </div>
    </div>
  );
}

function Depth2Frame7() {
  return (
    <div className="bg-[#ffffff] h-[72px] min-h-[72px] relative shrink-0 w-full" data-name="Depth 2, Frame 7">
      <div className="flex flex-row items-center min-h-inherit relative size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-4 h-[72px] items-center justify-start min-h-inherit px-4 py-2 relative w-full">
          <Depth3Frame9 />
          <Depth3Frame10 />
        </div>
      </div>
    </div>
  );
}

function Depth4Frame14() {
  return (
    <div className="relative shrink-0 size-6" data-name="Depth 4, Frame 0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_2118)" id="Depth 4, Frame 0">
          <path clipRule="evenodd" d={svgPaths.p25254100} fill="var(--fill-0, #1C140D)" fillRule="evenodd" id="Vector - 0" />
          <g id="Depth 5, Frame 0"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_2118">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Depth3Frame11() {
  return (
    <div className="bg-[#f2ede8] relative rounded-lg shrink-0 size-12" data-name="Depth 3, Frame 0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-12">
        <Depth4Frame14 />
      </div>
    </div>
  );
}

function Depth4Frame15() {
  return (
    <div className="relative shrink-0" data-name="Depth 4, Frame 0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-start overflow-clip relative">
        <div className="css-bmp2lc font-['Manrope:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#1c140d] text-[16px] text-nowrap w-full">
          <p className="leading-[24px] whitespace-pre">Amostra de tratamento para acne</p>
        </div>
      </div>
    </div>
  );
}

function Depth4Frame16() {
  return (
    <div className="relative shrink-0 w-[251px]" data-name="Depth 4, Frame 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-start overflow-clip relative w-[251px]">
        <div className="css-6bvmrk font-['Manrope:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#94734f] text-[14px] w-full">
          <p className="leading-[21px]">20 de agosto</p>
        </div>
      </div>
    </div>
  );
}

function Depth3Frame12() {
  return (
    <div className="relative shrink-0" data-name="Depth 3, Frame 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-center relative">
        <Depth4Frame15 />
        <Depth4Frame16 />
      </div>
    </div>
  );
}

function Depth2Frame8() {
  return (
    <div className="bg-[#ffffff] h-[72px] min-h-[72px] relative shrink-0 w-full" data-name="Depth 2, Frame 8">
      <div className="flex flex-row items-center min-h-inherit relative size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-4 h-[72px] items-center justify-start min-h-inherit px-4 py-2 relative w-full">
          <Depth3Frame11 />
          <Depth3Frame12 />
        </div>
      </div>
    </div>
  );
}

function Depth1Frame0() {
  return (
    <div className="relative shrink-0 w-full" data-name="Depth 1, Frame 0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-start relative w-full">
        <Depth2Frame0 />
        <Depth2Frame1 />
        <Depth2Frame2 />
        <Depth2Frame3 />
        <Depth2Frame4 />
        <Depth2Frame5 />
        <Depth2Frame6 />
        <Depth2Frame7 />
        <Depth2Frame8 />
      </div>
    </div>
  );
}

function Depth5Frame9() {
  return (
    <div className="basis-0 grow h-6 min-h-px min-w-px relative shrink-0" data-name="Depth 5, Frame 0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-6 overflow-clip relative w-full">
        <div className="absolute left-0 size-6 top-0" data-name="Vector - 0">
          <div className="absolute inset-[9.38%_12.5%_12.5%_12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
              <path clipRule="evenodd" d={svgPaths.p11f24e80} fill="var(--fill-0, #1C140D)" fillRule="evenodd" id="Vector - 0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Depth4Frame17() {
  return (
    <div className="h-8 relative shrink-0" data-name="Depth 4, Frame 0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-8 items-center justify-center relative">
        <Depth5Frame9 />
      </div>
    </div>
  );
}

function Depth4Frame18() {
  return (
    <div className="relative shrink-0" data-name="Depth 4, Frame 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-start relative">
        <div className="css-bmp2lc font-['Manrope:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#1c140d] text-[12px] text-nowrap w-full">
          <p className="leading-[18px] whitespace-pre">Painel de Controle</p>
        </div>
      </div>
    </div>
  );
}

function Depth3Frame13() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[27px] shrink-0" data-name="Depth 3, Frame 0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-1 items-center justify-end relative w-full">
        <Depth4Frame17 />
        <Depth4Frame18 />
      </div>
    </div>
  );
}

function Depth5Frame10() {
  return (
    <div className="basis-0 grow h-6 min-h-px min-w-px relative shrink-0" data-name="Depth 5, Frame 0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-6 overflow-clip relative w-full">
        <div className="absolute left-0 size-6 top-0" data-name="Vector - 0">
          <div className="absolute inset-[12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path clipRule="evenodd" d={svgPaths.p1ff07680} fill="var(--fill-0, #94734F)" fillRule="evenodd" id="Vector - 0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Depth4Frame19() {
  return (
    <div className="h-8 relative shrink-0" data-name="Depth 4, Frame 0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-8 items-center justify-center relative">
        <Depth5Frame10 />
      </div>
    </div>
  );
}

function Depth4Frame20() {
  return (
    <div className="relative shrink-0" data-name="Depth 4, Frame 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-start relative">
        <div className="css-6bvmrk font-['Manrope:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#94734f] text-[12px] text-nowrap w-full">
          <p className="leading-[18px] whitespace-pre">Inventário</p>
        </div>
      </div>
    </div>
  );
}

function Depth3Frame14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Depth 3, Frame 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-1 items-center justify-end relative w-full">
        <Depth4Frame19 />
        <Depth4Frame20 />
      </div>
    </div>
  );
}

function Depth5Frame11() {
  return (
    <div className="basis-0 grow h-6 min-h-px min-w-px relative shrink-0" data-name="Depth 5, Frame 0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-6 overflow-clip relative w-full">
        <div className="absolute left-0 size-6 top-0" data-name="Vector - 0">
          <div className="absolute inset-[6.25%_9.38%_9.37%_9.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21">
              <path clipRule="evenodd" d={svgPaths.p3af83a80} fill="var(--fill-0, #94734F)" fillRule="evenodd" id="Vector - 0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Depth4Frame21() {
  return (
    <div className="h-8 relative shrink-0" data-name="Depth 4, Frame 0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-8 items-center justify-center relative">
        <Depth5Frame11 />
      </div>
    </div>
  );
}

function Depth4Frame22() {
  return (
    <div className="relative shrink-0" data-name="Depth 4, Frame 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-start relative">
        <div className="css-6bvmrk font-['Manrope:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#94734f] text-[12px] text-nowrap w-full">
          <p className="leading-[18px] whitespace-pre">Relatórios</p>
        </div>
      </div>
    </div>
  );
}

function Depth3Frame2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Depth 3, Frame 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-1 items-center justify-end relative w-full">
        <Depth4Frame21 />
        <Depth4Frame22 />
      </div>
    </div>
  );
}

function Depth2Frame9() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Depth 2, Frame 0">
      <div aria-hidden="true" className="absolute border-[#f2ede8] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-2 items-start justify-start pb-3 pt-[9px] px-4 relative w-full">
          <Depth3Frame13 />
          <Depth3Frame14 />
          <Depth3Frame2 />
        </div>
      </div>
    </div>
  );
}

function Depth2Frame10() {
  return (
    <div className="bg-[#ffffff] h-5 relative shrink-0 w-full" data-name="Depth 2, Frame 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-5 w-full" />
    </div>
  );
}

function Depth1Frame1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Depth 1, Frame 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-start relative w-full">
        <Depth2Frame9 />
        <Depth2Frame10 />
      </div>
    </div>
  );
}

function Depth0Frame0() {
  return (
    <div className="bg-[#ffffff] min-h-[844px] relative shrink-0 w-full" data-name="Depth 0, Frame 0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-between min-h-inherit overflow-clip relative w-full">
        <Depth1Frame0 />
        <Depth1Frame1 />
      </div>
    </div>
  );
}

function StitchDesign() {
  return (
    <div className="absolute bg-[#ffffff] content-stretch flex flex-col items-start justify-start left-0 top-0 w-[390px]" data-name="Stitch Design">
      <Depth0Frame0 />
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative size-full" data-name="home">
      <StitchDesign />
    </div>
  );
}