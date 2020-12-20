const friendlyWords = require("friendly-words");
const sampleSize = require("lodash.samplesize");
import { NowRequest, NowResponse } from '@vercel/node'

module.exports = (req: NowRequest, res: NowResponse) => {
    const teams: string[] = friendlyWords.teams;
    let sample: string[];
    if (!req.query.num) {
        sample = sampleSize(teams, 1);
    } else {
        sample = sampleSize(teams, req.query.num);
    }
    res.status(200).json({ teams: sample })
}