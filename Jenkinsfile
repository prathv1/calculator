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
        echo 'Run Test Cases here'
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
        // withDockerRegistry([ credentialsId: 'dockerHubCreds', url: '' ]) {
        //   sh 'docker push prathvirajbn/calcapp:latest'
        // }
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