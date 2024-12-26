import star1 from '../assets/images/Mission-star-1.png';
const Subscribe = ({ mode = 'light' }) => {
  const isDark = mode === 'dark';
  
  return (
    <div className={`${isDark ? 'bg-black' : 'bg-white'} py-32 px-8 relative`}>
      {/* Star decoration */}
      <div className="absolute top-32 left-48">
        <img src={star1} alt="" className= "w-32 h-32" />
      </div>
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          {/* Heading */}
          <h2 className={`text-5xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
            Stay up to date
            <br />
            Enter your
            <span className={`text-5xl block text-bold ${isDark ? 'text-gray-400' : 'text-gray-500'} pt-4`}>
              Email address
            </span>
          </h2>

          {/* Subscribe Form */}
          <div className="flex flex-col items-center gap-6">
            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full max-w-md px-4 py-3 border-b ${
                isDark ? 'border-white text-white bg-black' : 'border-black text-black bg-white'
              } focus:outline-none focus:border-[#CCFF00] text-center text-xl`}
            />

            <button className= "bg-[#CCFF00] px-8 py-3 flex items-center gap-2">
              Subscribe
              <span className="transform rotate-45">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Subscribe;