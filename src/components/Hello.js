const Hello = () => {
    return (
      <div className="bg-white px-8 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Header with Edit Icon */}
          <div className="flex justify-between items-start mb-24">
            <h2 className="text-9xl font-bold">
              Say
              <br />
              hellooo.
            </h2>
            <div className="bg-[#CCFF00] rounded-full p-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-6 h-6"
              >
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
              </svg>
            </div>
          </div>
           {/* Contact Information Grid */}
          <div className="grid grid-cols-3 gap-8">
            {/* Phone/Mail Section */}
            <div>
              <h3 className="text-gray-500 mb-4">Phone / Mail</h3>
              <div className="space-y-2">
                <p>tel: <a href="tel:+92-308-476993" className="hover:underline">+92-308-476993</a></p>
                <p>mail: <a href="mailto:graphy.agency0@gmail.com" className="hover:underline">graphy.agency0@gmail.com</a></p>
              </div>
            </div>
             {/* WhatsApp Business Section */}
            <div>
              <h3 className="text-gray-500 mb-4">Whatsapp Business</h3>
              <div className="space-y-2">
                <p>wa: <a href="https://wa.me/+923104734347" className="hover:underline">+92 310 473 4347</a></p>
                <p>mail: <a href="mailto:info@graphy.agency" className="hover:underline">info@graphy.agency</a></p>
              </div>
            </div>
             {/* Social Links Section */}
            <div>
              <h3 className="text-gray-500 mb-4">Follow Us</h3>
              <p>
                <a href="#" className="hover:underline">Behance</a>,{' '}
                <a href="#" className="hover:underline">Instagram</a>,{' '}
                <a href="#" className="hover:underline">Dribbble</a>,{' '}
                <a href="#" className="hover:underline">LinkedIn</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
   };
   export default Hello;