// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../../db/dbConnect";

export default async function handler(req, res) {
    await dbConnect()

    res.send([])
    
  }


