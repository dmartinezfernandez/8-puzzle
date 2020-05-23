const data = [];

/** Load image and split to an array. */
function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            let size = Math.min(img.naturalWidth, img.naturalHeight);
            size -= size % 3;
            const canvas = document.createElement('canvas');
            canvas.width = size / 3;
            canvas.height = size / 3;
            for (let i = 0; i < 9; i++) {
                canvas.getContext('2d').drawImage(img, -(i % 3) * size / 3, -Math.floor(i / 3) * size / 3, size, size);
                data[i] = canvas.toDataURL();
            }
            resolve();
        };
        img.onerror = reject;
    });
}

function getImage(index) {
    return data[index];
}

export { getImage, loadImage };