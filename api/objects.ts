const friendlyWords = require("friendly-words");
const sampleSize = require("lodash.samplesize");
import { NowRequest, NowResponse } from '@vercel/node'

module.exports = (req: NowRequest, res: NowResponse) => {
    const objects: string[] = friendlyWords.objects;
    let sample: string[];
    if (!req.query.num) {
        sample = sampleSize(objects, 1);
    } else {
        sample = sampleSize(objects, req.query.num);
    }
    res.status(200).json({ objects: sample })
}