import S3 from "react-aws-s3";

const config = {
    bucketName: '',
    dirName: 'photos', 
    region: 'us-west-1',
    accessKeyId: '',
    secretAccessKey: '',
};

export const ReactS3Client = new S3(config);