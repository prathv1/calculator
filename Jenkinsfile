pipeline {
  agent any
  tools {nodejs "node"}
  stages {
    stage("build") {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }
    stage("Docker build") {
        sh 'docker build -t calcapp .'
    }
    stage("Docker Run") {
      steps {
        sh 'docker tag calcapp prathvirajbn/calcapp'
        withDockerRegistry([ credentialsId: "dockerHubCreds", url: "" ]) {
          sh 'docker push prathvirajbn/calcapp:latest'
        }
      }
    }
    // stage("deploy") {
    //   steps {
    //     sh 'cd ./dist'
    //     sh 'ansible-playbook deploy.yml'
    //   }
    // }
  }
}
