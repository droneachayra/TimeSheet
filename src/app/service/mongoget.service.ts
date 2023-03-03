import { Injectable } from '@angular/core';
import { MongoClient, Db } from 'mongodb';

const mongoose=require('mongoose');
const bodyParser = require('body-parser');
const express=require('express');
const app=express();

@Injectable({
  providedIn: 'root'
})
export class MongogetService {

  private client!: MongoClient;
  private db!: Db;

  constructor() {
    this.connectToMongoDB();
  }

  async connectToMongoDB() {
    // const uri = 'mongodb://localhost:27017/my-database'; // replace with your MongoDB connection URI
    // this.client = await MongoClient.connect(uri);
    mongoose.connect('mongodb+srv://time1:time1@cluster0.8qkzhs0.mongodb.net/db?retryWrites=true&w=majority',{useUnifiedTopology:true})
    this.db=mongoose.connection
    app.use(bodyParser.urlencoded({ extended: false }))
    // this.db = this.client.db();
  }

  async getAllRecords(collectionName: string): Promise<any[]> {
    const collection = this.db.collection(collectionName);
    const records = await collection.find({}).toArray();
    return records;
  }
}
