import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite"; // These are the classes and functions that are provided by the Appwrite SDK

export class Service{
    // An instance of the "Client" class
    client = new Client();

    // An instance of the "Database" class
    databases;

    // An instance of the "Storage" class
    bucket;

    // the constructor initializes the client, bucket and databases
    constructor(){
        this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }


    // A method creates a new document in Appwrite database
    
    // Parameters:
    // title: The title of the post.
    // slug: The slug (unique identifier) of the post.
    // content: The content of the post.
    // featuredImage: The URL of the featured image for the post.
    // status: The status of the post (e.g. "active", "draft", etc.).
    // userId: The ID of the user who created the post.
    async createPost({title, slug, content, featuredImage, status, userId})
    {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, // unique identifier for the doc
                
                // these are the data that will be stored in the document
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            throw error;
        }
    }




    // A method to update existing document in Appwrite

    // Parameters:
    // slug: The slug (unique identifier) of the post to update.
    // title: The new title of the post.
    // content: The new content of the post.
    // featuredImage: The new URL of the featured image for the post.
    // status: The new status of the post (e.g. "active", "draft", etc.).
    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,

                // these are the new data that will be stored in the document
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            throw error;
        }
    }



    // A method to delete any existing doc in the Appwrite database

    // Parameter:
    // Slug: unique identifer of the doc that is to be deleted
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true; // returning true if deletion is successfull
        } catch (error) {
            throw error;
            return false; // returning true if deletion is not successfull
        }
    }



    // A method to get the any existing doc in the Appwrite database

    // Parameter:
    // Slug: unique identifer of the doc that is to be deleted
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            throw error;
        }
    }



    // A method to get all the docs whose "status" is "active"

    // queries for getting the posts        key       value
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            throw error;
            return false;
        }
    }



    // -------------------------------- File upload services --------------------------------
    
    
    // A method to upload a new doc in the Appwrite database
    
    // Parameter:
    // file: the file to be uploaded
    async uploadFile(file){
        try {
            // using the createFile() of "Bucket" class 
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(), // unique id for each file that will be uploaded
                file // this is the file to be uploaded
            )
        } catch (error) {
            throw error;
            return false;
        }
    }


    // A method to delete any existing doc in the Appwrite database

    // Parameter:
    // fileId: the id of the file to be deleted
    async deleteFile(fileId){
        try {
            // using the deleteFile() of "Bucket" class
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true; // return true upon successfull deletion
        } catch (error) {
            throw error;
        }
    }


    //  A method to get a preview of an existing doc

    // Parameter:
    // fileId: the id of the file to be previewed
    getFilePreview(fileId){
        // returning the preview using the "getFilePreview()" of the "Bucket" class 
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId // id of the file to be previwed
        )
    }
};

// creating an object of class "Service"
const service = new Service();

// exporting the "service" object of the class "Service"
export default service;