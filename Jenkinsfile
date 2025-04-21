pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS'
    }
    
    environment {
        VERCEL_TOKEN = credentials('qTRC5jxwgNP3xrilCLc0VUpd')
    }
    
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
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
            script {
                // Safe workspace cleanup
                try {
                    dir(env.WORKSPACE) {
                        deleteDir()
                    }
                    echo 'Workspace cleaned successfully'
                } catch(e) {
                    echo "Cleanup warning: ${e.message}"
                }
            }
        }
    }
}


//qTRC5jxwgNP3xrilCLc0VUpd