0# AWS Amplify Setup Guide for reDeFi

This guide contains the exact click-by-click steps you need to follow in the AWS Management Console to publish secure PR previews for `sdk-demo` and `docs`.

## Prerequisite: Push to GitHub
I have created the `amplify.yml` file in the root of your repository. **Make sure to commit and push this file to your GitHub repository** before starting the AWS steps, as AWS Amplify needs to read this configuration.

---

## Part 1: Setting up the `sdk-demo` App

1. Log in to the **AWS Management Console**.
2. Search for and navigate to **AWS Amplify**.
3. Click **Create new app** (or **Get started** under "Host your web app").
4. Select **GitHub** as the source code provider and click **Next**.
5. Authorize AWS Amplify with GitHub if prompted, then select the `reDeFi` repository and the `main` branch.
6. **Important Checkbox:** Check the box that says **"My app is a monorepo"**.
7. In the **Monorepo app root** field that appears, enter exactly: `apps/sdk-demo`
8. Click **Next**. Amplify should automatically detect the `amplify.yml` from the root.
9. On the Build settings page, scroll down to **Advanced Settings**.
10. Under **Environment variables**, add all necessary keys your SDK demo needs (e.g., values from your `.env` and `.env.local` files like RPC URLs or Project IDs).
11. Click **Next**, review the details, and click **Save and deploy**.

## Part 2: Setting up the `docs` App

You will create a completely separate Amplify App for the docs.

1. Go back to the main AWS Amplify console dashboard.
2. Click **Create new app**.
3. Select **GitHub**, the `reDeFi` repository, and the `main` branch.
4. **Important Checkbox:** Check **"My app is a monorepo"**.
5. In the **Monorepo app root** field, enter exactly: `apps/docs`
6. Click **Next**.
7. Under **Advanced Settings**, add any environment variables the docs might need (if any).
8. Click **Next**, review, and click **Save and deploy**.

---

## Part 3: Enabling PR Previews

Now you need to tell Amplify to listen for Pull Requests and build preview environments. Do this for **both** the `sdk-demo` and `docs` apps:

1. Open the App in the Amplify Console.
2. In the left-hand navigation pane, under **Hosting environments**, click **Previews**.
3. Click **Enable Previews**.
4. (If you haven't already) Install the AWS Amplify GitHub App by clicking the prompt. This gives Amplify permission to comment on your PRs with the preview link.
5. Once installed, under the Previews settings, select the branch(es) you want to trigger previews for. Typically, you select `main` so that any PR *targeting* `main` will generate a preview.
6. Click **Save**.

---

## Part 4: Securing Previews with a Password

To ensure your preview URLs aren't publicly accessible to anyone on the internet, enable HTTP Basic Auth. Do this for **both** the `sdk-demo` and `docs` apps:

1. In the left-hand navigation pane, under **Hosting**, click **Access control**.
2. Click **Manage access**.
3. Change the Access Setting from **Publicly accessible** to **Restricted - password required**.
4. Choose whether to protect the entire app (Global) or select specific branches (you can check all branches/previews).
5. Enter a **Username** and **Password** of your choosing.
6. Click **Save**.

**⚠️ Critical Final Step:** Because Next.js apps use Server-Side Rendering (SSR), the Edge nodes need to be refreshed for the password protection to apply. 
- Go back to your **All apps** view.
- Open the app, go to your current deployment, and click **Redeploy this version** (or simply merge a commit/PR to trigger a new build). The password protection will be active once the build finishes.