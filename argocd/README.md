# Argo CD

## 1. Setup Repository Credentials

### 1.1. Add ssh key to repository

Please follow these steps: [Managing Deploykey](https://developer.github.com/v3/guides/managing-deploy-keys/#deploy-keys)

### 1.2 Configure secret

Copy `repository-secret.yaml` example from below and paste it as `repository-secret.yaml`.
Replace the example private key with your recently generated key.

Then, encrypt bare Secret into [SealedSecret](https://github.com/bitnami-labs/sealed-secrets)
using `kubeseal`.

```bash
cat repository-secret.yaml \
    | kube-secret-encode \
    | kubeseal --format yaml \
    > repository-secret.sealed.yaml
```

> Please noted that `repository-secret.yaml` **must not be commited** in git,
> since it stores git credentials.

For more detail, please visits [official doc about declarative setup of repository credentials](https://argoproj.github.io/argo-cd/operator-manual/declarative-setup/#repository-credentials).

`repository-secret.yaml` example:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: repository-secret
  namespace: argocd
  annotations:
    argocd.argoproj.io/compare-options: IgnoreExtraneous
    argocd.argoproj.io/sync-options: Prune=false
stringData:
  k8sWorkshopDeployKey: |
    -----BEGIN OPENSSH PRIVATE KEY-----
    b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAACFwAAAAdzc2gtcn
    NhAAAAAwEAAQAAAgEA6yu5wPwtkLBAjoUal3DbfM9N0pdJxqgLPeA20UxA07/I00I8ScF/
    1sYiCERR2bg24YcVWWGsKAYD4JizLElxkcqB7H2mzZ3tjcyBTTCLa//dL5kkq5xT2VBk6c
    ...
    sroKNX+luOWtqTjNFq2Y/nzBdUL7stxXT2AhQAXNgyTyLv5uav3IktZ8TQgzGw+gxmQIaQ
    VvbsG5L407ye+d1pNweOCfq2MKUDifWTlmo5aXFGAJx5iQ1dyk0GygamFM/ja7Qicr3nF4
    B6dD50tNpdf7AAAAEmpha3BhdC5tQGdtYWlsLmNvbQ==
    -----END OPENSSH PRIVATE KEY-----
```

## 2. Install ArgoCD

```bash
kubectl apply -f namespace.yaml
kubectl apply -k controller
```

## 3. Configure ArgoCD Server

### 3.1. Expose ArgoCD API server

```bash
kubectl port-forward svc/argocd-server -n argocd 8080:443
```

Now, the API server can then be accessed using the localhost:8080.

> By default, the Argo CD API server is not exposed with an external IP. For more details, visit the [official guide](https://argoproj.github.io/argo-cd/getting_started/#3-access-the-argo-cd-api-server)
> for accessing the Argo CD API Server.

### 3.2. Update admin's password

Follows the [Login Using The CLI](https://argoproj.github.io/argo-cd/getting_started/#4-login-using-the-cli)
instruction.

### 3.3. Additional Configs

All additonal configurations are gathered by kustomize (`kustomization.yaml`),
including the repository credential secret.
You can apply all configs by running these commands:

For more configuations, consults [the official doc](https://argoproj.github.io/argo-cd/operator-manual/declarative-setup/).

```bash
kubectl apply -k .
```

## 4. Init ArgoCD Application

Next, You have to edit the `application.yaml` in `applications/<overlays>`
directory to fit your own bespoke app.

Mainly, all you need to do is changing `metadata.name` to your project name
and `spec.source.repoURL` to your manifest repo in ssh manner
(e.g. `git@github.com:YOUR_ORG/YOUR_REPO.git`).

For more detail, please visit the argo's `kind: Application` reference:
<https://argoproj.github.io/argo-cd/operator-manual/application.yaml>

> Cautions: don't deploy all applications until you know what are you doing.
> some apps requires prerequisite setups, especially when deploying in
> recently provisioned environments.

```bash
OVERLAY=ap-southeast-1
kubectl apply -f application/$OVERLAY
```
