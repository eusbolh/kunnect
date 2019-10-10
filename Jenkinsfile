#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'node'
            args '-u root'
        }
    }

    stages {
        stage('Installing') {
            steps {
                echo 'Installing npm packages...'
                sh 'npm install'
            }
        }
        state('Building') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
