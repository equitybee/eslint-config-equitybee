# eslint-config-equitybee

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the recommended EquityBee JavaScript style

## Installation

```
$ npm install --save-dev eslint eslint-config-equitybee
```

## Usage

Once the `eslint-config-equitybee` package is installed, you can use it by specifying `equitybee` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "equitybee",
  "rules": {
    // Additional, per-project rules...
  }
}
```

### Using the `equitybee` config with `eslint:recommended`

There are several rules in the [`eslint:recommended` ruleset](http://eslint.org/docs/rules/) that EquityBee style is not opinionated about that you might want to enforce in your project.

To use the EquityBee style in conjunction with ESLint's recommended rule set, extend them both, making sure to list `equitybee` last:

```js
{
  "extends": ["eslint:recommended", "equitybee"],
  "rules": {
    // Additional, per-project rules...
  }
}
```

## How to make a new release

Run:

```
npm run release
```

and follow the instructions.

## License

Apache-2 © EquityBee
