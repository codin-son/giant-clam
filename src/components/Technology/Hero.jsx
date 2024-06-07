const Hero = () => {
  return (
    <div className="min-h-full pt-40">
      <div className="flex justify-center items-center">
        <div className="grid grid-rows-2 gap-5">
          <h1 className="text-5xl font-bold text-base-100 text-center">
            Revolutionizing Giant Clam Conservation <br /> with{" "}
            <span
              className="text-white"
              style={{
                // background: "linear-gradient(to right bottom, #001d3d, #002960, #003283, #2b39a5, #553cc5, #7a36c9, #9b2bcb, #ba16ca, #cb00b2, #d6009c, #da1188, #db2777)",
                background:" radial-gradient(circle, #001d3d, #002657, #002e72, #0a348c, #2b39a5, #5138ad, #7134b2, #8e2eb5, #aa23a6, #c01a96, #d01c87, #db2777)", 
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AI-Powered ROVs
            </span>
          </h1>
          <div className="text-2xl text-center text-base-200">
            Leveraging state-of-the-art robotics and artificial intelligence to
            accurately <br /> assess and monitor giant clam populations in
            island ecosystems.
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <iframe
          className="rounded-xl"
          width="1422"
          height="800"
          src="https://www.youtube.com/embed/enPXjNzSUGg?si=TDx2u_LeMv9sey5u"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Hero;
