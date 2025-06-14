import React, { useState, useRef } from 'react';
import TreeImage from '../../assets/tree.jpg';

import FinalBg from "../../assets/finalbg.png"

const FormInvitation = () => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const canvasRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!photo) return alert('ફોટો અપલોડ કરો!');

    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => generateImage(img);
      img.src = reader.result;
    };
    reader.readAsDataURL(photo);
  };

const generateImage = (userImage) => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext('2d');
  const width = 1469;
  const height = 2048;
  canvas.width = width;
  canvas.height = height;

  // Background
//   ctx.fillStyle = '#ecfdf5';
//   ctx.fillRect(0, 0, width, height);
const backgroundImage = new Image();
backgroundImage.src = FinalBg; // 👈 use public folder or imported asset

backgroundImage.onload = () => {
  ctx.drawImage(backgroundImage, 0, 0, width, height);



const imageX = 889;
const imageY = 1126;
const imageWidth = 365;
const imageHeight = 365; // Keep square for perfect circle

const radius = imageWidth / 2;
const centerX = imageX + radius;
const centerY = imageY + radius;

ctx.save(); // Save canvas state

// Clip to a circle
ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
ctx.closePath();
ctx.clip();

// Draw image inside circular area
ctx.drawImage(userImage, imageX, imageY, imageWidth, imageHeight);

ctx.restore(); // Restore canvas state (to remove clipping)


let nameText = `${name}`;
ctx.font = 'bold 40px Noto Sans Gujarati, sans-serif';

const boxStartX = 250;
const boxEndX = 675;
const boxWidth = boxEndX - boxStartX;
const nameCenterX = boxStartX + boxWidth / 2;

let currentY = 1390;
const lineHeight = 40;

ctx.fillStyle = '#4e342e';
ctx.textAlign = 'center'; // center within the defined box

const words = nameText.split(' ');
let line = '';

for (let i = 0; i < words.length; i++) {
  const testLine = line + (line ? ' ' : '') + words[i];
  const testWidth = ctx.measureText(testLine).width;

  if (testWidth > boxWidth && line) {
    ctx.fillText(line, nameCenterX, currentY);
    line = words[i];
    currentY += lineHeight;
  } else {
    line = testLine;
  }
}
if (line) ctx.fillText(line, nameCenterX, currentY);

  const imageURL = canvas.toDataURL('image/png');
  setImageUrl(imageURL);
  alert('તમારું ફોર્મ સફળતાપૂર્વક મોકલાયું! \nડાઉનલોડ કરવા માટે નીચે સ્ક્રોલ કરો');
}
};

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center px-4 py-8"  >
      <div className="bg-white shadow-lg rounded-lg max-w-xl w-full overflow-hidden" >


        <div
  className="bg-cover bg-center text-white flex flex-col items-center justify-center p-4"
  style={{
    height:"180px",
    backgroundImage: `url(${TreeImage})`,
    //backgroundColor: "rgba(0, 0, 0, 0.4)", // optional dark overlay if text is unreadable
    backgroundBlendMode: "overlay" // blends bg color with image for better text readability
  }}
>

  <div  className='w-full'>  
    <div style={{backgroundColor:"rgba(25,25,25,0.4)"}}  className='px-5 py-2 mt-24 rounded-md border-double border-white  '>
    <h1 className="text-xl sm:text-3xl font-bold text-left ">
    

    🌱 વૃક્ષારોપણ કાર્યક્રમ 🌿
  </h1>
  </div>
  </div>
</div>


        {/* Form */}
        <form className="p-6 space-y-4 text-gray-700" onSubmit={handleSubmit}>
          <p className="text-lg sm:text-base">
           🙏<span className='font-bold'>  નમસ્કાર!</span> 🙏<br />
            સમસ્ત નવા લોઇંચડા તથા જૂના લોઇંચડા ગામ પરિવાર દ્વારા આયોજિત વૃક્ષારોપણ કાર્યક્રમ માટે આપને હાર્દિક આમંત્રણ છે.<br />
            કૃપા કરીને નીચેની વિગતો ભરીને ખાતરી આપો કે તમે હાજરી આપશો.<br />
            આપનો સહકાર પર્યાવરણ માટે અમૂલ્ય છે. 🌍
          </p>

          <div className="text-sm sm:text-base">
            <p><strong>📅 તારીખ:</strong> ૨૮-૦૬-૨૦૨૫ અને ૨૯-૦૬-૨૦૨૫</p>
            <p><strong>📍 સ્થળ:</strong> પ્રાથમિક શાળા, નવા લોઇંચડા</p>
          </div>

          <div>
            <label htmlFor="name" className="block mb-1 font-medium">તમારું પૂરું નામ:</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="તમારું નામ લખો"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-green-500"
            />
          </div>

          <div>
            <label htmlFor="photo" className="block mb-1 font-medium">તમારો ફોટો અપલોડ કરો:</label>
            <input
              type="file"
              id="photo"
              accept="image/*"
              required
              onChange={(e) => setPhoto(e.target.files[0])}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                         file:rounded-full file:border-0 file:font-semibold
                         file:bg-green-100 file:text-green-700 hover:file:bg-green-200"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              હાજરી માટે મોકલો
            </button>
          </div>
        </form>
      </div>

      {/* Canvas (hidden) */}
      <canvas ref={canvasRef} className="hidden"></canvas>

      {/* Preview + Download */}
      {imageUrl && (
        <div className="mt-6 text-center">
           <p className="text-lg font-semibold">તમારું આમંત્રણ પત્રક ડાઉનલોડ કરો અને સોશિયલ મીડિયા પર શેર કરો</p> 

          <img
            src={imageUrl}
            alt="Generated"
            className="mt-2 w-full max-w-xl border rounded shadow-md"
          />
          <a
            href={imageUrl}
            download={`invitation-${name}.png`}
            className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 hover:text-white"
          >
            ડાઉનલોડ કરો
          </a>
            {/* WhatsApp Share */}

        </div>
      )}
    </div>
  );
};

export default FormInvitation;
