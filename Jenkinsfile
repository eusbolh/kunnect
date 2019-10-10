#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'node'
            args '-u root'
        }
    }

    stages {
        /*
        stage('Installing') {
            steps {
                echo 'Installing npm packages...'
                sh 'npm install'
            }
        }
        stage('Building') {
            steps {
                sh 'npm run build'
            }
        }
        */
        stage('Copying Files') {
            steps {
                sh 'cp build/* /var/www/html'
            }
        }
    }
}
