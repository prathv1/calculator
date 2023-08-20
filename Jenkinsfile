pipeline {
  agent any
  tools { nodejs 'node' }
  environment {
    PATH="/usr/local/bin/:/opt/homebrew/bin/:${env.PATH}"
    DOCKERHUB_CREDENTIALS = credentials('dockerhub')
  }
  stages {
    stage('test') {
      steps {
        sh 'npm i'
        sh 'npm test'
      }
    }
    stage('Docker build') {
      steps {
        sh 'docker build -f Dockerfile -t calcapp .'
      }
    }
    stage('push calcapp to dockerHub') {
      steps {
        sh 'docker tag calcapp prathvirajbn/calcapp'
        sh 'docker push prathvirajbn/calcapp:latest'
      }
    }

    stage('deploy') {
      steps {
        sh 'ansible-playbook playbook.yml -i ansibleInventory.ini'
      }
    } 
  }
}