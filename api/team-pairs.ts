const friendlyWords = require("friendly-words");
const sampleSize = require('lodash.samplesize');
import { NowRequest, NowResponse } from '@vercel/node';

module.exports = (req: NowRequest, res: NowResponse) => {
    const predicates = friendlyWords.predicates;
    const teams = friendlyWords.teams;
    let predicates_sample: string[], teams_sample: [];
    if (!req.query.num) {
        predicates_sample = sampleSize(predicates, 1);
        teams_sample = sampleSize(teams, 1);
    } else {
        predicates_sample = sampleSize(predicates, req.query.num);
        teams_sample = sampleSize(teams, req.query.num);
    }
    let paired_teams: string[] = predicates_sample.map(
        (predicate, index) => (`${predicate}-${teams_sample[index]}`)
    )
    res.status(200).json({ paired_teams: paired_teams })
}