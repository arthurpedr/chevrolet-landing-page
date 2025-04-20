import folha from "../../assets/folha-black.svg";
import folhawhite from "../../assets/folha-white.svg";
import whatsapp from "../../assets/whatsapp.svg";
import whatsappwhite from "../../assets/whatsapp-white.svg";
import link from "../../assets/link.svg";
import linkwhite from "../../assets/link-white.svg";
import caixa from "../../assets/caixa.svg";
import caixawhite from "../../assets/caixa-white.svg";

const servicos = [
  {
    titulo: "Encontrar seu Chevrolet",
    imagem: folha,
    imagem2: folhawhite,
    botao: "Procurar",
  },
  {
    titulo: "Solicitar contato",
    imagem: link,
    imagem2: linkwhite,
    botao: "Solicitar",
  },
  {
    titulo: "Ofertas 0km",
    imagem: caixa,
    imagem2: caixawhite,
    botao: "Ver ofertas",
  },
  {
    titulo: "Falar com um vendedor",
    imagem: whatsapp,
    imagem2: whatsappwhite,
    botao: "Conversar",
  },
];

function Servicos() {
  return (
    <div id="Servicos" className="w-full min-h-[500px]">
      <p className="text-4xl font-bold text-center mt-10">
        Da Chevrolet para você
      </p>

      <div className="flex flex-wrap justify-center items-center gap-10 mt-8">
        {servicos.map((item, index) => (
          <div
            key={index}
            className="group w-[250px] h-[300px] flex flex-col justify-center items-start gap-4 mt-10 p-4 hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            <img className="w-[50px] flex group-hover:hidden" src={item.imagem} alt="ícone" />
            <img className="w-[50px] hidden group-hover:block"  src={item.imagem2} alt="ícone" />
            <p className="text-2xl font-bold">{item.titulo}</p>
            <button
              className="text-[#094FC3] font-bold group-hover:text-white transition"
              type="button"
            >
              {item.botao}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicos;
