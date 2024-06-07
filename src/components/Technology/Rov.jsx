import RovSPec from "./RovSpec";
import RovFeature from "./RovFeature";
import RovViewer from "./RovViewer";
const Rov = () => {
  return (
    <div className="mt-40">
      <div className="grid grid-cols-4 gap-5 h-96">
        <div className="col-span-2 pe-36">
          <div className="h-full flex flex-col justify-center ">
            <h1 className="text-4xl font-bold text-white">
              Behind the Scenes: The Robotic Heart of Our Giant Clam
              Conservation Project
            </h1>
            <div className="text-xl mt-5 text-white">
              With a depth rating of 100 meters, high-definition camera, and
              modular design, our modified BlueROV2 is the ideal tool for
              studying giant clam populations in their natural habitats.
            </div>
          </div>
        </div>
        <div className="bg-base-300 rounded-xl border-white border-2 col-span-2 p-2">
          <RovViewer/>
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-4xl font-bold text-white text-center mt-40">
            The BlueROV2: A Closer Look
          </h1>
          <div className="text-xl text-center mt-5 text-white">
            The BlueROV2 is a highly customizable underwater drone that is
            perfect for research and exploration. With its user-friendly design
            and ability to dive to depths of up to 100 meters, this ROV offers
            unparalleled performance and versatility for a wide range of
            applications.
          </div>
        </div>
        <RovFeature/>        
        <RovSPec/>        
      </div>
    </div>
  );
};

export default Rov;
