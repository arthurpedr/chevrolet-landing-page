import camaro from "../../assets/camaro.png";
import S10 from "../../assets/s10.png";
import Silverado from "../../assets/silverado.png";
import Onixplus from "../../assets/onixplus.png";

const partners = [
  { name: "Camaro", logo: camaro },
  { name: "S10", logo: S10 },
  { name: "Onix plus", logo: Onixplus },
  { name: "Silverado", logo: Silverado },
];

export default function PartnerCarousel() {
  const loopedPartners = Array(6).fill(partners).flat();

  return (
    <div
      id="Comprar"
      className="relative w-full overflow-hidden bg-white py-6"
    >
      <div
        className="flex w-max gap-10 animate-slide"
        style={{
          animation: "slide 30s linear infinite",
        }}
      >
        {loopedPartners.map((partner, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center w-[400px] md:w-[700px] bg-white rounded-xl shrink-0"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-[100%]"
            />
          </div>
        ))}
      </div>

      {/* Estilo da animação */}
      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
