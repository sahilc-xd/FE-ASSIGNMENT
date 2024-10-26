import { AppBar } from '../components/appBar';
import { FaDiscord } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
export const Signin = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#0A0A0A] relative flex flex-col">
      <AppBar />
      
      <main className="container mx-auto px-4 pt-20 text-center flex-grow">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            <div className="flex justify-center items-center">
              <h1 
                className="text-6xl tracking-wide relative font-bold"
                style={{
                  color: '#204AF8',
                  textShadow: `
                    -2.5px -2.5px 0 #fff,  
                     2.5px -2.5px 0 #fff,
                    -2.5px  2.5px 0 #fff,
                     2.5px  2.5px 0 #fff,
                    -3.5px 0px 0 #fff,
                     3.5px 0px 0 #fff,
                     0px 3.5px 0 #fff,
                     0px -3.5px 0 #fff,
                    -1.8px -1.8px 0 #fff,
                     1.8px -1.8px 0 #fff,
                    -1.8px  1.8px 0 #fff,
                     1.8px  1.8px 0 #fff
                  `,
                  fontWeight: 900,
                  letterSpacing: '0.001em',
                  WebkitTextStroke: '3px white',
                  padding: '0.2em 0',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                  borderRadius: '0.5em',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale'
                }}
              >
                Hodling
              </h1>
              
              <span 
                className="font-awesome-serif ml-2"
                style={{
                  height: '45px',
                  opacity: 1,
                  fontSize: '60px',
                  fontWeight: 700,
                  lineHeight: '88.06px',
                  color: 'rgba(255, 255, 255, 0.39)',
                  marginBottom: '20px'
                }}
              >
                isn't just a flex,
              </span>
            </div>

            <div className="flex justify-center items-center mt-4">
              <span
                className="font-awesome-serif"
                style={{
                  height: '45px',
                  opacity: 1,
                  fontSize: '60px',
                  fontWeight: 700,
                  lineHeight: '88.06px',
                  color: 'rgba(255, 255, 255, 0.39)',
                  marginBottom: '40px',
                  marginRight: '20px'
                }}
              >
                it is a
              </span>
              <h1
                className="text-6xl tracking-wide relative font-bold"
                style={{
                  color: '#204AF8',
                  textShadow: `
                    -2.5px -2.5px 0 #fff,  
                     2.5px -2.5px 0 #fff,
                    -2.5px  2.5px 0 #fff,
                     2.5px  2.5px 0 #fff,
                    -3.5px 0px 0 #fff,
                     3.5px 0px 0 #fff,
                     0px 3.5px 0 #fff,
                     0px -3.5px 0 #fff,
                    -1.8px -1.8px 0 #fff,
                     1.8px -1.8px 0 #fff,
                    -1.8px  1.8px 0 #fff,
                     1.8px  1.8px 0 #fff
                  `,
                  fontWeight: 900,
                  letterSpacing: '0.001em',
                  WebkitTextStroke: '3px white',
                  padding: '0.2em 0',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                  borderRadius: '0.5em',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                }}
              >
                Strategy
              </h1>
            </div>
          </h1>
          
          <div className="flex justify-center space-x-4 mt-8">
            <button className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 py-2 rounded-lg flex items-center space-x-2 border border-[#FFFFFF] shadow-[0_2px_0_0_#FFFFFF]">
              <FaDiscord className="h-5 w-5" />
            </button>
            <button className="border-2 text-white px-6 py-2 rounded-lg flex items-center space-x-2 border-[#FFFFFF] shadow-[0_2px_0_0_#FFFFFF]" onClick={() => navigate('/Connectwallet')}>
              <span>Launch app</span>
              <span>🚀</span>
            </button>
          </div>
          
          <div className="py-20 mb-20"> {/* Added mb-40 for extra bottom margin */}
            <div className="bg-[#204AF8] rounded-3xl p-6 w-24 h-24 mx-auto flex items-center justify-center">
              
               <img src="https://i.ibb.co/bsvX88p/Subtract.png" alt="Subtract"  className="h-16 w-16 object-contain"/>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="w-full py-4 px-4 mt-auto"> {/* Removed absolute positioning */}
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-2">
               <img 
                src='../src/assets/images/Subtract.png' 
                alt="Logo" 
                className="h-6 w-6 object-contain"
              />
              <span className="font-bold">Vault</span>
            </div>
            <p className="text-sm text-gray-400">
              The ultimate platform for turning coins into long-term gains <br />
              Stake, hold, and grow your assets with strategies designed for degen investors
            </p>
          </div>
          
          <div className="text-white">
            <h3 className="font-bold mb-2">Product</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li><a href="/about" className="hover:text-white">About product</a></li>
              <li><a href="/guide" className="hover:text-white">Guide</a></li>
              <li>
                <a href="/discord" className="hover:text-white flex items-center space-x-1">
                  <span>Join Discord</span>
                  <FaDiscord className="h-4 w-4 " />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-8">
          2024 @metalatorrng all rights reserved
        </div>
      </footer>
    </div>
  );
};

export default Signin;