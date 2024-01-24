import React from 'react'
import wa from '../../public/images/wa.png'

const Whatsapp = ({ phoneNumber, message }) => {
    const handleClick = () => {
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
      };
  return (
    <button onClick={handleClick} className="whatsapp-button">
      <img src={wa} alt="whatsapp" className="w-20" />
    </button>

    
  )
}

export default Whatsapp