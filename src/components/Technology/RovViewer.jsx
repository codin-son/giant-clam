import "@google/model-viewer/";

const RovViewer = () => {
  return (
    <>
      <model-viewer
        src="/src/assets/green-rov-s3.glb"
        // src="/src/assets/3d/thruster2.glb"
        alt="3D Model"
        auto-rotate
        camera-controls
        loading="lazy"
        style={{ width: "100%", height: "100%" }}
        skybox-image="/src/assets/ocean2.jpg"
        environment-image="/src/assets/ocean2.jpg"
      ></model-viewer>
    </>
  );
};

export default RovViewer;

