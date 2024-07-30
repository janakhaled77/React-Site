
import React, { useState } from 'react';

export default function Portofolio() {
  const [showPhoto, setShowPhoto] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(null);

  const handlePhotoClick = (photoSrc) => {
    setCurrentPhoto(photoSrc);
    setShowPhoto(true);
  };

  const handleClosePhoto = () => {
    setShowPhoto(false);
  };

  return (
    <div>
      <div>
        <h2 className='text-gray-900 font-bold text-4xl text-center p-5 pt-32'>PORTOFOLIO SECTION</h2>

        <div className="flex items-center justify-center mt-2">
          <div className="h-1 bg-gray-800 w-20"></div>
          <span className="mx-2 text-gray-800">★</span>
          <div className="h-1 bg-gray-800 w-20"></div>
        </div>
        {/* <main>
          <div className="mx-auto w-96 max-w-screen-xl">
            <div className="flex flex-col md:flex-row justify-around py-8">
              <div className="flex-1 text-center mx-4 my-2 md:my-0 group">
                <div className="relative rounded-lg overflow-hidden">
                  <img src='images/poert1.png' alt='house' className="rounded-lg w-full h-auto" />
                  <div className="absolute inset-0 bg-green-700 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex justify-center items-center" 
                       onClick={() => handlePhotoClick('images/poert1.png')}>
                    <span className="text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="fa-solid fa-plus text-9xl text-white"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center mx-4 my-2 md:my-0 group">
                <div className="relative rounded-lg overflow-hidden">
                  <img src='images/port2.png' alt='cake' className="rounded-lg w-full h-auto" />
                  <div className="absolute inset-0 bg-green-700 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex justify-center items-center" 
                       onClick={() => handlePhotoClick('images/port2.png')}>
                    <span className="text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="fa-solid fa-plus text-9xl text-white"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center mx-4 my-2 md:my-0 group">
                <div className="relative rounded-lg overflow-hidden">
                  <img src='images/port3.png' alt='play-house' className="rounded-lg w-full h-auto" />
                  <div className="absolute inset-0 bg-green-700 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex justify-center items-center" 
                       onClick={() => handlePhotoClick('images/port3.png')}>
                    <span className="text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="fa-solid fa-plus text-9xl text-white"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full max-w-screen-xl">
            <div className="flex flex-col md:flex-row justify-around py-8">
              <div className="flex-1 text-center mx-4 my-2 md:my-0 group">
                <div className="relative rounded-lg overflow-hidden">
                  <img src='images/poert1.png' alt='house' className="rounded-lg w-full h-auto" />
                  <div className="absolute inset-0 bg-green-700 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex justify-center items-center" 
                       onClick={() => handlePhotoClick('images/poert1.png')}>
                    <span className="text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="fa-solid fa-plus text-9xl text-white"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center mx-4 my-2 md:my-0 group">
                <div className="relative rounded-lg overflow-hidden">
                  <img src='images/port2.png' alt='cake' className="rounded-lg w-full h-auto" />
                  <div className="absolute inset-0 bg-green-700 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex justify-center items-center" 
                       onClick={() => handlePhotoClick('images/port2.png')}>
                    <span className="text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="fa-solid fa-plus text-9xl text-white"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center mx-4 my-2 md:my-0 group">
                <div className="relative rounded-lg overflow-hidden">
                  <img src='images/port3.png' alt='play-house' className="rounded-lg w-full h-auto" />
                  <div className="absolute inset-0 bg-green-700 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex justify-center items-center" 
                       onClick={() => handlePhotoClick('images/port3.png')}>
                    <span className="text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="fa-solid fa-plus text-9xl text-white"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main> */}
      <main>
  <div className="py-8">
  <div className="px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-5">
      <div className="relative group">
        <div className="relative rounded-lg overflow-hidden">
          <img src='images/poert1.png' alt='house' className="rounded-lg w-full h-auto object-cover" />
          <div className="absolute inset-0 bg-green-700 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex justify-center items-center" 
               onClick={() => handlePhotoClick('images/poert1.png')}>
            <span className="text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <i className="fa-solid fa-plus text-9xl text-white"></i>
            </span>
          </div>
        </div>
      </div>

      <div className="relative group">
        <div className="relative rounded-lg overflow-hidden">
          <img src='images/port2.png' alt='cake' className="rounded-lg w-full h-auto object-cover" />
          <div className="absolute inset-0 bg-green-700 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex justify-center items-center" 
               onClick={() => handlePhotoClick('images/port2.png')}>
            <span className="text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <i className="fa-solid fa-plus text-9xl text-white"></i>
            </span>
          </div>
        </div>
      </div>

      <div className="relative group">
        <div className="relative rounded-lg overflow-hidden">
          <img src='images/port3.png' alt='play-house' className="rounded-lg w-full h-auto object-cover" />
          <div className="absolute inset-0 bg-green-700 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex justify-center items-center" 
               onClick={() => handlePhotoClick('images/port3.png')}>
            <span className="text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <i className="fa-solid fa-plus text-9xl text-white"></i>
            </span>
          </div>
        </div>
      </div>

      <div className="relative group">
        <div className="relative rounded-lg overflow-hidden">
          <img src='images/poert1.png' alt='house' className="rounded-lg w-full h-auto object-cover" />
          <div className="absolute inset-0 bg-green-700 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex justify-center items-center" 
               onClick={() => handlePhotoClick('images/poert1.png')}>
            <span className="text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <i className="fa-solid fa-plus text-9xl text-white"></i>
            </span>
          </div>
        </div>
      </div>

      <div className="relative group">
        <div className="relative rounded-lg overflow-hidden">
          <img src='images/port2.png' alt='cake' className="rounded-lg w-full h-auto object-cover" />
          <div className="absolute inset-0 bg-green-700 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex justify-center items-center" 
               onClick={() => handlePhotoClick('images/port2.png')}>
            <span className="text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <i className="fa-solid fa-plus text-9xl text-white"></i>
            </span>
          </div>
        </div>
      </div>

      <div className="relative group">
        <div className="relative rounded-lg overflow-hidden">
          <img src='images/port3.png' alt='play-house' className="rounded-lg w-full h-auto object-cover" />
          <div className="absolute inset-0 bg-green-700 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex justify-center items-center" 
               onClick={() => handlePhotoClick('images/port3.png')}>
            <span className="text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <i className="fa-solid fa-plus text-9xl text-white"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div></div>
</main>


        {showPhoto && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            onClick={handleClosePhoto}
          >
            <img src={currentPhoto} alt="Enlarged" className="ww-96 max-h-full p-12" />
          </div>
        )}
      </div>
    </div>
  );
}