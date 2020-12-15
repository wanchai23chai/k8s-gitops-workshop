import * as pulumi from '@pulumi/pulumi';
import * as awsx from '@pulumi/awsx';
import * as eks from '@pulumi/eks';

const config = new pulumi.Config();
const awsConfig = new pulumi.Config('aws');

const postfix = '-' + config.require('postfix');
const profileName = awsConfig.require('profile');

const vpc = awsx.ec2.Vpc.fromExistingIds('k8s-gitops-workshop', {
  vpcId: 'vpc-06f37a6378148dbbb',
  publicSubnetIds: [
    'subnet-01f65e690c80befda',
    'subnet-0983985b2244a393f',
    'subnet-04575bd031fed47d6',
  ],
});

const cluster = new eks.Cluster('k8s-gitops-workshop', {
  vpcId: vpc.id,
  subnetIds: vpc.publicSubnetIds,
  instanceType: 't3.small',
  desiredCapacity: 1,
  minSize: 1,
  maxSize: 1,
  name: `k8s-gitops-workshop${postfix}`,
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
