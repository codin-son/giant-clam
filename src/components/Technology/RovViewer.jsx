import "@google/model-viewer/";
import bluerov from "/src/assets/green-rov-s3.glb";
import ocean2 from "/src/assets/ocean2.jpg";
const RovViewer = () => {
  return (
    <>
      <model-viewer
        src={bluerov}
        // src="/src/assets/3d/thruster2.glb"
        alt="3D Model"
        auto-rotate
        camera-controls
        loading="lazy"
        style={{ width: "100%", height: "100%" }}
        skybox-image={ocean2}
        environment-image={ocean2}
      ></model-viewer>
    </>
  );
};

export default RovViewer;

