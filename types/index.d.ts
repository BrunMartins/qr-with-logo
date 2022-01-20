declare class IQrWithLogo {
  ERRORS: any;
  generateQRWithLogo(
    embedded_data: any,
    logo_image_path: string,
    qr_options: any,
    output_type: any,
    saveas_file_name: string,
    callback: any
  ): Promise<void>;
  generateQR(embedded_data: any, options: any, callback: any): Promise<void>;
  saveAsPNG(b64: string, filename: string, callback: any): Promise<void>;
  addLogoToQRImage(
    qr_image_path: string,
    logo_image_path: string,
    output_type: any,
    saveas_file_name: string,
    callback: any
  ): Promise<void>;
}

export default IQrWithLogo;
