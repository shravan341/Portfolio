pipeline {
    agent any // Use any available agent
    
    tools {
        nodejs 'NodeJS' // Must match your Jenkins Node.js tool name
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
                sh 'CI=true npm run build' // Recommended for Next.js in CI
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    sh 'npm install -g vercel@latest'
                    sh 'vercel deploy --prod --token=$VERCEL_TOKEN --confirm'
                }
            }
        }
    }
    
    post {
        always {
            script {
                // Universal workspace cleanup
                echo "Cleaning workspace at ${env.WORKSPACE}"
                cleanWs(cleanWhenAborted: true, cleanWhenFailure: true, cleanWhenNotBuilt: true, cleanWhenUnstable: true)
                echo 'Workspace cleanup completed'
            }
        }
    }
}
//qTRC5jxwgNP3xrilCLc0VUpd