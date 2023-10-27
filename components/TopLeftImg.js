import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-[20px] top-[20px] mix-blend-color-dodge z-50 w-[200px] xl:w-[400px] opacity-50 ">
      <Image src="/logo-job-town.png" width={300} height={300} alt="" />
    </div>
  );
};

export default TopLeftImg;
