import feature from "/src/assets/BlueROV2FeaturesSmall.png";
const RovSpec = () => {
  return (
    <div className="mt-20">
      <div className="text-center text-white text-4xl font-bold">
        BlueROV 2 Specifications
      </div>
      <div className="p-10 bg-white mt-10 rounded-2xl border-cyan-500 border-4">
        <img src={feature} alt="" />
      </div>
    </div>
  );
};

export default RovSpec;
