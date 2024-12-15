import { Client, Account, Databases, Storage, Avatars } from "appwrite";
export const appwriteConfig = {
  projectId:'675d82a2001d7d4f2643',
  url:'https://cloud.appwrite.io/v1',
  
};


export const client =new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

export const account =new Account(client);
export const databases =new Databases(client);
export const storage =new Storage(client);
export const avatars =new Avatars(client);