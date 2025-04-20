import background2 from '../../assets/background-foto02.jpg';

function Preenchimento() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to top, rgb(0, 0, 0) 0%, rgba(0,0,0,0) 30%), url(${background2})`
      }}
    ></div>
  );
}

export default Preenchimento;
