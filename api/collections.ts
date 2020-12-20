const friendlyWords = require("friendly-words");
const sampleSize = require("lodash.samplesize");
import { NowRequest, NowResponse } from '@vercel/node'

module.exports = (req: NowRequest, res: NowResponse) => {
    const collections: string[] = friendlyWords.collections;
    let sample: string[];
    if (!req.query.num) {
        sample = sampleSize(collections, 1);
    } else {
        sample = sampleSize(collections, req.query.num);
    }
    res.status(200).json({ collections: sample })
}