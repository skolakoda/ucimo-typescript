# Učimo Typescript

![Typescript](https://upload.wikimedia.org/wikipedia/commons/a/a6/TypeScript_Logo.png)

[Typescript](http://www.typescriptlang.org/) je nadskup Javascripta. Svaki validan Javascript već radi u Typescript-u, plus podržava mnoge ES6 opcije. Glavna specifičnost Typescripta je opciono ekspliciranje tipova promenljivih.

TypeScript je razvio Microsoft za potrebe razvoja velikih aplikacija. Objavljen je pod slobodnom licencom oktobra 2012. Angular 2 je takođe pisan u TypeScript-u.


## Instalacija

Instaliraj Typescript:
```
npm install -g typescript
```

Preuzmi lekcije:
```
git clone https://github.com/skolakoda/ucimo-typescript.git
```

## Izvršenje

Za svaku lekciju u app.ts fajlu pišemo izvorni kod. Prvo kompajliramo .ts fajl preko konzole:
```
tsc app.ts
```
Zatim pokrećemo prevedeni .js fajl:
```
node app.js
```

Ako želiš izvršavati ts bez kompajliranja, potrebno je instalirati [ts-node](https://www.npmjs.com/package/ts-node)
```
npm install -g ts-node
ts-node app.ts
```

Za automatsko motrenje i kompajliranje ts fajlove, dovoljno je pokrenuti:
```
tsc -w
```
