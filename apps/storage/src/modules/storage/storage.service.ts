import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateStorageInput } from './dto/create-storage.input';
import { UpdateStorageInput } from './dto/update-storage.input';
import {
  GetObjectCommand,
  ListObjectsV2Command,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { randomFileName } from 'src/utils/tool';
import { extname } from 'path';
import { ConfigService } from '@nestjs/config';
import * as mime from 'mime-types';
@Injectable()
export class StorageService implements OnModuleInit {
  s3: S3Client;
  constructor(private readonly configService: ConfigService) {
    this.s3 = new S3Client({
      region: process.env.S3_REGION || 'auto',
      endpoint: process.env.S3_ENDPOINT || '',
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY || '',
        secretAccessKey: process.env.S3_SECRET_KEY || '',
      },
    });
  }

  onModuleInit() {
    // Check all required env variables are set
    if (!process.env.S3_BUCKET) {
      console.log('S3_BUCKET is not set');
    }

    if (!process.env.S3_REGION) {
      console.log('S3_REGION is not set');
    }

    if (!process.env.S3_ENDPOINT) {
      console.log('S3_ENDPOINT is not set');
    }

    if (!process.env.S3_ACCESS_KEY) {
      console.log('S3_ACCESS_KEY_ID is not set');
    } else {
      console.log('S3_ACCESS_KEY_ID is set', process.env.S3_ACCESS_KEY);
    }

    if (!process.env.S3_SECRET_KEY) {
      console.log('S3_SECRET_ACCESS_KEY is not set');
    }

    console.log('StorageService onModuleInit');
  }

  async getFile(name: string) {
    const res = await this.s3.send(
      new GetObjectCommand({
        Bucket: process.env.S3_BUCKET,
        Key: name,
      })
    );
    return res.Body.transformToWebStream();
  }

  async getViewUrl(name: string) {
    const command = new GetObjectCommand({
      Bucket: process.env.S3_BUCKET,
      Key: name,
    });
    const url = await getSignedUrl(this.s3, command, { expiresIn: 3600 });
    return url;
  }

  async getUrl(name: string) {
    const command = new GetObjectCommand({
      Bucket: process.env.S3_BUCKET,
      Key: name,
    });
    const url = await getSignedUrl(this.s3, command, { expiresIn: 3600 });
    return url;
  }

  async getUploadUrl(extension: string) {
    const contentType = mime.lookup(extension) || '';
    if (!contentType) throw new Error('Invalid file extension');
    const fileKey = `${randomFileName()}${extension}`;
    const command = new PutObjectCommand({
      Key: fileKey,
      Bucket: process.env.S3_BUCKET,
      ACL: 'public-read',
      ContentType: contentType,
    });

    const signedUrl = await getSignedUrl(this.s3, command, { expiresIn: 3600 });
    console.log(
      '🚀 ~ file: storage.service.ts:86 ~ StorageService ~ getUploadUrl ~ signedUrl:',
      signedUrl
    );

    const parsedUrl = new URL(signedUrl);

    return {
      signedUrl,
      path: `${parsedUrl.origin}${parsedUrl.pathname}`,
      fileKey,
      contentType,
    };
  }

  async listFiles() {
    return await this.s3.send(
      new ListObjectsV2Command({
        Bucket: process.env.S3_BUCKET,
      })
    );
  }
}
