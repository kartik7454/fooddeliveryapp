
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";
import type { NextApiRequest, NextApiResponse } from 'next'
export const config = {
  api: {
    bodyParser: false,
  },
};

const readFile = (
  req: NextApiRequest,
  saveLocally?: boolean
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const options: formidable.Options = {};
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), "/public/images");
    options.filename = (name, ext, path, form) => {
      if (path.originalFilename){return  path.originalFilename.toString() }
      else {
        // Generate a default filename if original filename is undefined
        return `${name}-${Date.now()}${ext}`;
      }
    };
  }
  options.maxFileSize = 4000 * 1024 * 1024;
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

export default  async function handler (req: NextApiRequest,
  res: NextApiResponse)  {

  try {console.log("ijnjs")
    await fs.readdir(path.join(process.cwd() + "/public", "/images"));
  } catch (error) {
    await fs.mkdir(path.join(process.cwd() + "/public", "/images"));
  }
  await readFile(req, true);
  res.json({ done: "ok" });
};

