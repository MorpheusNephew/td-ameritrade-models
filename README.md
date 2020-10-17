# TD Ameritrade Models

This is the repository for all of the TD Ameritrade schemas provided on TD Ameritrade's developer [site](https://developer.tdameritrade.com/).

## Notes

For the account type there are two properties that are not available:

- replacingOrderCollection
- childOrderStrategies

The reason for this is because they don't provide valid schema in regards to OpenAPI where those properties are arrays, but do not provide the type of the arrays.

## Thanks

The models were first generated with [swagger-to-ts](https://github.com/drwpow/swagger-to-ts) in which without that, this would not be happening.
