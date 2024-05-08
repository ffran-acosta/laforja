import homeBackground from '../assets/imgs/home-background/LAFORJA.INICIO.png';

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${homeBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  };

  return (
    <div style={backgroundStyle}>
      <h1 className="text-white text-4xl font-bold">
        
      </h1>
    </div>
  );
};

export default Home;