function getImageURL(imgName){
  try {
    return new URL(`../../assets/${imgName}`, import.meta.url).href;
  } catch (error) {
    console.error('Error loading image:', error);
    return '';
  }
}

export {getImageURL}; 