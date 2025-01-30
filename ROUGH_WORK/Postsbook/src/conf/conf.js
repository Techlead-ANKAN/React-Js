const appwrite_conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRTE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRTE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRTE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRTE_BUCKET_ID)
};

export default appwrite_conf;