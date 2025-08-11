import { Account, Client, ID } from "appwrite"
import config from "../config"


const client = new Client
client
    .setEndpoint(config.url)
    .setProject(config.id)
const account = new Account(client)
const AuthServices = {
    Sign_Up: async ({ email, password, name }) => {
        try {
            const userAccount = await account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return await AuthServices.Login({ email, password });
            }
        }
        catch (error) {
            console.log(`ERROR : SERVICE AUTH.TS : createAccount ${error}`);
        }
    },
    Login: async ({ email, password }) => {
        try {
            return await account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log(`ERROR : SERVICE AUTH.JS : login ${error}`);
        }
    },
    Current_User: async () => {
        try {
            return await account.get()

        } catch (error) {
            console.log(`ERROR : SERVICE AUTH.JS : currrentUser ${error}`);
        }
        return null;
    },
    Logout: async () =>{
          try {
            await account.deleteSessions();
        } catch (error) {
            console.log(`ERROR : SERVICE AUTH.JS : logout ${error}`);
        }
    }

}

export default AuthServices