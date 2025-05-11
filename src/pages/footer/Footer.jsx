import whatsapp from '../../assets/whatsapp-white.svg';

const categorias = {
    'Comprar': [
      { nome: 'Encontre seu Chevrolet' },
      { nome: 'Ofertas 0km' },
      { nome: 'Solicitar Contato' },
      { nome: 'Falar com um vendedor' },
      { nome: 'Lista de preços' },
      { nome: 'Financie seu Chevrolet' },
    ],
    'Comprar2': [
      { nome: 'Vendas PCD' },
      { nome: 'Vendas Diretas' },
      { nome: 'OnStar' },
      { nome: 'Blindagem' },
      { nome: 'Seminovos' },
      { nome: 'Chevrolet Sempre' },
    ],
    'Proprietários': [
      { nome: 'Serviços' },
      { nome: 'Ofertas de serviços' },
      { nome: 'Acessórios' },
      { nome: 'Meu Chevrolet' },
      { nome: 'Peças' },
      { nome: 'Revisão Preço Fixo' },
      { nome: 'MyLink' },
    ],
    'Proprietários2': [
      { nome: 'Recall' },
      { nome: 'Recall Airbag Takata' },
      { nome: 'Últimos Recalls' },
      { nome: 'Road Service' },
      { nome: 'Programa de Rotulagem' },
      { nome: 'Veicular' },
      { nome: 'Manuais do proprietários' },
      { nome: 'Manuais de resgate' },
      { nome: 'Tutoriais' },
    ],
    'Institucional': [
      { nome: 'Politica de Privacidade' },
      { nome: 'Portal de Privacidade de' },
      { nome: 'Dados' },
    ],
    'Institucional2': [
      { nome: 'Instituto GM' },
      { nome: 'Trabalhe Conosco' },
    ],
  };
  
  function Footer() {
    return (
      <div id='Concessionarias' className="w-full min-h-[100vh] bg-black flex justify-center items-center text-white p-4 flex flex-col ">
        <p className="text-5xl font-bold">Juntos na Direção</p>

        <div className="flex w-[90%] xl:w-[1250px] mx-4 md:mx-16 justify-center gap-4 flex-wrap mt-8">
            <div className="flex flex-col">
                <p className="mt-8">Veículos</p>
                <div className="w-[300px] h-[120px] flex justify-between border-t border-white mt-4 text-[12px] font-bold">
                  <div className="flex w-[130px] flex-col items-start mt-4">
                    <p>Todos</p>
                    <p>Carros</p>
                    <p>SUV & crossovers</p>
                  </div>
                  <div className="flex w-[130px] flex-col items-end mt-4">
                    <p>Esportivos</p>
                    <p>Elétricos</p>
                    <p>Picapes</p>
                  </div>
                </div>
            </div>
            {/* Mapeando as categorias da seção "Comprar" */}
            <div className="flex flex-col">
                <p className="mt-8">Comprar</p>
                <div className="w-[300px] h-[170px] flex justify-between border-t border-white mt-4 text-[12px] font-bold">
                  <div className="flex w-[135px] flex-col items-start mt-4">
                    {categorias['Comprar'].map((item, index) => (
                      <p key={index}>{item.nome}</p>
                    ))}
                  </div>
                  <div className="flex w-[135px] flex-col items-end mt-4">
                  {categorias['Comprar2'].map((item, index) => (
                      <p key={index}>{item.nome}</p>
                    ))}
                  </div>
                </div>
            </div>

            {/* Mapeando as categorias da seção "Proprietários" */}
            <div className="flex flex-col">
                <p className="mt-8">Proprietários</p>
                <div className="w-[300px] h-[200px] flex justify-between border-t border-white mt-4 text-[12px] font-bold">
                  <div className="flex w-[135px] flex-col items-start mt-4">
                    {categorias['Proprietários'].map((item, index) => (
                      <p key={index}>{item.nome}</p>
                    ))}
                  </div>
                  <div className="flex w-[144px] flex-col items-end mt-4">
                  {categorias['Proprietários2'].map((item, index) => (
                      <p key={index}>{item.nome}</p>
                    ))}
                  </div>
                </div>
            </div>

            {/* Mapeando as categorias da seção "Institucional" */}
            <div className="flex flex-col">
                <p className="mt-8">Institucional</p>
                <div className="w-[300px] h-[200px] flex justify-between border-t border-white mt-4 text-[12px] font-bold">
                  <div className="flex w-[135px] flex-col items-start mt-4">
                    {categorias['Institucional'].map((item, index) => (
                      <p key={index}>{item.nome}</p>
                    ))}
                  </div>
                  <div className="flex w-[144px] flex-col items-end mt-4">
                  {categorias['Institucional2'].map((item, index) => (
                      <p key={index}>{item.nome}</p>
                    ))}
                  </div>
                </div>
            </div>

        </div>

        <div className='flex w-[90%] xl:w-[1250px] mb-4 justify-between text-[12px] font-bold md:mx-16 mx-4'>
                <div className='flex gap-4 underline flex-wrap'>
                    <a href="">Fale Conosco</a>
                    <a href="">Proconve</a>
                    <a href="">Avisos Importantes</a>
                    <a href="">Accesilab</a>
                    <a href="">Mapa do Site </a>
                    <a href="">Relatórios de Transparência</a>
                </div>
                <div className='flex gap-4 flex-wrap'>
                    <img src={whatsapp} alt="whatsapp" className='w-[30px]' />
                    <img src="/branco-instagram.svg" alt="instagram" className='w-[30px]' />
                    <img src="/twitterx.svg" alt="chome" className='w-[30px]' />
                    <img src="/facebook.svg" alt="facebook" className='w-[30px]' />
                </div>
        </div>

        <div className="flex flex-col w-[90%] lg:w-[1250px] gap-8 border-t pt-8 text-[10px] md:text-[12px] font-bold mx-4 md:mx-16 flex-wrap">
        <p>Faça revisões em seu veículo regularmente. Nossos veículos estão em conformidade com o Programa de Controle da Poluição do Ar por Veículos Automotores - JUNTOS SALVAMOS VIDAS.</p>
            <p>A GENERAL MOTORS DO BRASIL informa que não realiza a venda de veículos zero quilometro sem o auxílio de uma concessionária da rede Chevrolet. Para localizar uma concessionária acesse aqui.</p>
            <p>DESACELERE. SEU BEM MAIOR É A VIDA</p>
            <p>Os preços podem variar de acordo com o seu Estado. Solicite sua proposta em uma das nossas Concessionárias Chevrolet</p>
            <div className="flex w-[90%] lg:w-[900px]">
                <p>Em algumas imagens o veículo pode estar equipado com acessórios disponíveis em toda rede de concessionárias Chevrolet.
                    2025 General Motors do Brasil. Todos os direitos reservados. Proibida a reprodução total ou parcial
                    Avenida Goiás, n.1805, São Caetano do Sul – SP, CEP 09521-300; CNPJ 59.275.792/0001-50</p>
            </div>
        </div >
        <p className='text-[12px] flex justify-center pt-4'>&copy; 2025 Pedro Arthur.</p>
           
    </div>

    );
  }
  
  export default Footer;
  