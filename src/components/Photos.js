import React, { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import IMG_3370 from "../assets/images/photos/IMG_3370.webp";
import Photo1 from "../assets/images/photos/46C1F4BB-EC71-4F1B-A2D3-EF1ED10523CD-E2F576C3-A86D-4397-AEFF-99175F21D2A4 2.webp";
import Photo2 from "../assets/images/photos/9962580d-bca0-49b9-9649-8b467fbb4938.webp";
import Photo3 from "../assets/images/photos/CF477E46-529C-4D97-860B-306DA197FB55.webp";
import DSC_4733 from "../assets/images/photos/DSC_4733.webp";
import DSC_5217 from "../assets/images/photos/DSC_5217.webp";
import DSC_6818 from "../assets/images/photos/dsc-6818_orig.webp";

const Photos = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Animation effect on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closeModal = useCallback(() => {
    setSelectedPhoto(null);
    document.body.style.overflow = "unset"; // Restore scrolling
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape" && selectedPhoto) {
        closeModal();
      }
    };

    if (selectedPhoto) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [selectedPhoto, closeModal]);

  // Photo gallery with varying grid spans for artistic layout
  // Each photo can span multiple rows and/or columns
  const photos = [
    { id: 1, url: IMG_3370, title: "", colSpan: 1, rowSpan: 2 }, // 2 rows
    { id: 2, url: Photo1, title: "", colSpan: 1, rowSpan: 1 }, // 1 row
    { id: 3, url: Photo2, title: "", colSpan: 2, rowSpan: 1 }, // 2 columns, 1 row
    { id: 4, url: Photo3, title: "", colSpan: 1, rowSpan: 3 }, // 3 rows
    { id: 5, url: DSC_4733, title: "", colSpan: 1, rowSpan: 1 }, // 1 row
    { id: 6, url: DSC_5217, title: "", colSpan: 2, rowSpan: 2 }, // 2 columns, 2 rows
    { id: 7, url: DSC_6818, title: "", colSpan: 1, rowSpan: 1 }, // 1 row
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-8 mt-14 pb-32 bg-gradient-to-b from-white to-gray-50">
        <div
          className={`transform transition-all duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-xl ml-0 font-bold mb-12 text-gray-800 relative">
            <span className="relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-1/3 after:h-1 after:bg-blue-500"></span>
            some <span className="text-rose-500">memories</span>
          </h1>

          {photos.length === 0 ? (
            <div className=" mx-auto text-center py-20">
              <p className="text-gray-600 text-lg mb-4">No photos yet.</p>
              <p className="text-gray-500 text-sm">
                Add your photography gallery here.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto auto-rows-[200px]">
              {photos.map((photo) => {
                const colSpanClass = 
                  photo.colSpan === 2 ? "sm:col-span-2" :
                  photo.colSpan === 3 ? "sm:col-span-3" :
                  "sm:col-span-1";
                
                const rowSpanClass = 
                  photo.rowSpan === 2 ? "sm:row-span-2" :
                  photo.rowSpan === 3 ? "sm:row-span-3" :
                  photo.rowSpan === 4 ? "sm:row-span-4" :
                  "sm:row-span-1";
                
                return (
                  <div
                    key={photo.id}
                    className={`relative overflow-hidden cursor-pointer ${colSpanClass} ${rowSpanClass} col-span-1 row-span-1`}
                    onClick={() => openModal(photo)}
                  >
                    <img
                      src={photo.url}
                      alt={photo.title || "Photo"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Modal - Rendered outside parent container */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer"
          onClick={closeModal}
          style={{
            animation: "fadeIn 0.3s ease-out",
          }}
        >
          <button
            onClick={closeModal}
            className="fixed top-4 right-4 text-white hover:text-gray-300 transition-colors z-[10000] pointer-events-auto"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative max-w-7xl max-h-[90vh] w-full mx-4 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: "scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title || "Photo"}
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Photos;
