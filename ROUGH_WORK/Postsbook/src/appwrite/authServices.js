import appwrite_conf from "../conf/conf";
import {Client, Account, ID} from "appwrite";


export class AuthServices {

    client = new Client();
    account;

    constructor(){
        this.client.setEndpoint(appwrite_conf.appwriteUrl).setProject(appwrite_conf.appwriteProjectId);

        this.account = new Account(this.client);
    }


    // Login
    async login({email, password}){
        try{
            return await this.account.createEmailSession(email, password);
        }catch(error){
            console.log(error);
        }
    }

    // SignUp
    async signup({email, password, username}){
        try {
        const userAccount = await this.account.create(ID.unique(), email, password, username);
        if(userAccount){
            return this.login({email, password})
        }
        else{
            return userAccount
        }
        } catch (error) {
            console.log(error);
        }
    }

    // Current User
    async getCurrentUser(){
        try{
            await this.account.get();
        }catch(error){
            console.log(error);
        }

        return null;
    }


    // Logout
    async logout(){
        try{
            await this.account.deleteSessions();
        }catch(error){
            console.log(error);
        }
    }


};

const authservice_obj = new AuthServices();

export default authservice_obj;