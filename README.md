# friendly-words

API for the <a href="https://www.npmjs.com/package/friendly-words"><code>friendly-words</code> npm package by Glitch.</a>

## Endpoints

`https://friendlywords.now.sh/api/predicates`

```json
{
    "predicates": [ "thorn" ] 
}
```

`https://friendlywords.now.sh/api/objects`

```json
{
    "objects": [ "glitter" ]
}
```
`https://friendlywords.now.sh/api/teams`

```json 
{
    "teams": [ "conglomerate" ]
}
```
`https://friendlywords.now.sh/api/collections`

```json
{
    "collections": [ "nest" ]
}
```

`https://friendlywords.now.sh/api/word-pairs`

```json
{
  "paired_words": [
    "boatneck-emperor"
  ]
}
```

`https://friendlywords.now.sh/api/team-pairs`

```json
{
  "paired_teams": [
    "positive-lineup"
  ]
}
```

`https://friendlywords.now.sh/api/collection-pairs`

```json
{
  "paired_words": [
    "flicker-playlist"
  ]
}
```

All the above endpoints return one word each. If you want more than one word or word pairs, append `?num=NUMBER_OF_WORDS` to the URL.

*Example:*

https://friendlywords.now.sh/api/collections?num=20

```json
{
  "collections": [
    "supply",
    "potpourri",
    "pack",
    "batch",
    "list",
    "bouquet",
    "troupe",
    "assembly",
    "stockpile",
    "cumulation",
    "herd",
    "jumble",
    "organization",
    "mix",
    "miscellany",
    "florilegium",
    "album",
    "compilation",
    "store",
    "selection"
  ]
}
```

Made with 🍩s by [Khaleel Gibran](https://github.com/khalby786).