const conf = {
    appwriteUrl: String(process.env.REACT_APP_APPWRITE_URL),
    appwriteProjectId: String(process.env.REACT_APP_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(process.env.REACT_APP_APPWRITE_DATABASE-ID),
    appwriteCollectionId: String(process.env.REACT_APP_APPWRITE_COLLECTION-ID),
    appwriteBucketId: String(process.env.REACT_APP_APPWRITE_BUCKET-ID)
}

export default conf