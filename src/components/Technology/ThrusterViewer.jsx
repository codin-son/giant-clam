import "@google/model-viewer/";
import thruster from "/src/assets/3d/thruster2.glb";
const ThrusterViewer = () => {
  return (
    <>
      <model-viewer
        src={thruster}
        alt="3D Model"
        auto-rotate
        camera-controls
        loading="lazy"
        style={{ width: "70%", height: "70%" }}
        shadow-intensity="1"
      ></model-viewer>
    </>
  );
};

export default ThrusterViewer;
