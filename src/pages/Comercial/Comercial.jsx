import Video from '../../Videos/Lancamento.mp4';

function Comercial() {
    return (
        <div
        id='comprar'
         className="relative w-full h-[80vh] overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={Video}
                autoPlay
                loop
                muted
                playsInline
            />
            {/* Conteúdo em cima do vídeo (opcional) */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white gap-8">
                <p className="text-3xl">Elétricos Chevrolet</p>
                <p className='text-3xl font-bold'>Blazer EV RS</p>
                <button className='bg-white text-black w-[200px] h-[45px] text-xl rounded-[5px] hover:bg-transparent border-2 border-white font-semi-bold hover:text-white transition duration-300 transform hover:scale-105 focus:outline-none cursor-pointer' type="button">Explorar</button>
            </div>
        </div>
    );
}

export default Comercial;
