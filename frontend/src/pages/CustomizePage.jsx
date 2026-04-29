import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation.jsx';

export default function CustomizePage({ 
  capturedPhotos, 
  selectedFilter, 
  selectedFrameColor, 
  setSelectedFrameColor 
}) {
  const [selectedShape, setSelectedShape] = useState('none');
  const [selectedStickers, setSelectedStickers] = useState([]);
  const [addDate, setAddDate] = useState(false);
  const [addTime, setAddTime] = useState(false);

  const frameColors = [
    { id: 'multicolor', color: 'linear-gradient(45deg, #ff6b9d, #4ecdc4, #45b7d1, #96ceb4, #feca57)', name: 'Rainbow' },
    { id: 'pink', color: '#ff6b9d', name: 'Pink' },
    { id: 'cyan', color: '#4ecdc4', name: 'Cyan' },
    { id: 'yellow', color: '#feca57', name: 'Yellow' },
    { id: 'green', color: '#96ceb4', name: 'Green' },
    { id: 'purple', color: '#a55eea', name: 'Purple' },
    { id: 'beige', color: '#f5deb3', name: 'Beige' },
    { id: 'red', color: '#ff3838', name: 'Red' },
    { id: 'white', color: '#ffffff', name: 'White' },
    { id: 'black', color: '#2c2c54', name: 'Black' },
    { id: 'hotpink', color: '#ff006e', name: 'Hot Pink' },
    { id: 'orange', color: '#fb8500', name: 'Orange' },
    { id: 'brown1', color: '#8d5524', name: 'Brown' },
    { id: 'brown2', color: '#a0633f', name: 'Light Brown' },
    { id: 'blue1', color: '#023047', name: 'Navy' },
    { id: 'green2', color: '#386641', name: 'Forest' },
    { id: 'blue2', color: '#219ebc', name: 'Sky Blue' },
    { id: 'coral', color: '#ffb3ba', name: 'Coral' },
    { id: 'lavender', color: '#bae1ff', name: 'Lavender' },
    { id: 'mint', color: '#baffc9', name: 'Mint' },
    { id: 'peach', color: '#ffffba', name: 'Peach' },
    { id: 'rose', color: '#ffdfba', name: 'Rose' },
    { id: 'gold', color: '#ffd700', name: 'Gold' },
    { id: 'silver', color: '#c0c0c0', name: 'Silver' },
    { id: 'teal', color: '#008080', name: 'Teal' },
    { id: 'maroon', color: '#800000', name: 'Maroon' },
    { id: 'olive', color: '#808000', name: 'Olive' },
    { id: 'navy', color: '#000080', name: 'Navy Blue' },
    { id: 'lime', color: '#00ff00', name: 'Lime' },
    { id: 'aqua', color: '#00ffff', name: 'Aqua' },
    { id: 'fuchsia', color: '#ff00ff', name: 'Fuchsia' },
    { id: 'gray1', color: '#808080', name: 'Gray' },
    { id: 'gray2', color: '#a9a9a9', name: 'Light Gray' },
    { id: 'indigo', color: '#4b0082', name: 'Indigo' },
    { id: 'violet', color: '#8a2be2', name: 'Violet' },
    { id: 'crimson', color: '#dc143c', name: 'Crimson' },
    { id: 'darkgreen', color: '#006400', name: 'Dark Green' },
    { id: 'chocolate', color: '#d2691e', name: 'Chocolate' },
    { id: 'salmon', color: '#fa8072', name: 'Salmon' },
    { id: 'khaki', color: '#f0e68c', name: 'Khaki' },
    { id: 'plum', color: '#dda0dd', name: 'Plum' },
    { id: 'tan', color: '#d2b48c', name: 'Tan' }
  ];

  const shapes = ['none', 'square', 'circle', 'heart'];

  const stickers = [
    'none', 'star', 'clover', 'lips', 'heart2', 'bow', 'music', 'heart3', 'sparkle', 'eyes',
    'star2', 'chick', 'bear', 'bird', 'camera', 'cat', 'dog', 'flower', 'house', 'triangle1',
    'triangle2', 'new1', 'money', 'cherry', 'cake', 'beer', 'coffee', 'pizza', 'star3', 'love',
    'trophy', 'new2'
  ];

  const languages = ['ENG', 'KOR', 'CN'];

  const getStickerEmoji = (sticker) => {
    const emojiMap = {
      'star': '⭐', 'clover': '🍀', 'lips': '💋', 'heart2': '💖', 'bow': '🎀',
      'music': '🎵', 'heart3': '💝', 'sparkle': '✨', 'eyes': '👀', 'star2': '🌟',
      'chick': '🐤', 'bear': '🐻', 'bird': '🐦', 'camera': '📷', 'cat': '🐱',
      'dog': '🐕', 'flower': '🌸', 'house': '🏠', 'triangle1': '🔺', 'triangle2': '🔻',
      'new1': '🆕', 'money': '💰', 'cherry': '🍒', 'cake': '🎂', 'beer': '🍺',
      'coffee': '☕', 'pizza': '🍕', 'star3': '💫', 'love': '💕', 'trophy': '🏆', 'new2': '🆕'
    };
    return emojiMap[sticker] || '⭐';
  };

  return (
    <div className="page-container">
      <Navigation />
      <div className="customize-page">
        <div className="customize-header">
          <h1>customize your photo</h1>
        </div>
        
        <div className="customize-content">
          <div className="preview-section">
            <div className="photo-preview">
              <div 
                className="photo-frame"
                style={{
                  background: frameColors.find(c => c.id === selectedFrameColor)?.color || '#ffffff',
                  padding: '20px',
                  borderRadius: '12px'
                }}
              >
                                 {capturedPhotos.slice(0, 4).map((photo, index) => (
                   <div key={index} className="photo-slot large">
                     <div className="photo-container" style={{ position: 'relative' }}>
                       <img 
                         src={photo} 
                         alt={`Captured ${index + 1}`}
                         style={{
                           width: '100%',
                           height: '100%',
                           objectFit: 'cover',
                           borderRadius: selectedShape === 'circle' ? '50%' : selectedShape === 'heart' ? '50% 50% 0 0' : '8px'
                         }}
                       />
                        {/* Apply selected stickers on the frame */}
                       {selectedStickers.map((sticker, stickerIndex) => {
                         // Authentic sticker positions that overlap the photos and frame naturally
                         const stickerPositions = [
                           { top: '-15px', left: '-10px', transform: 'rotate(-15deg)' },
                           { bottom: '-20px', right: '-5px', transform: 'rotate(20deg)' },
                           { top: '40%', left: '-25px', transform: 'rotate(-5deg)' },
                           { top: '-15px', right: '10px', transform: 'rotate(12deg)' },
                           { bottom: '-10px', left: '20px', transform: 'rotate(-25deg)' },
                           { bottom: '30%', right: '-20px', transform: 'rotate(15deg)' },
                         ];
                         
                         // Determine which photo this sticker should attach to based on its index
                         if (stickerIndex % 4 !== index) return null;
                         
                         const pos = stickerPositions[stickerIndex % stickerPositions.length];
                         
                         return (
                           <div 
                             key={stickerIndex}
                             className={`sticker-overlay ${sticker}`}
                             style={{
                               position: 'absolute',
                               ...pos,
                               zIndex: 10,
                             }}
                           >
                             {getStickerEmoji(sticker)}
                           </div>
                         );
                       })}
                     </div>
                   </div>
                 ))}
                {Array.from({ length: Math.max(0, 4 - capturedPhotos.length) }).map((_, index) => (
                  <div key={`empty-${index}`} className="photo-slot large empty"></div>
                ))}
              </div>
              <div className="preview-footer">photobooth</div>
            </div>
          </div>
          
          <div className="options-section">
            <div className="option-group">
              <h3>Frame Color</h3>
              <div className="color-grid">
                {frameColors.map((colorObj) => (
                  <button
                    key={colorObj.id}
                    className={`color-option ${selectedFrameColor === colorObj.id ? 'selected' : ''}`}
                    onClick={() => setSelectedFrameColor(colorObj.id)}
                    style={{ 
                      background: colorObj.color,
                      border: selectedFrameColor === colorObj.id ? '3px solid var(--dark-pink)' : '3px solid transparent'
                    }}
                    title={colorObj.name}
                  />
                ))}
              </div>
            </div>
            
            <div className="option-group">
              <h3>Photo Shape:</h3>
              <div className="shape-options">
                {shapes.map((shape) => (
                  <button
                    key={shape}
                    className={`shape-option ${selectedShape === shape ? 'selected' : ''}`}
                    onClick={() => setSelectedShape(shape)}
                  >
                    <div className={`shape-preview ${shape}`}></div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="option-group">
              <h3>Stickers</h3>
              <div className="stickers-grid">
                {stickers.map((sticker) => (
                  <button
                    key={sticker}
                    className={`sticker-option ${selectedStickers.includes(sticker) ? 'selected' : ''}`}
                     onClick={() => {
                       if (selectedStickers.includes(sticker)) {
                         setSelectedStickers(selectedStickers.filter(s => s !== sticker));
                       } else {
                         // Allow up to 6 stickers for a nice look
                         if (selectedStickers.length < 6) {
                           setSelectedStickers([...selectedStickers, sticker]);
                         }
                       }
                     }}
                  >
                    {sticker === 'new1' || sticker === 'new2' ? <span className="new-badge">new</span> : null}
                    <div className={`sticker-preview ${sticker}`}></div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="option-group">
              <h3>Logo:</h3>
              <div className="language-options">
                {languages.map((lang) => (
                  <button key={lang} className="language-btn">{lang}</button>
                ))}
              </div>
              <div className="checkbox-options">
                <label>
                  <input 
                    type="checkbox" 
                    checked={addDate}
                    onChange={(e) => setAddDate(e.target.checked)}
                  />
                  Add Date
                </label>
                <label>
                  <input 
                    type="checkbox"
                    checked={addTime} 
                    onChange={(e) => setAddTime(e.target.checked)}
                  />
                  Add Time
                </label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="customize-actions">
          <Link to="/capture" className="btn-secondary">Back</Link>
          <button 
            className="btn-primary"
            onClick={async () => {
              // Create a canvas to combine photos and frame
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d');
              
              // Maintain 4:3 aspect ratio for photos on the canvas
              const padding = 30;
              const spacing = 20;
              const photoWidth = 540; // High quality width
              const photoHeight = 405; // 4:3 aspect ratio (540 * 3/4)
              const footerHeight = 80;
              
              const totalPhotos = Math.min(capturedPhotos.length, 4);
              canvas.width = photoWidth + (padding * 2);
              canvas.height = padding + (totalPhotos * photoHeight) + ((totalPhotos - 1) * spacing) + footerHeight;
              
              // Set frame color
              const frameColor = frameColors.find(c => c.id === selectedFrameColor)?.color || '#ffffff';
              if (frameColor.includes('gradient')) {
                const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
                gradient.addColorStop(0, '#ffb7c5');
                gradient.addColorStop(1, '#ffe4e1');
                ctx.fillStyle = gradient;
              } else {
                ctx.fillStyle = frameColor;
              }
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              
              // Helper to draw heart shape
              const drawHeart = (ctx, x, y, width, height) => {
                ctx.beginPath();
                const topCurveHeight = height * 0.3;
                ctx.moveTo(x + width / 2, y + topCurveHeight);
                ctx.bezierCurveTo(x + width / 2, y, x, y, x, y + topCurveHeight);
                ctx.bezierCurveTo(x, y + (height + topCurveHeight) / 2, x + width / 2, y + height, x + width / 2, y + height);
                ctx.bezierCurveTo(x + width / 2, y + height, x + width, y + (height + topCurveHeight) / 2, x + width, y + topCurveHeight);
                ctx.bezierCurveTo(x + width, y, x + width / 2, y, x + width / 2, y + topCurveHeight);
                ctx.closePath();
              };

              // Add photos with stickers
              for (let i = 0; i < totalPhotos; i++) {
                const y = padding + (i * (photoHeight + spacing));
                
                // Create photo image
                const img = new Image();
                img.crossOrigin = 'anonymous';
                
                await new Promise((resolve) => {
                  img.onload = () => {
                    // Draw photo
                    ctx.save();
                    
                    // Apply shape clipping
                    if (selectedShape === 'circle') {
                      ctx.beginPath();
                      ctx.arc(padding + photoWidth/2, y + photoHeight/2, photoHeight/2, 0, 2 * Math.PI);
                      ctx.clip();
                    } else if (selectedShape === 'heart') {
                      drawHeart(ctx, padding, y, photoWidth, photoHeight);
                      ctx.clip();
                    } else {
                      // Round rect for square
                      ctx.beginPath();
                      ctx.roundRect ? ctx.roundRect(padding, y, photoWidth, photoHeight, 16) : ctx.rect(padding, y, photoWidth, photoHeight);
                      ctx.clip();
                    }
                    
                    // Draw image keeping aspect ratio (cover)
                    const imgRatio = img.width / img.height;
                    const boxRatio = photoWidth / photoHeight;
                    let drawWidth = photoWidth;
                    let drawHeight = photoHeight;
                    let drawX = padding;
                    let drawY = y;
                    
                    if (imgRatio > boxRatio) {
                      drawWidth = photoHeight * imgRatio;
                      drawX = padding - (drawWidth - photoWidth) / 2;
                    } else {
                      drawHeight = photoWidth / imgRatio;
                      drawY = y - (drawHeight - photoHeight) / 2;
                    }
                    
                    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
                    ctx.restore();
                    
                    resolve();
                  };
                  img.src = capturedPhotos[i];
                });
              }
              
              // Draw stickers after all photos to ensure they overlay correctly
              selectedStickers.forEach((sticker, index) => {
                const stickerPositions = [
                  { dx: -20, dy: -25, r: -15 * Math.PI / 180 },
                  { dx: photoWidth - 10, dy: photoHeight - 30, r: 20 * Math.PI / 180 },
                  { dx: -35, dy: photoHeight / 2 - 20, r: -5 * Math.PI / 180 },
                  { dx: photoWidth - 15, dy: -20, r: 12 * Math.PI / 180 },
                  { dx: 20, dy: photoHeight - 15, r: -25 * Math.PI / 180 },
                  { dx: photoWidth - 40, dy: photoHeight / 2 + 30, r: 15 * Math.PI / 180 },
                ];
                
                const photoIndex = index % totalPhotos;
                const pos = stickerPositions[index % stickerPositions.length];
                const y = padding + (photoIndex * (photoHeight + spacing));
                
                ctx.save();
                ctx.translate(padding + pos.dx, y + pos.dy);
                ctx.rotate(pos.r);
                ctx.font = '64px Arial';
                ctx.fillStyle = '#333';
                
                // Add soft shadow to stickers
                ctx.shadowColor = 'rgba(0,0,0,0.3)';
                ctx.shadowBlur = 8;
                ctx.shadowOffsetX = 3;
                ctx.shadowOffsetY = 3;
                
                ctx.fillText(getStickerEmoji(sticker), 0, 0);
                ctx.restore();
              });
              
              // Add photobooth text
              ctx.fillStyle = '#333';
              ctx.font = '800 24px system-ui, sans-serif';
              ctx.textAlign = 'center';
              ctx.letterSpacing = '4px';
              ctx.fillText('PHOTOBOOTH', canvas.width/2, canvas.height - 30);
              
              // Download
              const link = document.createElement('a');
              link.download = `photobooth-${Date.now()}.png`;
              link.href = canvas.toDataURL('image/png', 1.0);
              link.click();
            }}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
