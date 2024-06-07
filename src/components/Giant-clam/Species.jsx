const Species = () => {
  return (
    <>
      <div>
        <div className="text-white text-4xl font-bold text-center mt-24">
          Species Spotlight: Giant Clams
        </div>
        <div className="text-lg text-center mt-5">
          You can find seven out of eight species of giant clam in malaysia
        </div>
        <div className="grid grid-cols-3 gap-5 bg-primary p-5 rounded-xl mt-5">
          <div className="">
            <img
            style={{width: "100%",height: "90%",}}
              src="/src/assets/giant-clam/960px-Hippopus_hippopus_Vanuatu_01.jpg"
              alt="Giant Clam"
              className="rounded-xl"
            />
            <div className="text-base-100 text-center text-lg font-bold ">
              Hippopus Hippopus
            </div>
            <div className="text-base-100 text-center">
              By{" "}
              <a
                href="//commons.wikimedia.org/wiki/User:FredD"
                title="User:FredD"
              >
                Frédéric Ducarme
              </a>{" "}
              -{" "}
              <span className="int-own-work" lang="en">
                Own work
              </span>
              ,{" "}
              <a
                href="https://creativecommons.org/licenses/by-sa/4.0"
                title="Creative Commons Attribution-Share Alike 4.0"
              >
                CC BY-SA 4.0
              </a>
              ,{" "}
              <a href="https://commons.wikimedia.org/w/index.php?curid=83219091">
                Link
              </a>
            </div>
          </div>
          <div className="">
            <img
            style={{width: "100%",height: "90%",}}
              src="https://meilin5giantclam.wordpress.com/wp-content/uploads/2018/06/hp5.jpg"
              alt="Giant Clam"
              className="rounded-xl"
            />
            <div className="text-base-100 text-center text-lg font-bold ">
              Hippopus Porcellanus
            </div>
            <div className="text-base-100 text-center">
              By{" "}
              <a
                href="//commons.wikimedia.org/wiki/User:Stan_Shebs"
                title="User:Stan Shebs"
              >
                Stan Shebs
              </a>
              ,{" "}
              <a
                href="https://creativecommons.org/licenses/by-sa/3.0"
                title="Creative Commons Attribution-Share Alike 3.0"
              >
                CC BY-SA 3.0
              </a>
              ,{" "}
              <a href="https://commons.wikimedia.org/w/index.php?curid=563894">
                Link
              </a>
            </div>
          </div>
          <div className="">
            <img
            style={{width: "100%",height: "90%",}}
              src="/src/assets/giant-clam/Tridacna_derasa_1.jpg"
              alt="Giant Clam"
              className="rounded-xl"
            />
            <div className="text-base-100 text-center text-lg font-bold ">
              Tridacna Derasa
            </div>
            <div className="text-base-100 text-center">
              By{" "}
              <a
                href="//commons.wikimedia.org/wiki/User:Stan_Shebs"
                title="User:Stan Shebs"
              >
                Stan Shebs
              </a>
              ,{" "}
              <a
                href="https://creativecommons.org/licenses/by-sa/3.0"
                title="Creative Commons Attribution-Share Alike 3.0"
              >
                CC BY-SA 3.0
              </a>
              ,{" "}
              <a href="https://commons.wikimedia.org/w/index.php?curid=563894">
                Link
              </a>
            </div>
          </div>
          <div className="">
            <img
            style={{width: "100%",height: "90%",}}
              src="/src/assets/giant-clam/887px-Giant_clam_(Tridacna_gigas)_Michaelmas_Cay.jpg"
              alt="Giant Clam"
              className="rounded-xl"
            />
            <div className="text-base-100 text-center text-lg font-bold ">
              Tridacna Gigas
            </div>
            <div className="text-base-100 text-center">
              Public Domain,{" "}
              <a href="https://commons.wikimedia.org/w/index.php?curid=1706603">
                Link
              </a>
            </div>
          </div>
          <div className="">
            <img
            style={{width: "100%",height: "90%",}}
              src="/src/assets/giant-clam/tridacna-tevoroa-2.jpg"
              alt="Giant Clam"
              className="rounded-xl"
            />
            <div className="text-base-100 text-center text-lg font-bold ">
              Tridacna Mbalavuana
            </div>
          </div>
          <div className="">
            <img
            style={{width: "100%",height: "90%",}}
              src="/src/assets/giant-clam/Tridacna_squamosa_Réunion.jpg"
              alt="Giant Clam"
              className="rounded-xl"
            />
            <div className="text-base-100 text-center text-lg font-bold ">
              Tridacna Squamosa
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Species;
