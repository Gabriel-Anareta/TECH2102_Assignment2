pipeline {
	agent any

	stages {
		stage('Build') {
    	    agent {
    	        docker {
    	            image 'node:20-alpine'
    	            reuseNode true
    	        }
    	    }
		}
	}
}