import { useState } from "react";
import Buttontop from "../home/Componentes/ScrollToTopButton.jsx";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Blazer from "../../assets/blazer.png";
import EquinoxEV from "../../assets/equinox-ev.png";
import SparkEUV from "../../assets/spark.png";
import Montana from "../../assets/montana.png";
import Camaro from "../../assets/camaro.png";
import Onix from "../../assets/onix.png";
import OnixPlus from "../../assets/onixplus.png";
import S10 from "../../assets/s10.png";
import Tracker from "../../assets/tracker.png";
import Trailblazer from "../../assets/trailblazer.png";
import Silverado from "../../assets/silverado.png";
import Spin from "../../assets/spin.png";

function Modelos() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Elétricos");
  const [indiceAtual, setIndiceAtual] = useState(0);

  const categorias = {
    Elétricos: [
      {
        nome: "Blazer EV",
        imagem: Blazer,
        descriçao: "Além do DNA 100% esportivo, 100% elétrico",
        valor: "A partir de R$ 503.190*",
      },
      {
        nome: "Equinox EV",
        imagem: EquinoxEV,
        descriçao: "Além de tecnológico, elétrico",
        valor: "A partir de R$ 440.190*",
      },
      { nome: "Spark EUV", imagem: SparkEUV, descriçao: "Em breve!" },
    ],
    "SUVs & Crossover": [
      {
        nome: "Spin",
        imagem: Spin,
        descriçao: "Seja bem-vindo(a) ao Bigmalismo",
        valor: "A partir de R$ 129.090*",
      },
      {
        nome: "Tracker",
        imagem: Tracker,
        descriçao: "Assuma a direção do SUV que não para de evoluir",
        valor: "A partir de R$ 119.990*",
      },
      {
        nome: "Trailblazer",
        imagem: Trailblazer,
        descriçao: "O SUV brutalmente pronto para tudo",
        valor: "A partir de R$ 392.590*",
      },
    ],
    Picapes: [
      {
        nome: "Montana",
        imagem: Montana,
        descriçao: "O SUV que você precisa na picape que você sonhava",
        valor: "A partir de R$ 138.290*",
      },
      {
        nome: "S10",
        imagem: S10,
        descriçao: "A picape brutalmente macia",
        valor: "A partir de R$ 264.190*",
      },
      {
        nome: "Silverado",
        imagem: Silverado,
        descriçao: "A picape para quem pensa (muito) grande",
        valor: "A partir de R$ 573.590*",
      },
    ],
    Compactos: [
      {
        nome: "Onix",
        imagem: Onix,
        descriçao: "Você na direção certa",
        valor: "A partir de R$ 94.900*",
      },
      {
        nome: "Onix plus",
        imagem: OnixPlus,
        descriçao: "Muito mais segurança, potência e economia",
        valor: "A partir de R$ 106.790*",
      },
    ],
    Esportivos: [
      {
        nome: "Camaro",
        imagem: Camaro,
        descriçao: "A lenda das pistas ao seu alcance",
        valor: "A partir de R$ 532.340*",
      },
    ],
  };

  const carros = categorias[categoriaSelecionada];
  const carrosPorSlide = typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 2;
  const totalSlides = Math.ceil(carros.length / carrosPorSlide);

  const avancar = () => {
    setIndiceAtual((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  const voltar = () => {
    setIndiceAtual((prev) => Math.max(prev - 1, 0));
  };

  const carrosVisiveis = carros.slice(
    indiceAtual * carrosPorSlide,
    indiceAtual * carrosPorSlide + carrosPorSlide
  );

  return (
    <div
      id="Modelos"
      className="flex flex-col bg-white text-black font-bold w-full min-h-screen gap-8 p-8"
    >
      <Buttontop />
      <h1 className="text-4xl text-center pt-10">Sua viagem começa aqui</h1>

      {/* Categorias */}
      <ul className="flex justify-center gap-4 flex-wrap text-base sm:text-xl">
        {Object.keys(categorias).map((cat) => (
          <li
            key={cat}
            className={`cursor-pointer px-4 py-2 rounded-full border transition-all ${
              cat === categoriaSelecionada
                ? "bg-black text-white"
                : "bg-white text-black border-black hover:bg-gray-200"
            }`}
            onClick={() => {
              setCategoriaSelecionada(cat);
              setIndiceAtual(0); // reset ao trocar categoria
            }}
          >
            {cat}
          </li>
        ))}
      </ul>

      {/* Carrossel controlado por estado */}
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex gap-6 justify-center w-full flex-wrap">
          {carrosVisiveis.map((carro, index) => (
            <div key={index} className="w-[90vw] lg:w-[700px]">
              <img
                src={carro.imagem}
                alt={carro.nome}
                className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-contain rounded-xl"
              />
              <div className="flex gap-4 md:gap-0 justify-evenly items-center px-4 sm:px-8">
                <div className="flex flex-col items-start">
                  <p className="mt-2 text-xl">{carro.nome}</p>
                  <p className="text-xs md:text-sm text-gray-500">{carro.descriçao}</p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-sm">{carro.valor}</p>
                  <button
                    className="w-[120px] h-[28px] text-[#094FC3] text-sm hover:bg-[#094FC3] hover:text-white"
                    type="button"
                  >
                    Saber mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Setas para navegação */}
        <div className="flex gap-6 mt-4">
          <button
            onClick={voltar}
            disabled={indiceAtual === 0}
            className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition disabled:opacity-40"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={avancar}
            disabled={indiceAtual >= totalSlides - 1}
            className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition disabled:opacity-40"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modelos;
