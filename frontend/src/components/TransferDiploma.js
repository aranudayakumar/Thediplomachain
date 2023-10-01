import React from 'react';
import { gsap } from 'gsap';

export default function TransferDiploma() {
  const transferAndAnimate = () => {
    gsap.to(".diplomaElement", {
      duration: 2,
      x: 300,
      rotation: 360,
      onComplete: function() {
        // Call to web3 for transfer here
      }
    });
  };

  return (
    <div>
      <button onClick={transferAndAnimate}>Transfer Diploma</button>
      <div className="diplomaElement">Diploma</div>
    </div>
  );
}
