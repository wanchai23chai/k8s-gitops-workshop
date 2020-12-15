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

EMAIL=<REPLACE YOUR EMAIL HERE>
pulumi confgi set postfix $EMAIL
```

## Provision

Provision cluster IaC via Pulumi CLI.

```bash
# select the certain stack
pulumi stack select k8s-workshop-eks-dev

# provision resources from IaC
pulumi up

# get the cluster name
CLUSTER_NAME=$(pulumi stack output clusterName)
# update cluster config to kubectl
aws eks update-kubeconfig --name "${CLUSTER_NAME}"
```
