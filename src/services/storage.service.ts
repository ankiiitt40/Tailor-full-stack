import { 
  ref, 
  uploadBytesResumable, 
  getDownloadURL,
  deleteObject
} from "firebase/storage";
import { storage } from "../firebase/config";

export const storageService = {
  // Upload file with progress tracking
  uploadFile(
    file: File, 
    path: string, 
    onProgress?: (progress: number) => void
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, `${path}/${Date.now()}_${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          if (onProgress) {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            onProgress(progress);
          }
        },
        (error) => {
          console.error("Upload error:", error);
          reject(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        }
      );
    });
  },

  // Delete file
  async deleteFile(fileUrl: string) {
    try {
      const fileRef = ref(storage, fileUrl);
      await deleteObject(fileRef);
    } catch (error) {
      console.error("Delete error:", error);
      throw error;
    }
  }
};
