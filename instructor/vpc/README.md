# vpc

## Setup

Create a new pulumi stack.

```bash
pulumi stack init k8s-gitops-workshop-vpc
# enter passphrase
```

Configure the stack.

```bash
pulumi config set aws:region ap-southeast-1
pulumi config set aws:profile k8s-gitops-workshop
```

## Provision

Provision cluster IaC via Pulumi CLI.

```bash
# select the certain stack
pulumi stack select k8s-gitops-workshop-vpc

# provision resources from IaC
pulumi up
```
