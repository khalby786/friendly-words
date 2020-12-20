const friendlyWords = require("friendly-words");
const sampleSize = require("lodash.samplesize");
import { NowRequest, NowResponse } from '@vercel/node'

module.exports = (req: NowRequest, res: NowResponse) => {
    const predicates: string[] = friendlyWords.predicates;
    let sample: string[];
    if (!req.query.num) {
        sample = sampleSize(predicates, 1);
    } else {
        sample = sampleSize(predicates, req.query.num);
    }
    res.status(200).json({ predicates: sample })
}