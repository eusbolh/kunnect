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
                sh 'mkdir -p /var/www/html/'
                sh 'cp -r build/* /var/www/html/'
            }
        }
    }
}
