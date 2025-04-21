pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS' // Must match your Jenkins Node.js installation name
    }
    
    environment {
        VERCEL_TOKEN = credentials('qTRC5jxwgNP3xrilCLc0VUpd')
    }
    
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Deploy to Vercel') {
            steps {
                script {
                    sh 'npm install -g vercel@latest'
                    sh 'vercel deploy --prod --token=$VERCEL_TOKEN --confirm --yes'
                }
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline completed - cleaning workspace'
            cleanWs() // This must be inside a node{} block
        }
        success {
            echo 'Build and deployment succeeded!'
        }
        failure {
            echo 'Pipeline failed! Check logs for details.'
        }
    }
}



//qTRC5jxwgNP3xrilCLc0VUpd
