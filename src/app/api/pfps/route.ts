import express from "express";
import { v2 as cloudinary } from "cloudinary";
import { PrismaClient } from "@prisma/client";

cloudinary.config({
  cloud_name: "dluqhaqok",
  api_key: "489949448129399",
  api_secret: "yF1_p3iW-YI3wA3HYCiVrydTxEM",
});

const prisma = new PrismaClient();
const router = express.Router();

async function uploadImage(file: Express.Multer.File) {
  // Upload image to Cloudinary
  const result = await cloudinary.uploader.upload(file.path);

  // Store the image URL in the database
  const imageUrl = await prisma.image.create({
    data: {
      imageUrl: result.url,
    },
  });

  return imageUrl;
}

