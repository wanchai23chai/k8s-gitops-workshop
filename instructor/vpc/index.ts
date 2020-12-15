import * as aws from '@pulumi/aws';
import * as awsx from '@pulumi/awsx';

const vpc = new awsx.ec2.Vpc('k8s-workshop', {
  subnets: [{ type: 'public' }],
  numberOfAvailabilityZones: 'all',
  tags: {
    Name: 'k8s-workshop',
  },
});

const apiGateway = new aws.ecr.Repository('api-gateway', {
  name: `k8s-gitops-workshop-api-gateway`,
});

const calculator = new aws.ecr.Repository('calculator', {
  name: `k8s-gitops-workshop-calculator`,
});

export const vpcId = vpc.id;
export const vpcPublicSubnetIds = vpc.publicSubnetIds;

export const apiGatewayRepositoryName = apiGateway.name;
export const apiGatewayRepositoryUrl = apiGateway.repositoryUrl;

export const calculatorRepositoryName = calculator.name;
export const calculatorRepositoryUrl = calculator.repositoryUrl;
