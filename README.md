# SongAndTaeStudio

SongAndTaeStudio is an art gallery website showcasing the works of Song and Tae Studio. Users can view high-quality images of the artwork, read client reviews, and get in touch with the studio. The project is built using Next.js, React, and Tailwind CSS, and leverages AWS services for image storage and distribution. This is all powered by SST.

## Prerequisites

### AWS

1. First install AWS CLI on your device [using this link](https://awscli.amazonaws.com/AWSCLIV2.msi)
2. After installation, check installed correctly by opening `Start` menu, search for `cmd`, and open a command line interface. Then type `aws --version`

### SST

To run this locally, you must install [SST](https://sst.dev/) by running `npm i -g sst`

## Deployment

Using the SST console, auto-deployments are set to run against the dev and prod branches of this project.

## AWS Setup

Because this project uses AWS resources, you must have the correct credentials setup in order to develop locally.

### Initial one-time setup

1. At the project root, open a terminal
2. run `aws configure sso` and:
   - Put in the following details:
     - **SSO session name (Recommended)**: `songandtaestudio`
     - **SSO start URL [None]**: `https://songandtaestudio.awsapps.com/start/#`
     - **SSO region [None]**: `us-west-2`
     - **SSO registration scope [sso:account:access]**: `AdministratorAccess`
   - This will open a browser window where you will be prompted to log in. Do so given the credentials provided
   - After successful login, you have more details to fill in at the terminal:
     - Choose the `songandtaestudio-dev` account
     - **CLI default client Region [None]**: `us-west-2`
     - **CLI default output format [None]**: `json`
     - **CLI profile name [AdministratorAccess-<account_number>]**: `songandtaestudio-dev`

### Refresh credentials

After 12 hours or so, the credentials will expire. When you try to run this locally, it may fail.

To resolve this issue, simply run `npm run sso` and follow the prompts given.

## Running locally

If you want to run this for working on pages that do not interact with SST resources, you can simply run `npm run dev`.

However, I recommend using `sst dev` to get a SST server running locally.
