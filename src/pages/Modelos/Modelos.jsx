import { useRef, useState } from 'react';
import Buttontop from '../home/Componentes/ScrollToTopButton.jsx';
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

import Blazer from '../../assets/blazer.png';
import EquinoxEV from '../../assets/equinox-ev.png';
import SparkEUV from '../../assets/spark.png';
import Montana from '../../assets/montana.png';
import Camaro from '../../assets/camaro.png';
import Onix from '../../assets/onix.png';
import OnixPlus from '../../assets/onixplus.png';
import S10 from '../../assets/s10.png';
import Tracker from '../../assets/tracker.png';
import Trailblazer from '../../assets/trailblazer.png';
import Silverado from '../../assets/silverado.png';
import Spin from '../../assets/spin.png';

function Modelos() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Elétricos');
  const scrollRef = useRef(null);

  const categorias = {
    'Elétricos': [
      { nome: 'Blazer EV', imagem: Blazer, descriçao: 'Além do DNA 100% esportivo, 100% elétrico', valor: 'A partir de R$ 503.190*' },
      { nome: 'Equinox EV', imagem: EquinoxEV, descriçao: 'Além de tecnológico, elétrico', valor: 'A partir de R$ 440.190*' },
      { nome: 'Spark EUV', imagem: SparkEUV, descriçao: 'Em breve!' }
    ],
    'SUVs & Crossover': [
      { nome: 'Spin', imagem: Spin, descriçao: 'Seja bem-vindo(a) ao Bigmalismo', valor: 'A partir de R$ 129.090*' },
      { nome: 'Tracker', imagem: Tracker, descriçao: 'Assuma a direção do SUV que não para de evoluir', valor: 'A partir de R$ 119.990*' },
      { nome: 'Trailblazer', imagem: Trailblazer, descriçao: 'O SUV brutalmente pronto para tudo', valor: 'A partir de R$ 392.590*' },
    ],
    'Picapes': [
      { nome: 'Montana', imagem: Montana, descriçao: 'O SUV que você precisa na picape que você sonhava', valor: 'A partir de R$ 138.290*' },
      { nome: 'S10', imagem: S10, descriçao: 'A picape brutalmente macia', valor: 'A partir de R$ 264.190*' },
      { nome: 'Silverado', imagem: Silverado, descriçao: 'A picape para quem pensa (muito) grande', valor: 'A partir de R$ 573.590*' },
    ],
    'Compactos': [
      { nome: 'Onix', imagem: Onix, descriçao: 'Você na direção certa', valor: 'A partir de R$ 94.900*' },
      { nome: 'Onix plus', imagem: OnixPlus, descriçao: 'Muito mais segurança, potência e economia', valor: 'A partir de R$ 106.790*' },
    ],
    'Esportivos': [
      { nome: 'Camaro', imagem: Camaro, descriçao: 'A lenda das pistas ao seu alcance', valor: 'A partir de R$ 532.340*' },
    ]
  };

  const carros = categorias[categoriaSelecionada];

  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth * 0.6; // por exemplo, 80% da largura da tela
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth * 0.6;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  

  return (
    <div
      id="Modelos"
      className="flex flex-col bg-white text-black font-bold w-full min-h-screen gap-8 p-8"
    >
      <Buttontop />
      <h1 className="text-4xl text-center pt-10">Sua viagem começa aqui</h1>

      {/* Categorias */}
      <ul className="flex justify-center gap-6 text-xl flex-wrap">
        {Object.keys(categorias).map((cat) => (
          <li
            key={cat}
            className={`cursor-pointer px-4 py-2 rounded-full border transition-all ${
              cat === categoriaSelecionada
                ? 'bg-black text-white'
                : 'bg-white text-black border-black hover:bg-gray-200'
            }`}
            onClick={() => setCategoriaSelecionada(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>

      {/* Carrossel com setas abaixo */}
      <div className="flex flex-col items-center gap-4">
        {/* Imagens */}
        <div
          ref={scrollRef}
          className="pl-[320px] lg:pl-[0px] overflow-x-auto flex gap-6 px-6 scrollbar-hide scroll-smooth"
        >
          {carros.map((carro, index) => (
            <div key={index} className="min-w-[90%] md:min-w-[400px] flex-shrink-0">
              <img
                src={carro.imagem}
                alt={carro.nome}
                className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-contain rounded-xl"
              />
              <div className='flex justify-between items-center px-12'>
                <div>
                  <p className="mt-2 text-xl">{carro.nome}</p>
                  <p className='text-x text-gray-500'>{carro.descriçao}</p>
                </div>
                <div className='flex flex-col items-end'>
                  <p className='text-x'>{carro.valor}</p>
                  <button className='w-[120px] h-[28px] text-[#094FC3] text-x hover:bg-[#094FC3] hover:text-white' type="button">Saber mais</button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Setinhas abaixo */}
        <div className="flex gap-6 mt-4">
          <button
            aria-label="btn Esquerda"
            onClick={scrollLeft}
            className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition cursor-pointer"
          >
            
            <ArrowLeft />
          </button>
          <button
            aria-label="btn Direita" 
            onClick={scrollRight}
            className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition cursor-pointer"
          >
            
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modelos;
