# hello-world

## Setup

- Provision ECRs
  - Similar to [`eks.md`](eks.md)
- Create k8s namespaces for hello-world

## Calculator

1. Fork source code repository
   - URL: <https://github.com/SCGWEDOtech/k8s-gitops-workshop-calculator>
2. Cofigure GitHub Action workflow
   - `IMAGE_REPOSITORY`
   - `GIT_TARGET_REPO`
3. Generate GitHub personal access token
   - With full repo scope
4. Set repository's secrets
   - `AWS_ACCESS_KEY_ID`
   - `AWS_ACCESS_ACCESS_KEY`
   - `GITOPS_REPO_TOKEN`: the previous personal acces token
5. Commit and push source code
   - Make sure you are using `main` branch
6. Push tag version `v0.0.1`

## Api Gateway

1. Fork source code repository
   - URL: <https://github.com/SCGWEDOtech/k8s-gitops-workshop-api-gateway>
2. Repeat step 2-6 of [calculator](#calculator)

## Update Source Code Repository

1. Add 'Hello World!' endpoint v2 for Api Gateway
2. Commit and push
