pipeline{
    agent any

    environment{
        DOCKER_USER = "janithad"
        DOCKER_BACKEND = "janithad/mern-backend"
        DOCKER_FRONTEND = "janithad/mern-frontend"
    }

    stages{
        stage ('Chekkout Code'){
            steps{
                git branch: 'main', url: 'https://github.com/Jdilsham/mern-OnlineStore.git'
            }
        }

        stage ('Build Backend Image'){
            steps{
                dir('backend'){
                    script{
                        sh "docker build -t  ${DOCKER_BACKEND}:${BUILD_NUMBER} ."
                    }
                }
            }
        }
        stage ('Build Frontend Image'){
            steps{
                dir('frontend'){
                    script{
                        sh "docker build -t ${DOCKER_FRONTEND}:${BUILD_NUMBER} ."
                    }
                }
            }
        }

        stage('Push to DockerHub'){
            steps{
                script{
                    withCredentials([string(credentialsId: 'DOCKER_PASS', variable: 'DOCKER_PASS')]) {
                        sh "echo ${DOCKER_PASS} | docker login -u ${DOCKER_USER} --password-stdin"
                    }
                    sh "docker push ${DOCKER_BACKEND}:${BUILD_NUMBER}"
                    sh "docker push ${DOCKER_FRONTEND}:${BUILD_NUMBER}"
                }
            }
        }

        stage('Tag Latest'){
            steps{
                script{
                    sh "docker tag ${DOCKER_BACKEND}:${BUILD_NUMBER} ${DOCKER_BACKEND}:latest"
                    sh "docker tag ${DOCKER_FRONTEND}:${BUILD_NUMBER} ${DOCKER_FRONTEND}:latest"
                    sh "docker push ${DOCKER_BACKEND}:latest"
                    sh "docker push ${DOCKER_FRONTEND}:latest"
                }
            }
        }

        stage('Deploy to GKE'){
            steps{
                sh """
                    gcloud auth activate-service-account --key-file=/var/lib/jenkins/gcp-key.json
                    gcloud config set project todo-478712
                    gcloud container clusters get-credentials dev-cluster --zone asia-south1

                    kubectl apply -f k8s/namespace.yaml
                    kubectl apply -f k8s/mongo.yaml
                    kubectl apply -f k8s/backend.yaml
                    kubectl apply -f k8s/frontend.yaml
                    kubectl apply -f k8s/ingress.yaml

                    kubectl set image deployment/backend-deployment mern-backend=${DOCKER_BACKEND}:latest -n online-store
                    kubectl set image deployment/frontend-deployment mern-frontend=${DOCKER_FRONTEND}:latest -n online-store
                """
            }
        }

    }
}