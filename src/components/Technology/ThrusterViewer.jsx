import "@google/model-viewer/";
const ThrusterViewer = () => {
  return (
    <>
      <model-viewer
        src="/3d/thruster2.glb"
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
