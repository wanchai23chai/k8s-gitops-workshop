# k8s-gitops-workshop

## Tools

- `argocd`
- `aws`
- `kubectl`
- `kubeseal`
- `kube-secret-encode`
- `kustomize`
- `pulumi`

### argocd CLI

```bash
brew install argocd
```

### aws CLI

```bash
brew install awscli
```

### kubectl

```bash
brew install kubectl
```

### kubeseal

```bash
brew install kubeseal
```

### kube-secret-encode

> Note: Ensure you have `~/go/bin` in your $PATH. If you don't, run `echo "export PATH=\"\$GOPATH/bin:\$PATH\"" >> ~/.bashrc`.

```bash
curl https://raw.githubusercontent.com/WhatTheFar/kube-secret-encode/master/install.sh | bash -s -- -b ~/go/bin
```

### kustomize

```bash
brew install kustomize
```

### pulumi CLI

```bash
brew install pulumi
```

<https://www.pulumi.com/docs/get-started/install/>

## Install node packages

```bash
npm install
```


<br/><br/><br/>



## For Windows users
```Use AWS Cloud9 as a dev environment
https://ap-northeast-1.console.aws.amazon.com/cloud9/home/product
```

### argocd CLI

```bash
Follow https://argoproj.github.io/argo-cd/cli_installation/ for installation
```

### aws CLI

```bash
No need installation. Cloud9 already provide AWS cli itself
```

### kubectl

```bash
Follow https://kubernetes.io/docs/tasks/tools/install-kubectl/ for installation
```

### kubeseal

```bash
Follow https://github.com/bitnami-labs/sealed-secrets/releases for installation
```

### kube-secret-encode

```bash
No installation needed for Cloud9
```

### kustomize

```bash
Follow https://kubectl.docs.kubernetes.io/installation/kustomize/binaries/ for installation
```

### pulumi CLI

```bash
Follow https://www.pulumi.com/docs/get-started/install/ and select Linux tab for installation
```

<https://www.pulumi.com/docs/get-started/install/>

## Install node packages

```bash
npm install
```
