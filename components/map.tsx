import React from "react";

const GoogleMapEmbed = () => {
  return (
    <div className="w-full flex justify-center">
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1fXWdAVerwrw0xoqtrcfB38pqACE&hl=en&ehbc=2E312F"
        className="w-screen h-[300px] md:h-[400px] lg:h-[480px]"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;