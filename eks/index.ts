import * as pulumi from '@pulumi/pulumi';
import * as awsx from '@pulumi/awsx';
import * as eks from '@pulumi/eks';

const awsConfig = new pulumi.Config('aws');

const profileName = awsConfig.require('');

const vpc = new awsx.ec2.Vpc('k8s-workshop', {
  subnets: [{ type: 'public' }],
  numberOfAvailabilityZones: 'all',
  tags: {
    Name: 'k8s-workshop',
  },
});

const cluster = new eks.Cluster('k8s-workshop', {
  vpcId: vpc.id,
  subnetIds: vpc.publicSubnetIds,
  instanceType: 't3.small',
  desiredCapacity: 2,
  minSize: 2,
  maxSize: 2,
  name: 'k8s-workshop',
  providerCredentialOpts: {
    profileName,
  },
});

// Export the cluster's kubeconfig.
export const kubeconfig = cluster.kubeconfig;

export const vpcId = vpc.id;

export const clusterName = cluster.eksCluster.name;
export const nodeSecurityGroupName = cluster.nodeSecurityGroup.name;
export const nodeSecurityGroupId = cluster.nodeSecurityGroup.id;
