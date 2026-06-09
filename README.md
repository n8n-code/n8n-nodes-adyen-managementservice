# @n8n-dev/n8n-nodes-adyen-managementservice

![adyen-managementservice Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-adyen-managementservice.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-adyen-managementservice)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing adyen-managementservice API integrations by hand.**

Every time you connect n8n to adyen-managementservice, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to adyen-managementservice took 5 minutes, not half a day?**

This node gives you **27+ resources** out of the box: **API Key Merchant Level**, **Account Merchant Level**, **Allowed Origins Company Level**, **API Key Company Level**, **Client Key Company Level**, and 22 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-adyen-managementservice
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-adyen-managementservice`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **adyen-managementservice API** → paste your API key
3. Drag the **adyen-managementservice** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>API Key Merchant Level</b> (1 operations)</summary>

- Post Generate new API key

</details>

<details>
<summary><b>Account Merchant Level</b> (4 operations)</summary>

- Get a list of merchant accounts
- Post Create a merchant account
- Get a merchant account
- Post Request to activate a merchant account

</details>

<details>
<summary><b>Allowed Origins Company Level</b> (4 operations)</summary>

- Get a list of allowed origins
- Post Create an allowed origin
- Delete an allowed origin
- Get an allowed origin

</details>

<details>
<summary><b>API Key Company Level</b> (1 operations)</summary>

- Post Generate new API key

</details>

<details>
<summary><b>Client Key Company Level</b> (1 operations)</summary>

- Post Generate new client key

</details>

<details>
<summary><b>Users Company Level</b> (4 operations)</summary>

- Get a list of users
- Post Create a new user
- Get user details
- Patch Update user details

</details>

<details>
<summary><b>Terminal Actions Terminal Level</b> (1 operations)</summary>

- Post Create a terminal action

</details>

<details>
<summary><b>Terminal Settings Terminal Level</b> (4 operations)</summary>

- Get the terminal logo
- Patch Update the logo
- Get terminal settings
- Patch Update terminal settings

</details>

<details>
<summary><b>Payout Settings Merchant Level</b> (5 operations)</summary>

- Get a list of payout settings
- Post Add a payout setting
- Delete a payout setting
- Get a payout setting
- Patch Update a payout setting

</details>

<details>
<summary><b>Webhooks Merchant Level</b> (7 operations)</summary>

- Get List all webhooks
- Post Set up a WEBHOOK
- Delete Remove a WEBHOOK
- Get a WEBHOOK
- Patch Update a WEBHOOK
- Post Generate an HMAC key
- Post Test a WEBHOOK

</details>

<details>
<summary><b>Client Key Merchant Level</b> (1 operations)</summary>

- Post Generate new client key

</details>

<details>
<summary><b>Terminal Orders Company Level</b> (10 operations)</summary>

- Get a list of billing entities
- Get a list of shipping locations
- Post Create a shipping location
- Get a list of terminal models
- Get a list of orders
- Post Create an order
- Get an order
- Patch Update an order
- Post Cancel an order
- Get a list of terminal products

</details>

<details>
<summary><b>Allowed Origins Merchant Level</b> (4 operations)</summary>

- Get a list of allowed origins
- Post Create an allowed origin
- Delete an allowed origin
- Get an allowed origin

</details>

<details>
<summary><b>API Credentials Merchant Level</b> (4 operations)</summary>

- Get a list of API credentials
- Post Create an API credential
- Get an API credential
- Patch Update an API credential

</details>

<details>
<summary><b>Users Merchant Level</b> (4 operations)</summary>

- Get a list of users
- Post Create a new user
- Get user details
- Patch Update a user

</details>

<details>
<summary><b>Terminal Actions Company Level</b> (4 operations)</summary>

- Get a list of Android apps
- Get a list of Android certificates
- Get a list of terminal actions
- Get terminal action

</details>

<details>
<summary><b>Payment Methods Merchant Level</b> (6 operations)</summary>

- Get all payment methods
- Post Request a payment method
- Get payment method details
- Patch Update a payment method
- Post Add an Apple Pay domain
- Get Apple Pay domains

</details>

<details>
<summary><b>My API Credential</b> (5 operations)</summary>

- Get API credential details
- Get allowed origins
- Post Add allowed origin
- Delete Remove allowed origin
- Get allowed origin details

</details>

<details>
<summary><b>Terminal Settings Merchant Level</b> (4 operations)</summary>

- Get the terminal logo
- Patch Update the terminal logo
- Get terminal settings
- Patch Update terminal settings

</details>

<details>
<summary><b>Webhooks Company Level</b> (7 operations)</summary>

- Get List all webhooks
- Post Set up a WEBHOOK
- Delete Remove a WEBHOOK
- Get a WEBHOOK
- Patch Update a WEBHOOK
- Post Generate an HMAC key
- Post Test a WEBHOOK

</details>

<details>
<summary><b>Terminals Terminal Level</b> (1 operations)</summary>

- Get a list of terminals

</details>

<details>
<summary><b>Account Store Level</b> (8 operations)</summary>

- Get a list of stores
- Post Create a store
- Get a store
- Patch Update a store
- Get a list of stores
- Post Create a store
- Get a store
- Patch Update a store

</details>

<details>
<summary><b>Terminal Settings Company Level</b> (4 operations)</summary>

- Get the terminal logo
- Patch Update the terminal logo
- Get terminal settings
- Patch Update terminal settings

</details>

<details>
<summary><b>API Credentials Company Level</b> (4 operations)</summary>

- Get a list of API credentials
- Post Create an API credential
- Get an API credential
- Patch Update an API credential

</details>

<details>
<summary><b>Terminal Orders Merchant Level</b> (10 operations)</summary>

- Get a list of billing entities
- Get a list of shipping locations
- Post Create a shipping location
- Get a list of terminal models
- Get a list of orders
- Post Create an order
- Get an order
- Patch Update an order
- Post Cancel an order
- Get a list of terminal products

</details>

<details>
<summary><b>Account Company Level</b> (3 operations)</summary>

- Get a list of company accounts
- Get a company account
- Get a list of merchant accounts

</details>

<details>
<summary><b>Terminal Settings Store Level</b> (8 operations)</summary>

- Get the terminal logo
- Patch Update the terminal logo
- Get terminal settings
- Patch Update terminal settings
- Get the terminal logo
- Patch Update the terminal logo
- Get terminal settings
- Patch Update terminal settings

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from adyen-managementservice docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official adyen-managementservice OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **adyen-managementservice** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the adyen-managementservice API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
