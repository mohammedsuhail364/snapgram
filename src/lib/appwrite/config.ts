import { Client, Account, Databases, Storage, Avatars } from "appwrite";
export const appwriteConfig = {
  url: "https://cloud.appwrite.io/v1",
  projectId: "675d82a2001d7d4f2643",
  databaseId: "675eeff0002ccdfea946",
  storageId: "675eef80002454dcbd1a",
  userCollectionId: "675ef07b0003259cc7d8",
  postCollectionId: "675ef03f0030d70e5186",
  savesCollectionId: "675ef09800288ee115d2",
};

export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
