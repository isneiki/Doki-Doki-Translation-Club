import Banner from "../assets/banner.png";

const About = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <header className="flex flex-col items-center gap-8">
        <img src={Banner} alt="Banner DDTC" className="md:w-124" />
        <h1 className="text-4xl">Sobre Nós</h1>
        <p className="text-lg text-center w-90">
          Somos uma equipe independente de desenvolvimento de traduções para o
          jogo Doki Doki Literature Club sem fins lucrativos. Atualmente
          administrada por{" "}
          <a
            href="https://www.instagram.com/ghostluke.jpeg"
            className="underline"
          >
            Lucas Machado
          </a>{" "}
          (ou ghostluke.jpeg).
        </p>
        <div className="flex gap-4">
          <a
            href="https://discord.gg/xWpB6yjBrW"
            className="flex bg-blue-300 items-center justify-center p-3 gap-2 text-lg w-36"
          >
            <i className="fa-brands fa-discord"></i> Discord
          </a>
          <a
            href="https://x.com/DDTClubBR"
            className="flex bg-gray-800 items-center justify-center p-3 gap-2 text-lg text-white w-36"
          >
            <i className="fa-brands fa-x"></i> Twitter (X)
          </a>
        </div>
      </header>
      <div className="border-b-2 border-pink-400 w-64 my-6"></div>
    </div>
  );
};

export default About;
