import { AppBar } from '../components/appBar';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { RainbowKitProvider ,midnightTheme} from '@rainbow-me/rainbowkit';

export const Connectwallet = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] relative flex flex-col">

     

      <div>
        <AppBar />
        <div className="relative lg:absolute lg:top-0 lg:right-0 lg:pr-52 mt-4 px-4 w-full lg:w-auto">
          {/* Use ConnectButton directly to open the wallet connection modal */}
         <RainbowKitProvider modalSize="compact" theme={midnightTheme()} coolMode>
            {/* Your App */}
            <ConnectButton />
    </RainbowKitProvider>
          
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-8 p-8 mt-12">
        {/* Left Box */}
        <div className="max-w-[500px] w-full h-[520px] border border-white rounded-lg bg-[#0F1114] p-4 relative shadow-[2.69px_2.69px_0px_0px_#FFFFFF]">
          {/* Analytics Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white text-xl font-semibold">Analytics</h2>
            <div className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 text-sm">
              i
            </div>
          </div>

          {/* Chart Area */}
          <div className="h-48 rounded-lg bg-[#171A35] mb-6 flex items-center justify-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)] border-t-[2px] border-l-[2px] border-r-[2px] border-b-[4px] border-white">
            <span className="text-gray-500">No data available</span>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            {['Current price', 'TVL', '24H Volume'].map((title, index) => (
              <div className="bg-[#2C62F6] rounded-lg p-3" key={index}>
                <div className="flex items-center gap-2 mb-1">
                  <div className={`w-6 h-6 rounded-full ${index === 1 ? 'bg-yellow-500' : 'bg-orange-500'} flex items-center justify-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      {index === 0 ? <path d="M13 7h-6m6 4h-6m6 4h-6" /> : <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />}
                    </svg>
                  </div>
                  <span className="text-white text-sm">{title}</span>
                </div>
                <div className="text-white font-semibold">0</div>
              </div>
            ))}
          </div>

          <h3 className="text-white mb-2">Recent Trades</h3>
          <div className="bg-[#1A1A1A] rounded-lg">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 px-4 py-2 border-b border-gray-700">
              <span className="text-gray-400 text-sm">Timestamp</span>
              <span className="text-gray-400 text-sm">Token amount</span>
              <span className="text-gray-400 text-sm">msToken amount</span>
            </div>
            {/* No Data Message */}
            <div className="p-4 text-center text-gray-500">
              No data available
            </div>
          </div>

          {/* Connection Points */}
          <div className="absolute top-[20%] right-0 w-3 h-3 bg-white rounded-full translate-x-1/2"></div>
          <div className="absolute top-[50%] right-0 w-3 h-3 bg-white rounded-full translate-x-1/2"></div>
          <div className="absolute top-[80%] right-0 w-3 h-3 bg-white rounded-full translate-x-1/2"></div>
        </div>

        {/* Right Box */}
        <div className="max-w-[650px] w-full h-[550px] border-2 border-white bg-[#0F1114] p-3 shadow-[4px_4px_0px_0px_#FFFFFF] rounded-xl">
          <div className="flex gap-2 mb-4">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium">
              Deposit
            </button>
            <button className="flex-1 bg-transparent text-white py-2 rounded-lg text-sm font-medium">
              Withdraw
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg flex items-center gap-1 text-sm">
              <span className="w-4 h-4 rounded-full border border-white flex items-center justify-center text-xs">⬡</span>
              Slippage: 0.5%
            </button>
          </div>

          <div className="bg-[#12141A] rounded-lg p-4 mb-3">
            <div className="flex justify-between text-white mb-2 text-sm">
              <span className="font-medium">Deposit</span>
              <span className="text-gray-300">Asset Balance: 0.000 DOGE</span>
            </div>
            <div className="mb-3">
              <div className="text-3xl text-gray-400 font-medium mb-1">0.00</div>
              <div className="text-gray-500 text-sm">$0</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-1.5 items-center">
                <div className="w-2 h-2 bg-[#FFB800] rounded-full" />
                <div className="w-2 h-2 bg-gray-600 rounded-full" />
                <div className="w-2 h-2 bg-gray-600 rounded-full" />
                <div className="w-2 h-2 bg-gray-600 rounded-full" />
              </div>
              <button className="bg-blue-600 text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-sm">
                <img src="/api/placeholder/20/20" alt="DOGE" className="rounded-full" />
                DOGE
                <span className="text-gray-300">▼</span>
              </button>
            </div>
          </div>

          <div className="bg-[#12141A] rounded-lg p-4 mb-3">
            <div className="flex justify-between text-white mb-2 text-sm">
              <span className="font-medium">Receive</span>
              <span className="text-gray-300">ms DOGE Balance: 0.000 DOGE</span>
            </div>
            <div className="mb-3">
              <div className="text-3xl text-gray-400 font-medium mb-2">0.00</div>
              <div className="bg-[#462A12] text-[#FF8A00] px-2 py-0.5 rounded text-xs inline-block">
                1 DOGE = 0.890 ms DOGE
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-1.5 text-sm">
              <img src="/api/placeholder/20/20" alt="msDOGE" className="rounded-full" />
              ms DOGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
