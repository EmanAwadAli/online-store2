import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Download from "yet-another-react-lightbox/plugins/download";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import { IoExpandOutline } from "react-icons/io5";
import img1 from "assets/images/product/img1.jpg";
import img2 from "assets/images/product/img2.jpg";
import img3 from "assets/images/product/img3.jpg";
import img4 from "assets/images/product/img4.jpg";

export default function ProductLightBox() {
  const [open, setOpen] = React.useState(false);
  const fullscreenRef = React.useRef(null);
  const slideshowRef = React.useRef(null);
  const zoomRef = React.useRef(null);

  return (
  <>
    <button className="flex items-center justify-center w-12 h-12 text-primary text-2xl rounded-lg shadow-md hover:bg-primary-100 transition-all duration-500 ease-in-out" onClick={() => setOpen(true)} >
      <IoExpandOutline/>
    </button>
    <Lightbox
      slides={[
        { src: img1 },
        { src: img2},
        { src: img3 },
        { src: img4 },
      ]}
      styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
      open={open}
      plugins={[Download, Fullscreen, Slideshow]}
      close={() => setOpen(false)}
      fullscreen={{ ref: fullscreenRef }}
      slideshow={{ ref: slideshowRef }}
      controller= {{closeOnBackdropClick: true}}
    />
  </>
  );
}
