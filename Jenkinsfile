pipeline {
  agent any
  tools {nodejs "node"}
  stages {
    stage("Docker build") {
      steps{
        sh 'docker build -f Dockerfile -t calcapp .'
      }
    }
    stage("Docker Run") {
      steps {
        sh 'docker tag calcapp prathvirajbn/calcapp'
        withDockerRegistry([ credentialsId: "dockerHubCreds", url: "" ]) {
          sh 'docker push prathvirajbn/calcapp:latest'
          // docker run -p 4001:3000 calcapp

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
