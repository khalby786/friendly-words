const friendlyWords = require("friendly-words");
const sampleSize = require('lodash.samplesize');
import { NowRequest, NowResponse } from '@vercel/node'

module.exports = (req: NowRequest, res: NowResponse) => {
    const predicates = friendlyWords.predicates;
    const objects = friendlyWords.objects;
    let predicates_sample: string[], objects_sample: [];
    if (!req.query.num) {
        predicates_sample = sampleSize(predicates, 1);
        objects_sample = sampleSize(objects, 1);
    } else {
        predicates_sample = sampleSize(predicates, req.query.num);
        objects_sample = sampleSize(objects, req.query.num);
    }
    let paired_words: string[] = predicates_sample.map(
        (predicate, index) => (`${predicate}-${objects_sample[index]}`)
    )
    res.status(200).json({ paired_words: paired_words })
}