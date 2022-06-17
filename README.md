[![Piral Logo](https://github.com/smapiot/piral/raw/develop/docs/assets/logo.png)](https://piral.io)

# [Piral Sample](https://piral.io) &middot; [![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/smapiot/piral/blob/main/LICENSE) [![Gitter Chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/piral-io/community)

> A simple example migrated from Module Federation to Piral

:zap: This sample uses the [simple example for Building Micro-Frontends](https://github.com/aws-samples/talk-dev-to-me-twitch/tree/main/micro-frontends-module-federation) to apply Piral. Compare for yourself.

You can visit this demo at [swag-ecommerce.samples.piral.cloud/](https://swag-ecommerce.samples.piral.cloud/).

## Getting Started

Just install the dependencies for each part. Start with the app shell:

```sh
cd appshell
npm i
npm run build
```

The last command is there to build the app shell. This will create an emulator, which will be useful for debugging. In a monorepo we would not need that. Also, we could leave out the emulator, but its good to have it for illustrative purposes.

Once done you can go into the pilets and resolve their dependencies individually, e.g., for `accountdetails`:

```sh
cd pilets/accountdetails
npm i
```

Note that this repository does not use a monorepo to stay close to the original. Also, the app shell is not distributed via an npm registry, but rather as a tgz.

## License

Piral and this sample code is released using the MIT license. For more information see the [license file](./LICENSE).
