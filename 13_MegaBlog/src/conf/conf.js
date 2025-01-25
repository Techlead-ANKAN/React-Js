// This is a better way of accessing all the environment variables in string we have code them in such a way the even if some variable is not string then it will be converted in to string and then exported

const conf = {
    appwriteurl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
    appwriteBucketId: String(import.meta.env.VITE_BUCKET_ID),
    appwriteCollectionId: String(import.meta.env.VITE_COLLECTION_ID)

}

export default conf;
