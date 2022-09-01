# Spec News

This is the website for the SpecNews podcast; it's written using a fairly standard Gatsby setup and some simple React components and CSS. We share it for your interest, though if you spot a typo feel free to send a patch!

## Building

```bash
yarn install --force # Because we sometimes get issues with sharp
yarn run develop
```

## View in Browser

You can view the website in browser at http://localhost:8000/

## Troubleshooting

Gatsby sometimes goes wrong/gets confused. First port of call is to kill it,
then clear the `.cache` and `public` folders:

```bash
rm -Rf .cache public
```

If you are running Windows and encounter an error installing `fsevents`, then
try:

```bash
yarn install --ignore-optional --force
```
