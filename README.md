# k8s-gitops-workshop

## Prerequisite

- kubeseal
- kube-secret-encode
- Pulumi CLI

Install kubesel

```bash
brew install kubeseal
```

Install kube-secret-encode

> Note: Ensure you have `~/go/bin` in your $PATH. If you don't, run `echo "export PATH=\"\$GOPATH/bin:\$PATH\"" >> ~/.bashrc`.


```bash
curl https://raw.githubusercontent.com/WhatTheFar/kube-secret-encode/master/install.sh | bash -s -- -b ~/go/bin
```

Intall Pulumi CLI

```bash
brew install pulumi
```

<https://www.pulumi.com/docs/get-started/install/>

## Install node packages

```bash
npm install
```
