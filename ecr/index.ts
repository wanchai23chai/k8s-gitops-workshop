import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws';

const config = new pulumi.Config();

const postfix = '-' + config.require('postfix');

const apiGateway = new aws.ecr.Repository('api-gateway', {
  name: `k8s-gitops-workshop-api-gateway${postfix}`,
});

const calculator = new aws.ecr.Repository('calculator', {
  name: `k8s-gitops-workshop-calculator${postfix}`,
});

export const apiGatewayRepositoryName = apiGateway.name;
export const apiGatewayRepositoryUrl = apiGateway.repositoryUrl;

export const calculatorRepositoryName = calculator.name;
export const calculatorRepositoryUrl = calculator.repositoryUrl;
