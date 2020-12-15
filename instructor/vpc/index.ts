import * as awsx from '@pulumi/awsx';

const vpc = new awsx.ec2.Vpc('k8s-workshop', {
  subnets: [{ type: 'public' }],
  numberOfAvailabilityZones: 'all',
  tags: {
    Name: 'k8s-workshop',
  },
});

export const vpcId = vpc.id;
export const vpcPublicSubnetIds = vpc.publicSubnetIds;
