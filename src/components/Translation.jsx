import Banner from "../assets/banner.png";

const Translation = ({
  name,
  description,
  id,
  banner,
  img,
  linkPC,
  linkMobile,
}) => {
  return (
    <div className="flex flex-col bg-gray-800 w-64 rounded-md relative transition-transform duration-300 hover:scale-110">
      {banner !== "" && (
        <img
          src={banner}
          alt={"Banner de " + name}
          className="rounded-md w-64"
        />
      )}
      {banner == "" && (
        <img
          src={Banner}
          alt={"Banner de " + name}
          className="rounded-md w-64"
        />
      )}
      <img
        src={img}
        alt={"Imagem de " + name}
        className="absolute w-16 left-4 top-20 bg-gray-800 p-1 rounded-lg"
      />
      {/* INFO DIV */}
      <div className="flex flex-1 flex-col gap-3 mt-3 p-3 min-h-42 justify-between">
        <p className="font-bold">{name}</p>
        <p className="text-sm">{description}</p>
        <div className="flex gap-3">
          <a target="_blank" href={linkPC} className="secondary-btn-sm">
            Computador
          </a>
          {linkMobile !== "" && (
            <a target="_blank" href={linkMobile} className="secondary-btn-sm">
              Mobile
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Translation;
