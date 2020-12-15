# argocd

1. Create a private repository for config repository
2. Push source code
3. [Create SSH key (no passphrase)](#3)
4. Set DeployKey
5. Copy the private key into a secret
6. [Seal the secret](#6)
7. [Install ArgoCD controller](#7)
8. [Port-forward argocd server](#8)
9. [Login into argocd](#9)
10. Update admin's password
11. [Apply additional configs](#11)
12. Change hello-world application configs
    - `metadata.name`
    - `spec.source.repoURL`
13. [Init hello-world application](#13)
    - Create namespace first

## Reference

### 3

```bash
# save the key at ~/.ssh/k8s-workshop
# and enter empty passphrase
ssh-keygen -t ed25519 -C "jakpat.m@gmail.com"
```

### 6

```bash
cat repository-secret.yaml \
    | kube-secret-encode \
    | kubeseal --format yaml \
    > repository-secret.sealed.yaml
```

### 7

```bash
kubectl apply -f namespace.yaml
kubectl apply -k controller
```

### 8

```bash
kubectl port-forward svc/argocd-server -n argocd 8080:443
```

### 9

```bash
kubectl get pods -n argocd -l app.kubernetes.io/name=argocd-server -o name \
    | cut -d'/' -f 2
argocd login localhost:8080
argocd account update-password
```

### 11

```bash
kubectl apply -k .
```

### 13

Create namespace for hello-world

```bash
# from project root directory
kubectl apply -f hello-world/namespace.yaml
```

Apply hello-world application to argocd

```bash
OVERLAY=ap-southeast-1
kubectl apply -f application/$OVERLAY/hello-world.yaml
```
