# Flaguessr

A flag guessing game in Svelte for learning purposes.

## Running

```sh
npm install
```
```sh
npm run dev
```

## Countries

To add more countries, change [src/countries.json](src/countries.json), with the following format:
```json
"country_code": {
    "flag": "full_url",
    "aliases": [
        "country_aliases",
        ...
    ]
}
```