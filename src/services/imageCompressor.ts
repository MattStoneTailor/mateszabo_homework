export const imageCompressor = (imageSrc, maxWidth) => {
  const convertedMaxWidth = parseInt(maxWidth, 10);
  const canvas = <HTMLCanvasElement>document.createElement("canvas");
  const img = document.createElement("img");

  return new Promise((resolve, reject) => {
    img.crossOrigin = "Anonymous";
    img.onload = function () {
      let width = img.width;
      let height = img.height;

      if (width > convertedMaxWidth) {
        height = Math.round((height *= convertedMaxWidth / width));
        width = convertedMaxWidth;
      }

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
      ctx.imageSmoothingEnabled = true;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, width, height);

      resolve(canvas.toDataURL("image/jpeg", 1));
    };
    img.onerror = function (err) {
      reject(err);
    };
    img.src = imageSrc;
  });
};
