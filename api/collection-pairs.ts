const friendlyWords = require("friendly-words");
const sampleSize = require('lodash.samplesize');
import { NowRequest, NowResponse } from '@vercel/node'

module.exports = (req: NowRequest, res: NowResponse) => {
    const predicates = friendlyWords.predicates;
    const collections = friendlyWords.collections;
    let predicates_sample: string[], collections_sample: string[];
    if (!req.query.num) {
        predicates_sample = sampleSize(predicates, 1);
        collections_sample = sampleSize(collections, 1);
    } else {
        predicates_sample = sampleSize(predicates, req.query.num);
        collections_sample = sampleSize(collections, req.query.num);
    }
    let paired_words = predicates_sample.map(
        (predicate, index) => (`${predicate}-${collections_sample[index]}`)
    )
    res.status(200).json({ paired_words: paired_words })
}