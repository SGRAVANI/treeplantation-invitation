import React, { useState, useRef } from 'react';
import TreeImage from '../../assets/tree.jpg';
import Tree2 from '../../assets/tree2.jpg';
import Treebg from "../../assets/treebg.jpg";
//import {Tree} from "./tree.jpg"
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
// const generateImage = (userImage) => {
//   const canvas = canvasRef.current;
//   const ctx = canvas.getContext('2d');
//   const width = 800;
//   const height = 370;
//   canvas.width = width;
//   canvas.height = height;

//   // Background
//   ctx.fillStyle = '#ecfdf5';
//   ctx.fillRect(0, 0, width, height);

//   // Border
//   ctx.strokeStyle = '#065f46';
//   ctx.lineWidth = 10;
//   ctx.strokeRect(0, 0, width, height);

//   // User image (circular)
//   const imageX = 40;
//   const imageY = 60;
//   const imageSize = 150;
//   ctx.save();
//   ctx.beginPath();
//   ctx.arc(imageX + imageSize / 2, imageY + imageSize / 2, imageSize / 2, 0, Math.PI * 2);
//   ctx.clip();
//   ctx.drawImage(userImage, imageX, imageY, imageSize, imageSize);
//   ctx.restore();

//   // Name below image
// //   ctx.fillStyle = '#065f46';
// //   ctx.font = 'bold 24px Noto Sans Gujarati, sans-serif';
// //   ctx.textAlign = 'center';
// //   ctx.fillText(`નામ: ${name}`, imageX + imageSize / 2, imageY + imageSize + 40);
// ctx.fillStyle = '#065f46';
// ctx.font = 'bold 24px Noto Sans Gujarati, sans-serif';
// ctx.textAlign = 'center';

// const fullText = `${name}`;
// const maxWidth = 200; // you can tweak this width based on available space
// const centerX = imageX + imageSize / 2;
// let currentY = imageY + imageSize + 40;

// // Split and wrap by word
// const words = fullText.split(' ');
// let line = '';

// for (let i = 0; i < words.length; i++) {
//   const testLine = line + (line ? ' ' : '') + words[i];
//   const { width: testWidth } = ctx.measureText(testLine);

//   if (testWidth > maxWidth && line) {
//     ctx.fillText(line, centerX, currentY);
//     line = words[i];
//     currentY += 30; // next line
//   } else {
//     line = testLine;
//   }
// }
// if (line) ctx.fillText(line, centerX, currentY); // last line

//   // Right side text (top part)
//   ctx.textAlign = 'left';
//   const rightX = 240;
//   let y = 80;

//   // Title
//   ctx.fillStyle = '#064e3b';
//   ctx.font = 'bold 34px Noto Sans Gujarati, sans-serif';
//   ctx.fillText('🌱 વૃક્ષારોપણ કાર્યક્રમ', rightX, y);

//   // Quote
//   y += 100;
//   ctx.fillStyle = '#065f46';
//   ctx.font = 'bold 36px Noto Sans Gujarati, sans-serif';
//   ctx.fillText('હું જાઉં છું મારા વતન,', rightX, y);
//   y += 40;
//   ctx.fillText('તમે આવો છો ને……….?', rightX, y);

//   // Bottom Date & Location (aligned to right block)
//   ctx.font = '20px Noto Sans Gujarati, sans-serif';
//   ctx.fillStyle = '#065f46';
//   const bottomY = height - 50;
//   ctx.fillText('📅 તારીખ: ૨૮ અને ૨૯ જૂન, ૨૦૨૫', rightX, bottomY);
//   ctx.fillText('📍 સ્થળ: પ્રાથમિક શાળા, નવા લોઇંચડા', rightX, bottomY + 28);

//   // Save image
//   const imageURL = canvas.toDataURL('image/png');
//   setImageUrl(imageURL);
//   alert('તમારું ફોર્મ સફળતાપૂર્વક મોકલાયું!');
// };

// const generateImage = (userImage) => {
//   const canvas = canvasRef.current;
//   const ctx = canvas.getContext('2d');
//   const width = 800;
//   const height = 370;
//   canvas.width = width;
//   canvas.height = height;

//   // Background
//   ctx.fillStyle = '#ecfdf5';
//   ctx.fillRect(0, 0, width, height);

//   // Border
//   ctx.strokeStyle = '#065f46';
//   ctx.lineWidth = 10;
//   ctx.strokeRect(0, 0, width, height);

//   // 🖼️ Draw user image to fill the left section (entire height)
//   const imageX = 0;
//   const imageY = 0;
//   const imageWidth = 240;
//   const imageHeight = 300;
//   ctx.drawImage(userImage, imageX, imageY, imageWidth, imageHeight);

//   // ✍️ Name below image area (centered horizontally in left panel)
//   ctx.fillStyle = '#065f46';
//   ctx.font = 'bold 24px Noto Sans Gujarati, sans-serif';
//   ctx.textAlign = 'center';

//   const fullText = `${name}`;
//   const maxWidth = 200;
//   const centerX = imageX + imageWidth / 2;
//   let currentY = height - 40; // push text down but above bottom border

//   // Split and wrap name by word
//   const words = fullText.split(' ');
//   let line = '';

//   for (let i = 0; i < words.length; i++) {
//     const testLine = line + (line ? ' ' : '') + words[i];
//     const { width: testWidth } = ctx.measureText(testLine);

//     if (testWidth > maxWidth && line) {
//       ctx.fillText(line, centerX, currentY);
//       line = words[i];
//       currentY += 28;
//     } else {
//       line = testLine;
//     }
//   }
//   if (line) ctx.fillText(line, centerX, currentY);

//   // 📝 Right side text
//   ctx.textAlign = 'left';
//   const rightX = 260;
//   let y = 80;

//   // Title
//   ctx.fillStyle = '#064e3b';
//   ctx.font = 'bold 34px Noto Sans Gujarati, sans-serif';
//   ctx.fillText('🌱🌱 વૃક્ષારોપણ કાર્યક્રમ 🌳🌳', rightX, y);

//   // Quote (center aligned block)
// //   y += 100;
// //   ctx.fillStyle = '#065f46';
// //   ctx.font = 'bold 36px Noto Sans Gujarati, sans-serif';
// //   ctx.textAlign = 'center';
// //   ctx.fillText('હું જાઉં છું મારા વતન,', width / 2 + 120, y);
// //   y += 40;
// //   ctx.fillText('તમે આવો છો ને……….?', width / 2 + 120, y);


// y += 100;

// const fullQuote = '🌿 હું જાઉં છું મારા વતન, તમે આવો છો ને……….? 🌿';
// ctx.font = 'bold 40px Noto Sans Gujarati, sans-serif';
// ctx.textAlign = 'center';

// const quoteX = width / 2 + 120;
// const quoteY = y;
// const quoteWidth = ctx.measureText(fullQuote).width;
// const quotePadding = 20;
// const quoteHeight = 60;

// // 🌿 Soft green highlight box
// ctx.fillStyle = '#d1fae5';  // Tailwind's green-100 (soft green)
// ctx.fillRect(
//   quoteX - quoteWidth / 2 - quotePadding,
//   quoteY - quoteHeight + 20,
//   quoteWidth + 2 * quotePadding,
//   quoteHeight
// );

// // 🟢 Border for quote block
// ctx.strokeStyle = '#10b981';  // Tailwind's emerald-500
// ctx.lineWidth = 3;
// ctx.strokeRect(
//   quoteX - quoteWidth / 2 - quotePadding,
//   quoteY - quoteHeight + 20,
//   quoteWidth + 2 * quotePadding,
//   quoteHeight
// );

// // ✨ Shadow for text
// ctx.shadowColor = 'rgba(0, 128, 96, 0.25)';  // slight deep green
// ctx.shadowBlur = 6;
// ctx.shadowOffsetX = 2;
// ctx.shadowOffsetY = 2;

// // 🌱 Quote Text
// ctx.fillStyle = '#065f46';  // deep green
// ctx.fillText(fullQuote, quoteX, quoteY);

// // ♻️ Reset Shadow
// ctx.shadowColor = 'transparent';
// ctx.shadowBlur = 0;
// ctx.shadowOffsetX = 0;
// ctx.shadowOffsetY = 0;

// y += 70;

//   // Bottom info (left aligned again)
//   ctx.textAlign = 'left';
//   ctx.font = '20px Noto Sans Gujarati, sans-serif';
//   ctx.fillStyle = '#065f46';
//   const bottomY = height - 50;
//   ctx.fillText('📅 તારીખ: ૨૮ અને ૨૯ જૂન, ૨૦૨૫', rightX, bottomY);
//   ctx.fillText('📍 સ્થળ: પ્રાથમિક શાળા, નવા લોઇંચડા', rightX, bottomY + 28);

//   // Save image
//   const imageURL = canvas.toDataURL('image/png');
//   setImageUrl(imageURL);
//   alert('તમારું ફોર્મ સફળતાપૂર્વક મોકલાયું!');
// };

const generateImage = (userImage) => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext('2d');
  const width = 800;
  const height = 800;
  canvas.width = width;
  canvas.height = height;

  // Background
//   ctx.fillStyle = '#ecfdf5';
//   ctx.fillRect(0, 0, width, height);
const backgroundImage = new Image();
backgroundImage.src = Treebg; // 👈 use public folder or imported asset

backgroundImage.onload = () => {
  ctx.drawImage(backgroundImage, 0, 0, width, height);


  // Border
  ctx.strokeStyle = '#065f46';
  ctx.lineWidth = 10;
  ctx.strokeRect(0, 0, width, height);

  // 🖼️ Draw user image to fill the left section
//   const imageX = 0;
//   const imageY = 0;
//   const imageWidth = 240;
//   const imageHeight = 300;
//   ctx.drawImage(userImage, imageX, imageY, imageWidth, imageHeight);
const imageX = 6;
const imageY = 450;
const imageWidth = 240;
const imageHeight = 240; // Keep square for perfect circle

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

// Draw green circular border
ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
ctx.strokeStyle = 'rgba(0,255,0,0.9)'; // Dark green
ctx.lineWidth = 3;
ctx.stroke();

let nameText = `${name}`;

// ctx.font = 'bold 30px Noto Sans Gujarati, sans-serif';
// ctx.fillStyle = '#CD853F';
// ctx.textAlign = 'center'; // center horizontally

// const nameX = centerX+44;           // same as image center
// const nameY = imageY + imageHeight + 35; // a bit below image bottom

// ctx.fillText(nameText, nameX, nameY);

ctx.font = 'bold 30px Noto Sans Gujarati, sans-serif';
ctx.textAlign = 'center';

const nameX = centerX + 55;
const nameY = imageY + imageHeight + 28;
const paddingX = 20;
const paddingY = 5;

// Measure text width & height
const textMetrics = ctx.measureText(nameText);
const textWidth = textMetrics.width;
const textHeight = 30; // Approximate height since canvas doesn't provide it directly

// Draw rounded rectangle behind the name
const rectX = nameX - textWidth / 2 - paddingX;
const rectY = nameY - textHeight + 5; // Adjust for vertical alignment
const rectWidth = textWidth + paddingX * 2;
const rectHeight = textHeight + paddingY * 2;
const radi = 20;

// Draw background
ctx.fillStyle = 'rgba(0,255,0,0.9)'; // light green background
ctx.beginPath();
ctx.moveTo(rectX + radi, rectY);
ctx.lineTo(rectX + rectWidth - radi, rectY);
ctx.quadraticCurveTo(rectX + rectWidth, rectY, rectX + rectWidth, rectY + radi);
ctx.lineTo(rectX + rectWidth, rectY + rectHeight - radi);
ctx.quadraticCurveTo(rectX + rectWidth, rectY + rectHeight, rectX + rectWidth - radi, rectY + rectHeight);
ctx.lineTo(rectX + radi, rectY + rectHeight);
ctx.quadraticCurveTo(rectX, rectY + rectHeight, rectX, rectY + rectHeight - radi);
ctx.lineTo(rectX, rectY + radi);
ctx.quadraticCurveTo(rectX, rectY, rectX + radi, rectY);
ctx.closePath();
ctx.fill();

// Draw name text on top
ctx.fillStyle = '#4e342e'; // text color
ctx.fillText(nameText, nameX, nameY+2);

  // 📝 Right side text
//   ctx.textAlign = 'left';
//   const rightX = 260;
//   let y = 80;

//   // Title
//   ctx.fillStyle = '#064e3b';
//   ctx.font = 'bold 38px Noto Sans Gujarati, sans-serif';
//   ctx.fillText('🌱🌱 વૃક્ષારોપણ કાર્યક્રમ 🌳🌳', rightX, y);
ctx.textAlign = 'left'; 
const rightX = 260;
let y = 90;

// 👪 Organizing line (ABOVE the title)
ctx.fillStyle = 'orange'; // a nice dark green for contrast
ctx.font = 'bold 24px Noto Sans Gujarati, sans-serif';
ctx.fillText('સમસ્ત નવા લોઇંચડા તથા જૂના લોઇંચડા ગામ પરિવાર દ્વારા આયોજિત', 80, 60);

y += 30; // move down to make space for the title

// 🌱 Title
ctx.fillStyle = '#064e3b';
ctx.font = 'bold 38px Noto Sans Gujarati, sans-serif';
ctx.fillText('🌱🌱 વૃક્ષારોપણ કાર્યક્રમ 🌳🌳', rightX, y+20);
ctx.textAlign = 'left';
  // 📅 Date & Location
//   y += 110;
//   ctx.font = 'bold 24px Noto Sans Gujarati, sans-serif';
//   ctx.fillStyle = '#065f46';
//   ctx.fillText('📅 તારીખ: ૨૮ અને ૨૯ જૂન, ૨૦૨૫', rightX, y);
//   y += 35;
//   ctx.fillText('📍 સ્થળ: પ્રાથમિક શાળા, નવા લોઇંચડા', rightX, y);
// 🟩 Values
ctx.font = 'bold 24px Noto Sans Gujarati, sans-serif';
ctx.textAlign = 'left';
ctx.fillStyle = '#065f46';

const dateText = '📅 તારીખ: ૨૮ અને ૨૯ જૂન, ૨૦૨૫';
const placeText = '📍 સ્થળ: પ્રાથમિક શાળા, નવા લોઇંચડા';

const textX = rightX+20;
const textY = y + 130;
const lineHeight = 35;

// Measure the widest line
const dateWidth = ctx.measureText(dateText).width;
const placeWidth = ctx.measureText(placeText).width;
const bgWidth = Math.max(dateWidth, placeWidth) + 40; // 40px padding
const bgHeight = lineHeight * 2 + 20;
const cornerRadius = 12; // 🟢 Renamed from 'radius'

// Draw rounded rectangle
const bgX = textX - 20; // pad left
const bgY = textY - 28; // move up to start before text

ctx.beginPath();
ctx.moveTo(bgX + cornerRadius, bgY);
ctx.lineTo(bgX + bgWidth - cornerRadius, bgY);
ctx.quadraticCurveTo(bgX + bgWidth, bgY, bgX + bgWidth, bgY + cornerRadius);
ctx.lineTo(bgX + bgWidth, bgY + bgHeight - cornerRadius);
ctx.quadraticCurveTo(bgX + bgWidth, bgY + bgHeight, bgX + bgWidth - cornerRadius, bgY + bgHeight);
ctx.lineTo(bgX + cornerRadius, bgY + bgHeight);
ctx.quadraticCurveTo(bgX, bgY + bgHeight, bgX, bgY + bgHeight - cornerRadius);
ctx.lineTo(bgX, bgY + cornerRadius);
ctx.quadraticCurveTo(bgX, bgY, bgX + cornerRadius, bgY);
ctx.closePath();

ctx.fillStyle = '#d1fae5'; // 🌿 light green background
ctx.fill();
ctx.strokeStyle = '#10b981'; // dark green border
ctx.lineWidth = 2;
ctx.stroke();

// ✅ Set text color & write text
ctx.fillStyle = '#065f46';
ctx.fillText(dateText, textX, textY);
ctx.fillText(placeText, textX, textY + lineHeight);

  // 🌿 Quote moved to bottom
  const fullQuote = '🏡હું જાઉં છું મારા વતન, તમે આવો છો ને…….? 🌿';
  ctx.font = 'bold 34px Noto Sans Gujarati, sans-serif';
  ctx.textAlign = 'center';

  const quoteX = width / 2 +2;
  const quoteY = height - 10;
  const quoteWidth = ctx.measureText(fullQuote).width;
  const quotePadding = 20;
  const quoteHeight = 50;

  // Highlight box
  ctx.fillStyle = '#d1fae5';
  ctx.fillRect(
    quoteX - quoteWidth / 2 - quotePadding,
    quoteY - quoteHeight,
    quoteWidth + 2 * quotePadding,
    quoteHeight
  );

  // Border
  ctx.strokeStyle = '#10b981';
  ctx.lineWidth = 2;
  ctx.strokeRect(
    quoteX - quoteWidth / 2 - quotePadding,
    quoteY - quoteHeight,
    quoteWidth + 2 * quotePadding,
    quoteHeight
  );

  // Shadow
  ctx.shadowColor = 'rgba(0, 128, 96, 0.25)';
  ctx.shadowBlur = 4;
  ctx.shadowOffsetX = 1;
  ctx.shadowOffsetY = 1;

  // Quote text
  ctx.fillStyle = '#065f46';
  ctx.fillText(fullQuote, quoteX, quoteY - 10);

  // Reset shadow
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;

  // Save image
  const imageURL = canvas.toDataURL('image/png');
  setImageUrl(imageURL);
  alert('તમારું ફોર્મ સફળતાપૂર્વક મોકલાયું!');
}
};

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center px-4 py-8"  >
      <div className="bg-white shadow-lg rounded-lg max-w-xl w-full overflow-hidden" >

        {/* Header */}
        {/* <div className="bg-green-600 text-white flex flex-col items-center justify-center p-4">
          <img
            src="https://img.freepik.com/free-vector/tree-planting-concept-illustration_114360-9046.jpg?w=200"
            alt="Tree"
            className="h-20 w-20 rounded-full shadow-md mb-2"
          />
          <h1 className="text-xl sm:text-2xl font-bold text-center">
            🌱 વૃક્ષારોપણ કાર્યક્રમ
          </h1>
        </div> */}
        <div
  className="bg-cover bg-center text-white flex flex-col items-center justify-center p-4"
  style={{
    height:"180px",
    backgroundImage: `url(${TreeImage})`,
    //backgroundColor: "rgba(0, 0, 0, 0.4)", // optional dark overlay if text is unreadable
    backgroundBlendMode: "overlay" // blends bg color with image for better text readability
  }}
>
  {/* <img
    src={Tree2}
    alt="Tree"
    className="h-20 w-20 rounded-full shadow-md mb-2"
  /> */}
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
          {/* <p className="text-lg font-semibold">તમારું કસ્ટમ ઇમેજ:</p> */}
          <img
            src={imageUrl}
            alt="Generated"
            className="mt-2 w-full max-w-xl border rounded shadow-md"
          />
          <a
            href={imageUrl}
            download={`invitation-${name}.png`}
            className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            ડાઉનલોડ કરો
          </a>
            {/* WhatsApp Share */}
    {/* <a
      href={`https://wa.me/?text=${encodeURIComponent(
        `🌱 મારું વૃક્ષારોપણ ઇમેજ બનાવ્યું છે!\n\nનામ: ${name}\n👇 અહીંથી જુઓ અને ડાઉનલોડ કરો:\n\n${imageUrl}`
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
    >
      WhatsApp પર શેર કરો
    </a> */}
        </div>
      )}
    </div>
  );
};

export default FormInvitation;
