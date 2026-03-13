// File storage helper — configure with AWS S3 or Cloudinary
// Install: npm install @aws-sdk/client-s3  OR  npm install cloudinary

export async function uploadFile(file: File, folder: string): Promise<string> {
  // TODO: implement with S3 or Cloudinary
  // Return the public URL of the uploaded file
  throw new Error("Storage not configured yet. Set up S3 or Cloudinary.");
}
