import Silverado from '../../assets/Silverado.webp';

function Principal() {
  return (
    <div
      id="home"
      className="flex w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Silverado})` }}
    >
      <div className="flex flex-col justify-center items-start w-[300px] md:w-[400px] font-semibold text-white pl-[50px] gap-8 bg-gradient-to-r from-black to-transparent">
        <p className="text-4xl md:text-6xl">100 Anos de Chevrolet no Brasil</p>
        <p className="text-[14px] md:text-xl">
          Há 100 anos no Brasil, contamos histórias que nos inspiram a construir o futuro. E em 2025 seguimos juntos na direção!
        </p>
        <button
          className="w-[120px] h-[48px] bg-white hover:bg-transparent text-black hover:text-white hover:border-2 hover:border-white text-[20px] font-semibold transition duration-300 transform hover:scale-105 focus:outline-none"
          type="button"
        >
          Saber mais
        </button>
      </div>
    </div>
  );
}

export default Principal;
