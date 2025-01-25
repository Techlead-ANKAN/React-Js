import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


// Creating a class and exporting it
export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async login({email, password}){
        try{
            return await this.account.createEmailSession(email, password);
        }catch(error){
            throw error;
        }
    }

    async createAccount({email, password, name}){
        try{    
            const userAccount = await this.account.create(ID.unique(), email, password, name);
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

    async getCurrentUser(){
        try{
            await this.account.get();
        }catch(error){
            throw error;
        }
        
        // if no account found then return null or if error then you handled the error
        return null;
    }


    async logout(){
        try{
            await this.account.deleteSessions();
        }catch(error){
            throw error;
        }
    }

}; 

const authService_obj = new AuthService(); // creating an object of the class

export default authService_obj; // exporting the object
