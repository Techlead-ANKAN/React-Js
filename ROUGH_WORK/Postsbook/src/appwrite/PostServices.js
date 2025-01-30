import appwrite_conf from "../conf/conf"
import {Client, ID, Databases, Storage, Query} from "appwrite";

export class PostServices{

    client = new this.client();

    databases;

    bucket;

    constructor(){
        thisclient.setEndpoint(appwrite_conf.appwriteUrl).setProject(appwrite_conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    // Posting 
    async createPost({text, img, userID, status}){
        try{
            return await this.databases.createDocument(
                appwrite_conf.appwriteDatabaseId,
                appwrite_conf.appwriteCollectionId,
                docID,
                
                // these are the data that will be stored in the document
                {
                    text,
                    img,
                    userID,
                    status
                }
            )
        }catch(error){
            consosle.log(error);
        }
    }

    // Updating Post
    async updatePost(docID, {new_text, new_img, status}){
        try{
            return await this.databases.updateDocument(
                appwrite_conf.appwriteDatabaseId,
                appwrite_conf.appwriteCollectionId,
                docID, 
                
                // these are the updated data for the post/document
                {
                    new_text,
                    new_img,
                    status
                }
            )
        }catch(error){
            console.log(error);
        }
    }

    // Deleting Post
    async deletPost(docID){
        try{
            return await this.databases.getDocument(
                appwrite_conf.appwriteDatabaseId,
                appwrite_conf.appwriteCollectionId,
                docID
            )
            return true;
        }catch(error){
            console.log(error);
            return false;
        }
    }

    // Getting Posts
    async getPosts(queries = [Query.equal("status", "active")]){
        try{
            return await this.databases.listDocuments(
                appwrite_conf.appwriteDatabaseId,
                appwrite_conf.appwriteCollectionId,
                queries
            )
        }catch(error){
            console.log(error);
            return false;
        }
    }

    // image upload
    async uploadImg(img){
        try{
            return await this.bucket.createFile(
                appwrite_conf.appwriteBucketId,
                ID.unique(),
                img
            )
        }catch (error){
            console.log(error);
        }
    }

    // image delete
    async deleteImg(imgID){
        try{
            await this.bucket.deleteFile(
                appwrite_conf.appwriteBucketId,
                imgID
            )
            return true;
        }catch(error){
            console.log(error)
        }
    }

    // image preview
    async getImagePreview(imgID){
        try{
            return this.bucket.getFilePreview(
                appwrite_conf.appwriteBucketId,
                imgID
            )
        }catch(error){
            console.log(error);
        }
    }
};

const postservice_obj = new PostServices();

export default postservice_obj;