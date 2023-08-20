pipeline {
  agent any
  tools { nodejs 'node' }
  environment {
    PATH="/usr/local/bin/:${env.PATH}"
    DOCKERHUB_CREDENTIALS = credentials('dockerhub')
  }
  stages {
    // stage('test') {
    //   steps {
    //     dir("server") {
    //       sh "pwd"
    //       sh 'npm i'
    //       sh 'pm2 --name server start npm -- start'
    //       sh 'npm test'
    //       sh 'pm2 delete 0'
    //       echo 'All test passed!'
    //     }
    //   }
    // }
    stage('Docker build') {
      steps {
        // export PATH = '/usr/local/bin/:$PATH'
        sh 'docker build -f Dockerfile -t calcapp .'
      }
    }
    stage('push calcapp to dockerHub') {
      steps {
        sh 'docker tag calcapp prathvirajbn/calcapp'
        withDockerRegistry([ credentialsId: 'dockerHubCreds', url: '' ]) {
          sh 'docker push prathvirajbn/calcapp:latest'
        // docker run -p 4001:3000 calcapp
        }
      }
    }

    stage('deploy') {
      steps {
        sh 'ansible-playbook playbook.yml -i ansibleInventory.ini'
      }
    } 
  }
}