#!/usr/bin/env sh

set -x

# Create security group
sg="tw-postgres-rds"

aws ec2 create-security-group --group-name $sg --description "Allow PostgreSQL access from internet"
aws ec2 authorize-security-group-ingress --group-name $sg --protocol tcp --port 5432 --cidr 0.0.0.0/0
aws ec2 describe-security-groups --group-names $sg

sg_id=$(aws ec2 describe-security-groups --group-names "tw-postgres-rds" --query "SecurityGroups[0].GroupId" --output text)

# Create Postgres DB Instance
aws rds create-db-instance \
  --db-instance-identifier tw-postgres-rds \
  --db-instance-class db.t3.micro \
  --allocated-storage 20 \
  --engine postgres \
  --engine-version 11.5 \
  --vpc-security-group-ids $sg_id \
  --multi-az \
  --master-username twuser \
  --master-user-password mudar123

# Wait Postgres DB Instance be ready
aws rds wait db-instance-available --db-instance-identifier tw-postgres-rds

# Create read replica
aws rds create-db-instance-read-replica \
  --db-instance-identifier tw-postgres-rds-replica \
  --source-db-instance-identifier tw-postgres-rds

