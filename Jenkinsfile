pipeline {
    agent { 
        docker { 
            label 'docker'
            image 'docker.io/node:22-bookworm' 
        }
    }

    stages {
        stage('Build') {
            steps {
                sh 'node --version'
            }
        }
    }
}