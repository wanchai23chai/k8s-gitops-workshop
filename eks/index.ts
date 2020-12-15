import * as pulumi from '@pulumi/pulumi';
import * as awsx from '@pulumi/awsx';
import * as eks from '@pulumi/eks';

const config = new pulumi.Config();
const awsConfig = new pulumi.Config('aws');

const postfix = '-' + config.require('postfix');
const profileName = awsConfig.require('profile');

const vpc = awsx.ec2.Vpc.fromExistingIds('k8s-gitops-workshop', {
  vpcId: 'vpc-0744bad5197560d1e',
  publicSubnetIds: [
    'subnet-03d850ae277874509',
    'subnet-0122e073dba3547f7',
    'subnet-044e99267b4119224',
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
