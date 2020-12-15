# ecr

## Setup

Create a new pulumi stack.

```bash
pulumi stack init k8s-workshop-ecr-dev
# enter passphrase
```

Configure the stack.

```bash
pulumi config set aws:region ap-southeast-1
pulumi config set aws:profile k8s-workshop

EMAIL=<REPLACE YOUR EMAIL HERE>
pulumi config set postfix $EMAIL
```

## Provision

Provision cluster IaC via Pulumi CLI.

```bash
# select the certain stack
pulumi stack select k8s-workshop-ecr-dev

# provision resources from IaC
pulumi up
```
