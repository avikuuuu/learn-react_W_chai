/* eslint-disable no-useless-catch */
import conf from "../conf/Config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Services {
  client = new Client();
  databases;

  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ tittle, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appWriteDataBaseId,
        conf.appWriteCollectionId,
        slug,
        {
          tittle,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: CreatePost :: error", error);
    }
  }

  async updatePost(slug, { tittle, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appWriteDataBaseId,
        conf.appWriteCollectionId,
        slug,
        {
          tittle,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: UpdatePost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appWriteDataBaseId,
        conf.appWriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: DeletePost :: error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appWriteDataBaseId,
        conf.appWriteProjectId,
        slug
      );
    } catch (error) {
      console.log(`Appwrite service :: GetPost :: error  ${error}`);
      return false;
    }
  }

  async getPosts(Queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.getDocument(
        conf.appWriteDataBaseId,
        conf.appWriteProjectId,
        Queries
      );
    } catch (error) {
      console.log(`Appwrite service :: GetPosts :: error  ${error}`);
      return false;
    }
  }

  //file upload services

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appWriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(conf.appWriteBucketId,fileId)
        return true
        
    } catch (error) {
        console.log("Appwrite service :: deleteFile :: error", error);
        return false
        
    }

  }

  getFilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appWriteBucketId,
        fileId
    )
  }
}

const services = new Services();

export default services;
