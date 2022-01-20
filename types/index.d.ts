declare class IQrWithLogo {
  ERRORS = {
    INSUFF_PARAMS: {
      name: "InsufficientParameters Error",
      message: " is required when outputting QR code ",
    },
    ERR_CK: {
      name: "ErrorChecking Error",
      message: "Error occurred while error-checking parameters",
    },
    INVALID_IMGFILE: {
      name: "InvalidImageFilePath Error",
      message: " is an invalid image file path for the parameter ",
    },
  };
  async generateQRWithLogo(
    embedded_data: any,
    logo_image_path: string,
    qr_options: any,
    output_type: any,
    saveas_file_name: string,
    callback: fn
  ): Promise<void>;
  async generateQR(
    embedded_data: any,
    options: any,
    callback: fn
  ): Promise<void>;
  async saveAsPNG(b64: string, filename: string, callback: fn): Promise<void>;
  async addLogoToQRImage(
    qr_image_path: string,
    logo_image_path: string,
    output_type: any,
    saveas_file_name: string,
    callback: fn
  ): Promise<void>;
}

export default IQrWithLogo;