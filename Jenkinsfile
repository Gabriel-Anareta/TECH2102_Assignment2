pipeline {
	agent any

	environment {
		NETLIFY_SITE_ID = 'de9b4b31-4b1a-48d0-a336-e243e8b2d632'
		NETLIFY_AUTH_TOKEN = credentials('JenkinsAssignmentToken')
	}
	
    stages {
	
        stage('Build') {
            agent{
				docker {
					image 'node:20-alpine'
					reuseNode true
        	    }
        	}
			steps {
				sh '''
					ls -la
					node --version
					npm --version
					npm install
					npm run build
					ls -la
				'''
			}
		}

		stage('Test') {
            agent{
				docker {
					image 'node:20-alpine'
					reuseNode true
        	    }
        	}
			steps {
				sh '''
					test -f build/index.html
					npm test
				'''
			}
		}

		stage('Deploy'){
            agent {
                docker {
					image 'node:20-alpine'
					reuseNode true
        	    }
            }
            steps {
                sh '''
					npm install netlify-cli
					node_modules/.bin/netlify -v
					node_modules/.bin/netlify status
					node_modules/.bin/netlify deploy --prod --dir=build
				'''
            }
        }
	}
}