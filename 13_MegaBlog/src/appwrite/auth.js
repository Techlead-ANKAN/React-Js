import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite"; // These are classes from the Appwrite API that are used for authentication


// Creating a class 
export class AuthService {
    client = new Client(); // "client" is an instance of class "Client" from Appwrite
    account; // "account" is an instance of Appwrite class which is used to manage user accounts

    // the constructor initializes the client and account properties
    constructor(){

        // It sets the endpoint and project id of appwrite for the client
        this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.appwriteProjectId);



        // a new instance of the "Account" class is created and assigned to the "account" prooperty. The "Account" class is initialized with "client" instance which provides the required details to interact with Appwrite API.
        this.account = new Account(this.client);
    }


    // a method to login user
    async login({email, password}){
        try{
            // It uses "createEmailSession" method of the "account" object to create a new session of the user
            return await this.account.createEmailSession(email, password);
        }catch(error){
            throw error;
        }
    }


    // a method to create a new user account
    async createAccount({email, password, name}){
        try{    
            // it uses "create" method of the "account" object to create a new account
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            
            // if the account is created then it logs in the user using then "login" method
            if(userAccount){
                return this.login({email, password})
            }
            else{
                return userAccount;
            }
        }catch (error){
            throw error;
        }
    }


    // a method to get the current user's information
    async getCurrentUser(){
        try{
            // it uses the "get" method of the "account" object to retrieve account information
            await this.account.get();
        }catch(error){
            throw error;
        }
        
        // if no account found then return null or if error then you handled the error
        return null;
    }


    // a method to log out user
    async logout(){
        try{
            // it uses the "delete" method of the "account" object to delete all sessions of the current user
            await this.account.deleteSessions();
        }catch(error){
            throw error;
        }
    }

}; 


const authService_obj = new AuthService(); // creating an object of the class

export default authService_obj; // exporting the object
