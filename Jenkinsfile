pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS' // Must match your Jenkins Node.js installation name
    }
    
    environment {
        VERCEL_TOKEN = credentials('qTRC5jxwgNP3xrilCLc0VUpd')
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Build') {
            steps {
                sh 'CI=true npm run build'
            }
        }
        
        stage('Deploy') {
            steps {
                sh 'npm install -g vercel@latest'
                sh 'vercel deploy --prod --token=$VERCEL_TOKEN --confirm'
            }
        }
    }
    
    post {
        always {
            node { // This provides the required context
                cleanWs(
                    cleanWhenAborted: true,
                    cleanWhenFailure: true,
                    cleanWhenSuccess: true,
                    cleanWhenUnstable: true,
                    deleteDirs: true
                )
                echo 'Workspace cleaned successfully'
            }
        }
    }
}

//qTRC5jxwgNP3xrilCLc0VUpd