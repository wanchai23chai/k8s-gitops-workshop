# eks

## Setup

Create a new pulumi stack.

```bash
pulumi stack init k8s-workshop-eks-dev
# enter passphrase
```

Configure the stack.

```bash
pulumi config set aws:region ap-southeast-1
pulumi config set aws:profile k8s-workshop
```

## Provision

Provision cluster IaC via Pulumi CLI.

```bash
pulumi up

# update cluster config to kubectl
aws eks update-kubeconfig --name trinity-dev
```
