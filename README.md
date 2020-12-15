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

sudo curl -sSL -o /usr/local/bin/argocd https://github.com/argoproj/argo-cd/releases/download/$VERSION/argocd-linux-amd64
sudo chmod +x /usr/local/bin/argocd
argocd version
```

### aws CLI

```bash
No need installation. Cloud9 already provide AWS cli itself
```

### kubectl

```bash
Follow https://kubernetes.io/docs/tasks/tools/install-kubectl/ for installation

sudo curl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl"
sudo chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/kubectl
kubectl version --client
```

### kubeseal

```bash
Follow https://github.com/bitnami-labs/sealed-secrets/releases for installation

sudo wget https://github.com/bitnami-labs/sealed-secrets/releases/download/v0.13.1/kubeseal-linux-amd64 -O kubeseal
sudo install -m 755 kubeseal /usr/local/bin/kubeseal
kubeseal --version
```

### kube-secret-encode

> Note: Ensure you have `~/go/bin` in your $PATH. If you don't, run `echo "export PATH=\"\$GOPATH/bin:\$PATH\"" >> ~/.bashrc`.

```bash
sudo curl https://raw.githubusercontent.com/WhatTheFar/kube-secret-encode/master/install.sh | bash -s -- -b ~/go/bin
```

### kustomize

```bash
Follow https://kubectl.docs.kubernetes.io/installation/kustomize/binaries/ for installation

sudo curl -s "https://raw.githubusercontent.com/\
kubernetes-sigs/kustomize/master/hack/install_kustomize.sh"  | bash
sudo install -m 755 kustomize /usr/local/bin/kustomize
kustomize version
```

### pulumi CLI

```bash
Follow https://www.pulumi.com/docs/get-started/install/ and select Linux tab for installation

sudo curl -fsSL https://get.pulumi.com | sh

restart your terminal
pulumi version
```

## Install node packages

```bash
npm install
```
