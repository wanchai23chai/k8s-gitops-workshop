import * as pulumi from '@pulumi/pulumi';
import * as awsx from '@pulumi/awsx';
import * as eks from '@pulumi/eks';

const config = new pulumi.Config();
const awsConfig = new pulumi.Config('aws');

const postfix = '-' + config.require('postfix');
const profileName = awsConfig.require('profile');

const vpc = new awsx.ec2.Vpc('k8s-workshop', {
  subnets: [{ type: 'public' }],
  numberOfAvailabilityZones: 'all',
  tags: {
    Name: `k8s-workshop${postfix}`,
  },
});

const cluster = new eks.Cluster('k8s-workshop', {
  vpcId: vpc.id,
  subnetIds: vpc.publicSubnetIds,
  instanceType: 't3.small',
  desiredCapacity: 1,
  minSize: 1,
  maxSize: 1,
  name: `k8s-workshop${postfix}`,
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
