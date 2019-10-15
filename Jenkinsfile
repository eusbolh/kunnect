#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'node'
            args '-u root'
        }
    }
    
    environment {
        SERVER_IP       = credentials('front-end-server-ip')
        SERVER_PASS     = credentials('front-end-server-pass')
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
                echo 'Copying files'
                echo $SERVER_IP
                echo $SERVER_PASS
            }
        }
    }
}
