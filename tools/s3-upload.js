import {chalkProcessing, chalkSuccess, chalkError} from './chalkConfig';

const s3 = require('s3');

const client = s3.createClient({
  maxAsyncS3: 20,
  s3RetryCount: 3,
  s3RetryDelay: 1000,
  multipartUploadThreshold: 20971520,
  multipartUploadSize: 15728640,
  s3Options: {
    accessKeyId: "AKIAJVXJXYA5A3AYCR6Q",
    secretAccessKey: "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",
    region: "us-east-1",
  },
});

let params = {
  localDir: "dist",
  deleteRemoved: true,
  s3Params: {
    Bucket: "snt-",
    Prefix: "",
  },
};

if (process.argv[2] === "pre") {
  params.s3Params.Bucket += "pre";
} else if (process.argv[2] === "dev") {
  params.s3Params.Bucket += "dev";
} else if (process.argv[2] === "prod") {
  params.s3Params.Bucket += "prod";
}

const uploader = client.uploadDir(params);
uploader.on('error', function (err) {
  console.error(chalkError("unable to sync:", err.stack));
});
uploader.on('progress', function () {
  console.log(chalkProcessing("progress", uploader.progressAmount, uploader.progressTotal));
});
uploader.on('end', function () {
  console.log(chalkSuccess("done uploading"));
});
