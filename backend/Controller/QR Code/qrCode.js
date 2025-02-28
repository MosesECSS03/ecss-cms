import QRCode from 'qrcode';
import fs from 'fs';

class QRCodeGenerator {
    constructor(text) {
        this.text = text;
        this.options = {
            errorCorrectionLevel: 'H', // High error correction
            type: 'image/jpeg', // Output type
            quality: 1, // JPEG quality (0 to 1)
        };
    }

    // Method to generate QR code and save it as a JPG file
    async generate() {
        try {
            // Generate QR code as a buffer
            const buffer = await QRCode.toBuffer(this.text, this.options);

            // Save the buffer to a JPG file
            const filename = 'Nagomi Pastel Art Appreciation - CT Hub.jpg'; 
            fs.writeFileSync(filename, buffer);
            console.log(`QR code generated and saved as ${filename}`);
        } catch (error) {
            console.error('Error generating QR code:', error);
        }
    }
}

// Usage
const qrCodeGenerator = new QRCodeGenerator('https://ecss.org.sg/product/%e6%97%a5%e6%9c%ac%e5%92%8c%e8%b0%90%e7%b2%89%e5%bd%a9%e4%bd%93%e9%aa%8c%e7%8f%adnagomi-pastel-art-appreciation-ct-hub/');
qrCodeGenerator.generate();
